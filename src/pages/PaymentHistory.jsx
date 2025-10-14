import { useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const PaymentHistory = () => {
	const [payments, setPayments] = useState([]);
	const [loading, setLoading] = useState(true); 

	useEffect(() => {
		const fetchPayments = async () => {
			try {
				const res = await authApiClient.get("/payment/history/");
				setPayments(res.data);
			} catch (err) {
				console.error("Error fetching payment history:", err);
			} finally {
				setLoading(false); 
			}
		};
		fetchPayments();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				<span className="loading loading-spinner loading-lg text-pink-500"></span>
			</div>
		);
	}

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Payment History</h2>
			<table className="w-full border border-gray-300">
				<thead className="bg-gray-100">
					<tr>
						<th className="border p-2">Pet</th>
						<th className="border p-2">Amount</th>
						<th className="border p-2">Transaction ID</th>
						<th className="border p-2">Status</th>
						<th className="border p-2">Date</th>
					</tr>
				</thead>
				<tbody>
					{payments.map((pay) => (
						<tr key={pay.id}>
							<td className="border p-2">{pay.pet_name}</td>
							<td className="border p-2">{pay.amount}$</td>
							<td className="border p-2">{pay.transaction_id}</td>
							<td className="border p-2">{pay.status}</td>
							<td className="border p-2">
								{new Date(pay.created_at).toLocaleString()}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PaymentHistory;
