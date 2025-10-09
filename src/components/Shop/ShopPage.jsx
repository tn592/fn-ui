import Pagination from "./Pagination";
import { useState } from "react";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";
import PetList from "./PetList";
import useFetchPet from "../../hooks/useFetchPets";

const ShopPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const { pets, loading, totalPages } = useFetchPet(
		currentPage,
		selectedCategory,
		searchQuery,
	);

	const categories = useFetchCategories();

	return (
		<div className="max-w-7xl mx-auto px-6 py-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-inner">
			<h1 className="text-4xl font-bold text-center mb-10 text-pink-600 tracking-wide drop-shadow-sm">
				Find Your Desirable Pet
			</h1>

			<FilterSection
				categories={categories}
				selectedCategory={selectedCategory}
				handleCategoryChange={setSelectedCategory}
				searchQuery={searchQuery}
				handleSearchQuery={setSearchQuery}
			/>

			<PetList pets={pets} loading={loading} />

			<Pagination
				totalPages={totalPages}
				currentPage={currentPage}
				handlePageChange={setCurrentPage}
			/>
		</div>
	);
};

export default ShopPage;
