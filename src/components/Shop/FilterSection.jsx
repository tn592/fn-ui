const FilterSection = ({
	categories,
	selectedCategory,
	handleCategoryChange,
	searchQuery,
	handleSearchQuery,
}) => {
	return (
		<div className="mb-10 flex flex-col md:flex-row md:items-start justify-between gap-4">

			<div className="bg-white/70 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-pink-200 w-full md:w-64 hover:shadow-md transition duration-300">
				<label className="block text-sm font-medium text-pink-600 mb-1">
					Category
				</label>
				<select
					className="w-full p-1 border border-pink-200 rounded-lg focus:ring-1 focus:ring-pink-300 text-sm"
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

			<div className="bg-white/70 backdrop-blur-md px-4 py-3 rounded-2xl shadow-sm border border-blue-200 w-full md:w-80 hover:shadow-md transition duration-300 md:self-start">
				<label className="block text-sm font-medium text-blue-600 mb-1">
					Search
				</label>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => handleSearchQuery(e.target.value)}
					placeholder="Type pet name..."
					className="w-full p-1 border border-blue-200 rounded-lg focus:ring-1 focus:ring-blue-300 text-sm"
				/>
			</div>
		</div>
	);
};

export default FilterSection;
