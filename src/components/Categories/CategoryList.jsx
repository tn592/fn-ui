import bird from "../../assets/bird.jpg";
import cat from "../../assets/cat.jpg";
import dog from "../../assets/dog.jpg";
import fish from "../../assets/fish.jpg";
import hamster from "../../assets/hamsters.jpg";
import rabbit from "../../assets/rabbit.jpg";

const CategoryList = ({ index, category }) => {
	const gradients = [
		"from-pink-100 via-pink-50 to-blue-100",
		"from-blue-100 via-blue-50 to-purple-100",
		"from-purple-100 via-purple-50 to-pink-100",
		"from-teal-100 via-teal-50 to-blue-100",
		"from-yellow-100 via-yellow-50 to-orange-100",
		"from-rose-100 via-pink-50 to-indigo-100",
	];

	const imageMap = {
		Birds: bird,
		Cats: cat,
		Dogs: dog,
		Fish: fish,
		Hamsters: hamster,
		Rabbits: rabbit,
	};

	const categoryImage = imageMap[category.name];

	return (
		<div
			className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br ${
				gradients[index % gradients.length]
			} overflow-hidden flex flex-col md:flex-row items-center`}
		>
			{/* Image section */}
			<div className="md:w-1/2 w-full h-64 md:h-80 overflow-hidden">
				<img
					src={categoryImage}
					alt={category.name}
					className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
				/>
			</div>

			{/* Content */}
			<div className="p-8 md:w-1/2 text-center md:text-left">
				<span className="inline-block text-sm bg-white/70 text-gray-700 px-3 py-1 rounded-full mb-3">
					{category.pet_count} Pets
				</span>
				<h3 className="text-3xl font-bold mb-2 text-primary">
					{category.name}
				</h3>
				<p className="text-gray-600 mb-6">{category.description}</p>
			</div>
		</div>
	);
};

export default CategoryList;
