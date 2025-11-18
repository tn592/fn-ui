import { Link } from "react-router";
import defaultImage from "../../assets/default_image.jpg";

const PetCard = ({ pet }) => {
	return (
		<Link to={`/shop/${pet.id}`}>
			<div className="bg-white border border-pink-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-80">
				{/* Image Section */}
				<div className="relative">
					<img
						src={pet.images?.[0]?.image || defaultImage}
						alt={pet.name || "Pet"}
						className="w-full h-40 object-cover"
					/>
				</div>

				{/* Info Section */}
				<div className="px-auto py-3 text-center">
					<h2 className="text-base font-bold text-gray-800 mb-1">
						{pet.name}
					</h2>
					<h3 className="text-xs font-medium text-pink-500 italic mb-2">
						{pet.breed || "Unknown Breed"}
					</h3>

					<p className="text-gray-600 text-xs leading-snug mb-3 font-[450]">
						{pet.description?.slice(0, 55) ||
							"Adorable pet waiting for a new home."}
					</p>

					{/* Price Section */}
					<div className="flex items-center justify-center gap-1 mb-3">
						<span className="text-pink-600 font-bold text-lg">
							${pet.price}
						</span>
						<span className="text-gray-400 text-xs font-medium">
							USD
						</span>
					</div>

					{/* Adopt Button */}
					<button className="bg-pink-400 hover:bg-pink-500 text-white text-sm font-medium rounded-full px-4 py-1.5 flex items-center justify-center gap-1.5 mx-auto transition">
						Adopt Now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="size-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</Link>
	);
};

export default PetCard;
