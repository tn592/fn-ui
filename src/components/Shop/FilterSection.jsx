const FilterSection = ({
	categories,
	selectedCategory,
	handleCategoryChange,
	searchQuery,
	handleSearchQuery,
}) => {
	return (
		<div className="mb-10 flex flex-wrap justify-center gap-6">
			{/* Category Filter */}
			<div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-pink-100 w-72 hover:shadow-lg transition">
				<label className="block text-sm font-medium text-pink-700 mb-2">
					Filter by Category
				</label>
				<select
					className="w-full p-2 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300"
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

			{/* Search */}
			<div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-blue-100 w-72 hover:shadow-lg transition">
				<label className="block text-sm font-medium text-blue-700 mb-2">
					Search Pets
				</label>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => handleSearchQuery(e.target.value)}
					placeholder="Type pet name..."
					className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300"
				/>
			</div>
		</div>
	);
};

export default FilterSection;
