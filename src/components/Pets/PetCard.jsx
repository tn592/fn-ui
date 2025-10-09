import { Link } from "react-router";
import defaultImage from "../../assets/default_image.jpg";

const PetCard = ({ pet }) => {
	return (
		<Link to={`/shop/${pet.id}`}>
			<div className="bg-white/95 backdrop-blur-md border border-pink-100 rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 w-80 mx-auto">
				<figure className="px-5 pt-5">
					<img
						src={pet.images?.[0]?.image || defaultImage}
						alt={pet.name || "Pet"}
						className="rounded-2xl object-cover h-52 w-full"
					/>
				</figure>

				<div className="px-6 pb-6 text-center">
					<h2 className="text-[1.4rem] font-bold text-gray-800 mt-4 tracking-wide drop-shadow-sm">
						{pet.name}
					</h2>

					<h3 className="text-[0.95rem] text-pink-500 font-medium italic mb-2 mt-1">
						Breed:{" "}
						<span className="font-semibold text-pink-600">
							{pet.breed}
						</span>
					</h3>

					<p className="text-gray-600 text-sm leading-relaxed mb-5 font-[450]">
						{pet.description?.slice(0, 70) ||
							"Lovely companion waiting for you!"}
					</p>

					<button className="btn bg-pink-400 hover:bg-pink-500 text-white rounded-full px-5 py-1.5 transition">
						Adopt Now
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2.5"
							stroke="currentColor"
							className="size-[1.2em]"
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
