import { FiSearch } from "react-icons/fi";

const FilterSection = ({
	categories,
	selectedCategory,
	handleCategoryChange,
	searchQuery,
	handleSearchQuery,
	layout,
}) => {
	if (layout === "side") {
		return (
			<div className="bg-white/70 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-sm border border-pink-200 hover:shadow-md transition duration-300 sticky top-6">
				<label className="block text-sm font-medium text-pink-600 mb-1">
					Category
				</label>
				<select
					className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 text-sm"
					value={selectedCategory}
					onChange={(e) => handleCategoryChange(e.target.value)}
				>
					<option value="">All Categories</option>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>
		);
	}

	if (layout === "searchOnly") {
		return (
			<div className="w-full">
				<label className="relative flex items-center w-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-pink-200 hover:shadow-md transition duration-300">
					<FiSearch className="absolute left-3 text-gray-400 text-lg" />
					<input
						type="search"
						value={searchQuery}
						onChange={(e) => handleSearchQuery(e.target.value)}
						placeholder="Search pets..."
						className="w-full pl-10 pr-3 py-2 rounded-2xl bg-transparent text-sm focus:outline-none"
					/>
				</label>
			</div>
		);
	}

	return null;
};

export default FilterSection;
