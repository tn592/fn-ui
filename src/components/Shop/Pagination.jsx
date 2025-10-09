const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
	return (
		<div className="flex justify-center mt-10">
			<div className="join">
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i}
						onClick={() => handlePageChange(i + 1)}
						className={`join-item btn ${
							currentPage === i + 1
								? "bg-pink-500 text-white"
								: "bg-pink-100 text-gray-600 hover:bg-pink-200"
						} rounded-full transition`}
					>
						{i + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default Pagination;
