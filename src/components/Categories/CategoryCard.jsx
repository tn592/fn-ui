import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiClient from "../../services/api-client";
import defaultImage from "../../assets/default_image.jpg";

const CategoryCard = () => {
	const { id } = useParams();
	const [pets, setPets] = useState([]);
	const [loading, setLoading] = useState(true);
	const [categoryName, setCategoryName] = useState("");

	useEffect(() => {
		const fetchCategoryPets = async () => {
			try {
				const response = await apiClient.get(`/pets/?category=${id}`);
				setPets(response.data.results || response.data);

				const categoryRes = await apiClient.get(`/categories/${id}`);
				setCategoryName(categoryRes.data.name);
			} catch (error) {
				console.error("Error fetching pets by category:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCategoryPets();
	}, [id]);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<div className="w-16 h-16 border-4 border-dashed rounded-full border-primary animate-spin"></div>
			</div>
		);
	}

	return (
		<section className="py-12 bg-base-100">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-3xl font-extrabold text-primary mb-8 text-center">
					{categoryName} Pets
				</h2>

				{pets.length === 0 ? (
					<p className="text-center text-gray-500 text-lg">
						No pets available in this category.
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{pets.map((pet) => (
							<div
								key={pet.id}
								className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
							>
								<img
									src={pet.images?.[0]?.image || defaultImage}
									alt={pet.name || "Pet"}
									className="rounded-2xl object-cover h-52 w-full"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
								<div className="absolute bottom-4 left-4 text-white">
									<h3 className="text-lg font-semibold">
										{pet.name}
									</h3>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CategoryCard;
