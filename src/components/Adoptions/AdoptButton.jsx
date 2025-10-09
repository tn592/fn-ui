import { useState, useEffect } from "react";
import authApiClient from "../../services/auth-api-client";

const AdoptButton = ({ petId, onAdoptSuccess, adoptionCost }) => {
	const [isAdopted, setIsAdopted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [userBalance, setUserBalance] = useState(null);
	const [message, setMessage] = useState("");
	const [messageType, setMessageType] = useState("info"); //

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await authApiClient.get("/auth/users/me/");
				setUserBalance(res.data.account_balance);
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
		if (userBalance < adoptionCost) {
			showMessage("Insufficient balance to adopt this pet! ❌", "error");
			return;
		}

		setLoading(true);
		try {
			await authApiClient.post("/adoptions/", { pet_id: petId });
			showMessage("Pet adopted successfully!", "success");
			setIsAdopted(true);
			if (onAdoptSuccess) onAdoptSuccess();
		} catch (error) {
			console.log(error);
			showMessage("Failed to adopt pet. Please try again.", "error");
		} finally {
			setLoading(false);
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
