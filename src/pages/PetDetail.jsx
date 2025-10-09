import { Link, useParams } from "react-router";
import PetImageGallery from "../components/PetDetails/PetImageGallery";
import {
	FaArrowLeft,
	FaPaw,
	FaBirthdayCake,
	FaTag,
	FaDog,
	FaEdit,
} from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";
import useFetchCategories from "../hooks/useFetchCategories";
import AdoptButton from "../components/Adoptions/AdoptButton";

const PetDetail = () => {
	const [pet, setPet] = useState(null);
	const [loading, setLoading] = useState(false);
	const { petId } = useParams();
	const { user } = useAuthContext(); // get user info

	useEffect(() => {
		setLoading(true);
		apiClient.get(`/pets/${petId}/`).then((res) => {
			setPet(res.data);
			setLoading(false);
		});
	}, [petId]);

	const categories = useFetchCategories();
	const categoryName =
		categories?.find((cat) => cat.id === pet.category)?.name ||
		"No Category";

	if (loading)
		return (
			<div className="flex justify-center items-center h-screen">
				<span className="loading loading-spinner loading-lg text-pink-400"></span>
			</div>
		);

	if (!pet)
		return (
			<div className="text-center py-20 text-base-content/70">
				Pet Not Found...
			</div>
		);

	return (
		<div className="max-w-6xl mx-auto px-6 py-10">
			<div className="mb-8 flex justify-between items-center">
				<Link
					to="/shop"
					className="flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
				>
					<FaArrowLeft /> Back to Shop
				</Link>

				{user && (
					<Link
						to={`/dashboard/shop/${petId}/edit-pet-details`}
						className="btn btn-sm gap-2 bg-yellow-400 hover:bg-yellow-500 text-white border-none rounded-xl shadow-md transition-all"
					>
						<FaEdit /> Edit Details
					</Link>
				)}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white/70 backdrop-blur-lg border border-pink-100 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all">
				<Suspense
					fallback={
						<div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
					}
				>
					<PetImageGallery images={pet?.images} petName={pet.name} />
				</Suspense>

				<div className="flex flex-col justify-between">
					<div>
						<div className="mb-5">
							<div className="badge badge-outline badge-lg bg-pink-100 text-pink-600 mb-3">
								{categoryName}
							</div>
							<h1 className="text-4xl font-extrabold tracking-tight text-base-content">
								{pet.name}
							</h1>
							<p className="text-base-content/70 mt-1 text-sm italic">
								Breed: {pet.breed || "N/A"}
							</p>
						</div>

						<div className="mt-3 mb-6">
							<span className="text-4xl font-bold text-pink-600">
								${pet.price}
							</span>
						</div>

						<p className="text-base-content/80 leading-relaxed mb-6">
							{pet.description ||
								"This adorable companion is looking for a loving home! Loyal, playful, and sure to bring joy to your life."}
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
							<div className="flex items-center gap-3">
								<FaDog className="text-pink-500" />
								<span>
									<strong>Breed:</strong>{" "}
									{pet.breed || "Unknown"}
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaBirthdayCake className="text-pink-500" />
								<span>
									<strong>Age:</strong>{" "}
									{pet.age ? `${pet.age} years` : "N/A"}
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaTag className="text-pink-500" />
								<span>
									<strong>Category:</strong>{" "}
									{pet.category || "N/A"}
								</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPaw className="text-pink-500" />
								<span>
									<strong>Availability:</strong>{" "}
									{pet.availability
										? "Available 🩷"
										: "Not Available ❌"}
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap gap-4">
						{pet.availability ? (
							<AdoptButton
								petId={pet.id}
								onAdoptSuccess={() =>
									setPet({ ...pet, availability: false })
								}
							/>
						) : (
							<button
								className="btn btn-outline border-pink-300 text-pink-500 bg-pink-50 hover:bg-pink-100 cursor-default w-full mt-4 rounded-full transition-all"
								disabled
							>
								Adopted
							</button>
						)}
					</div>
				</div>
			</div>

			<div className="mt-10 bg-white/60 border border-pink-100 rounded-3xl p-8 shadow-sm">
				<h2 className="text-2xl font-semibold mb-4 text-base-content">
					About {pet.name}
				</h2>
				<p className="text-base-content/80 leading-relaxed">
					{pet.description ||
						`${pet.name} is a wonderful companion who’ll brighten your days and make your home full of happiness.`}
				</p>
			</div>
		</div>
	);
};

export default PetDetail;
