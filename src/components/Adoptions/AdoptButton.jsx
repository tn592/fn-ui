import { useState } from "react";
import authApiClient from "../../services/auth-api-client";

const AdoptButton = ({ petId, onAdoptSuccess }) => {
	const [isAdopted, setIsAdopted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleAdopt = async () => {
		setLoading(true);
		try {
			await authApiClient.post("/adoptions/", { pet_id: petId });
			alert("Pet adopted successfully! 🐾");
			setIsAdopted(true);
			if (onAdoptSuccess) onAdoptSuccess();
		} catch (err) {
			if (err.response?.status === 400) {
				alert("Insufficient balance or already adopted!");
			} else {
				alert("Something went wrong.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
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
	);
};

export default AdoptButton;
