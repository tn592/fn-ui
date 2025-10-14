import { useState, useEffect } from "react";
import authApiClient from "../../services/auth-api-client";
import useAuthContext from "../../hooks/useAuthContext";

const AdoptButton = ({ petId, onAdoptSuccess, adoptionCost }) => {
	const [isAdopted, setIsAdopted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [userBalance, setUserBalance] = useState(null);
	const [message, setMessage] = useState("");
	const [messageType, setMessageType] = useState("info");
	const { user } = useAuthContext();
	const [showForm, setShowForm] = useState(false);
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		phone_number: "",
		address: "",
	});

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await authApiClient.get("/auth/users/me/");
				setUserBalance(res.data.account_balance);
				setUserInfo({
					...userInfo,
					name: res.data.full_name || "",
					email: res.data.email || "",
				});
			} catch (error) {
				console.log("Failed to fetch user info:", error);
			}
		};
		fetchUser();
	}, []);

	const showMessage = (text, type = "info", duration = 3000) => {
		setMessage(text);
		setMessageType(type);
		setTimeout(() => setMessage(""), duration);
	};

	const handleAdopt = async () => {
		if (!user) {
			showMessage("You must be logged in to adopt!", "error");
			return;
		}

		if (adoptionCost === 0) {
			setLoading(true);
			try {
				await authApiClient.post("/adoptions/", { pet_id: petId });
				showMessage("Pet adopted successfully!", "success");
				setIsAdopted(true);
				if (onAdoptSuccess) onAdoptSuccess();
			} catch (error) {
				console.log(error);
				showMessage("Adoption failed. Please log in again.", "error");
			} finally {
				setLoading(false);
			}
		} else if (adoptionCost > 0 && userBalance >= adoptionCost) {
			setShowForm(true);
		} else {
			showMessage("Insufficient balance to adopt this pet! ❌", "error");
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const adoptionRes = await authApiClient.post("/adoptions/", {
				pet_id: petId,
				...userInfo,
			});

			const paymentRes = await authApiClient.post("/payment/initiate/", {
				amount: adoptionCost,
				adoptionId: adoptionRes.data.id,
				...userInfo,
			});

			if (paymentRes.data.payment_url) {
				window.location.href = paymentRes.data.payment_url;
			} else {
				showMessage("Payment initialization failed ❌", "error");
			}
		} catch (error) {
			console.log(error);
			showMessage("Something went wrong during payment.", "error");
		} finally {
			setLoading(false);
			setShowForm(false);
		}
	};

	return (
		<div>
			<button
				onClick={handleAdopt}
				disabled={isAdopted || loading}
				className={`btn w-full mt-4 rounded-full transition-all ${
					isAdopted
						? "bg-gray-400 cursor-not-allowed text-white"
						: "btn btn-outline border-pink-300 text-pink-600 hover:bg-pink-100 rounded-xl transition-all"
				}`}
			>
				{loading
					? "Processing..."
					: isAdopted
						? "Already Adopted ❌"
						: "Adopt Now"}
			</button>

			{showForm && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
					<div className="bg-white p-6 rounded-2xl shadow-lg w-96">
						<h2 className="text-lg font-semibold mb-3 text-center">
							Enter Your Information
						</h2>
						<form onSubmit={handleFormSubmit} className="space-y-3">
							<input
								type="text"
								placeholder="Full Name"
								className="input input-bordered w-full"
								value={userInfo.name}
								onChange={(e) =>
									setUserInfo({
										...userInfo,
										name: e.target.value,
									})
								}
								required
							/>
							<input
								type="email"
								placeholder="Email"
								className="input input-bordered w-full"
								value={userInfo.email}
								onChange={(e) =>
									setUserInfo({
										...userInfo,
										email: e.target.value,
									})
								}
								required
							/>
							<input
								type="text"
								placeholder="Phone Number"
								className="input input-bordered w-full"
								value={userInfo.phone_number}
								onChange={(e) =>
									setUserInfo({
										...userInfo,
										phone_number: e.target.value,
									})
								}
								required
							/>
							<textarea
								placeholder="Address"
								className="textarea textarea-bordered w-full"
								value={userInfo.address}
								onChange={(e) =>
									setUserInfo({
										...userInfo,
										address: e.target.value,
									})
								}
								required
							/>
							<div className="flex justify-between mt-4">
								<button
									type="button"
									onClick={() => setShowForm(false)}
									className="btn btn-outline btn-error"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="btn btn-primary"
									disabled={loading}
								>
									{loading
										? "Processing..."
										: "Proceed to Payment"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{message && (
				<div
					className={`alert mt-4 ${
						messageType === "success"
							? "alert-success"
							: messageType === "error"
								? "alert-error"
								: "alert-info"
					}`}
				>
					<span>{message}</span>
				</div>
			)}
		</div>
	);
};

export default AdoptButton;
