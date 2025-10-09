import { useState } from "react";
import authApiClient from "../../../services/auth-api-client";

const DepositMoney = () => {
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleDeposit = async (e) => {
		e.preventDefault();
		setMessage("");
		setError("");

		try {
			const res = await authApiClient.post("/balance/deposit/", {
				values: amount.toString(),
			});

			const depositedAmount = res.data?.values || amount;
			setMessage(`Successfully deposited $${depositedAmount}`);
			setAmount("");
		} catch (err) {
			console.error("Deposit Error:", err.response?.data || err.message);
			setError("Deposit failed! Please check the amount and try again.");
		}
	};

	return (
		<div className="max-w-md mx-auto bg-white/70 backdrop-blur-md border border-pink-100 rounded-3xl p-8 shadow-md mt-10">
			<h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
				Deposit Balance
			</h2>

			<form onSubmit={handleDeposit} className="space-y-5">
				<div>
					<label className="block text-base font-medium text-gray-700 mb-1">
						Enter Amount ($)
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						min="1"
						step="0.01"
						required
						className="input input-bordered w-full rounded-full"
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary w-full rounded-full bg-pink-500 hover:bg-pink-600 border-none text-white font-semibold"
				>
					Deposit
				</button>
			</form>

			{message && (
				<p className="mt-4 text-green-600 text-center font-medium">
					{message}
				</p>
			)}
			{error && (
				<p className="mt-4 text-red-500 text-center font-medium">
					{error}
				</p>
			)}
		</div>
	);
};

export default DepositMoney;
