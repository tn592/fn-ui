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
		<div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 shadow-inner">
			<div className="px-8 py-3">
				{/* Heading */}
				<div className="text-center md:text-left mb-8">
					<h1 className="text-3xl sm:text-4xl font-bold mb-3 text-pink-600 tracking-wide drop-shadow-lg">
						Find Your Perfect Companion
					</h1>
					<p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto md:mx-0">
						Discover adorable pets waiting for their forever homes.
						Browse our collection of loving animals ready to join
						your family.
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<div className="md:w-1/5">
						<FilterSection
							categories={categories}
							selectedCategory={selectedCategory}
							handleCategoryChange={setSelectedCategory}
							searchQuery={searchQuery}
							handleSearchQuery={setSearchQuery}
							layout="side"
						/>
					</div>

					<div className="md:w-4/5 flex flex-col">
						{/* Search Bar */}
						<div className="mb-6">
							<FilterSection
								categories={[]}
								selectedCategory={selectedCategory}
								handleCategoryChange={setSelectedCategory}
								searchQuery={searchQuery}
								handleSearchQuery={setSearchQuery}
								layout="searchOnly"
							/>
						</div>

						{/* Pet List */}
						<PetList pets={pets} loading={loading} />

						{/* Pagination */}
						<div className="flex justify-center mt-10">
							<Pagination
								totalPages={totalPages}
								currentPage={currentPage}
								handlePageChange={setCurrentPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopPage;
