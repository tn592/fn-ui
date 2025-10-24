import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

import bird from "../../assets/bird.jpg";
import cat from "../../assets/cat.jpg";
import dog from "../../assets/dog.jpg";
import fish from "../../assets/fish.jpg";
import hamster from "../../assets/hamsters.jpg";
import rabbit from "../../assets/rabbit.jpg";

const CategoryList = ({ index, category }) => {
	const navigate = useNavigate();

	// Gradient palette
	const gradients = [
		"from-rose-100 via-pink-50 to-blue-100",
		"from-blue-100 via-blue-50 to-purple-100",
		"from-indigo-100 via-purple-50 to-pink-100",
		"from-green-100 via-teal-50 to-blue-100",
		"from-yellow-100 via-orange-50 to-rose-100",
		"from-amber-100 via-yellow-50 to-lime-100",
	];

	// Image map
	const imageMap = {
		Birds: bird,
		Cats: cat,
		Dogs: dog,
		Fish: fish,
		Hamsters: hamster,
		Rabbits: rabbit,
	};

	const categoryImage = imageMap[category.name] || bird;

	return (
		<div
			className={`rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${
				gradients[index % gradients.length]
			} overflow-hidden flex flex-col md:flex-row items-center border border-white/50 backdrop-blur-sm`}
		>
			{/* Image Section */}
			<div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden relative">
				<img
					src={categoryImage}
					alt={category.name}
					className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
			</div>

			{/* Content Section */}
			<div className="p-8 md:w-1/2 flex flex-col justify-center text-center md:text-left">
				{/* Name */}
				<h3 className="text-3xl font-bold text-primary tracking-wide mb-3">
					{category.name}
				</h3>

				{/* Pet count */}
				<span className="inline-block text-sm bg-white/80 text-gray-700 px-4 py-1 rounded-full mb-4 font-medium shadow-sm">
					{category.pet_count} Lovely Pets Available
				</span>

				{/* Description */}
				<p className="text-gray-700 leading-relaxed mb-6">
					{category.description?.length > 120
						? category.description
						: `${category.description} Explore a wide range of adorable ${category.name.toLowerCase()} looking for loving homes. Learn about their traits, care tips, and adoption details to find your perfect companion.`}
				</p>

				{/* Explore Button */}
				<button
					onClick={() => navigate(`/category/${category.id}`)}
					className="btn btn-secondary rounded-full px-8 py-2 text-base flex items-center justify-center gap-2 mx-auto md:mx-0 shadow-md hover:shadow-lg hover:scale-105 transition-transform"
				>
					Explore <FaAngleRight className="text-lg" />
				</button>
			</div>
		</div>
	);
};

export default CategoryList;
