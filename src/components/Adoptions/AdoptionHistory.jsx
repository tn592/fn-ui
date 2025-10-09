import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";
import { FaCalendarAlt, FaDollarSign, FaPaw } from "react-icons/fa";
import defaultImage from "../../assets/default_image.jpg";

const AdoptionHistory = () => {
	const [adoptionHistory, setAdoptionHistory] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		authApiClient
			.get("/adoptions/")
			.then((res) => {
				setAdoptionHistory(res.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	if (loading)
		return (
			<div className="flex justify-center items-center h-64">
				<span className="loading loading-spinner text-primary"></span>
			</div>
		);

	if (!adoptionHistory.length)
		return (
			<div className="text-center text-gray-500 py-10">
				No adoption records found
			</div>
		);

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{adoptionHistory.map((item) => (
				<div
					key={item.id}
					className="card bg-white border border-pink-100 shadow-md hover:shadow-xl transition-all"
				>
					<figure className="px-6 pt-6">
						<img
							src={item.pet?.images?.[0]?.image || defaultImage}
							alt={item.pet?.name}
							className="rounded-xl h-48 w-full object-cover"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title text-gray-800">
							<FaPaw className="text-pink-400" />
							{item.pet?.name}
						</h2>
						<p className="text-sm text-gray-500">
							Category ID: {item.pet?.category}
						</p>
						<div className="flex justify-between items-center mt-3 text-sm text-gray-700">
							<p className="flex items-center gap-1">
								<FaCalendarAlt className="text-pink-400" />{" "}
								{new Date(item.adopted_at).toLocaleDateString()}
							</p>
							<p className="flex items-center gap-1">
								<FaDollarSign className="text-pink-400" />{" "}
								{item.price}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AdoptionHistory;
