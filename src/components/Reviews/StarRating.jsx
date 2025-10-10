import { FaStar } from "react-icons/fa";

const StarRating = ({ onChange, rating }) => {
	return (
		<div className="flex space-x-1 mb-2">
			{[...Array(5)].map((_, i) => {
				const value = i + 1;
				return (
					<FaStar
						key={value}
						size={26}
						onClick={() => onChange(value)}
						className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
							value <= rating
								? "text-yellow-400"
								: "text-gray-300"
						}`}
					/>
				);
			})}
		</div>
	);
};

export default StarRating;
