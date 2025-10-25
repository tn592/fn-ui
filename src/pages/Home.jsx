import { Link } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Pet from "../components/Pets/Pet";
import Category from "../components/Categories/Category";
import useAuthContext from "../hooks/useAuthContext";
import heroImg from "../assets/hero_section_img.jpg";
import defaultImage from "../assets/default_image.jpg";
const Home = () => {
	const [pets, setPets] = useState([]);
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const res = await apiClient.get("/pets/");
				const petsArray = Array.isArray(res.data)
					? res.data
					: res.data.results || res.data.data || [];
				setPets(petsArray.slice(0, 3));
			} catch (err) {
				console.error("Failed to load pets:", err);
			}
		};
		fetchPets();
	}, []);

	return (
		<div className="bg-base-100 text-gray-800">
			{/*  HERO SECTION  */}
			<section
				className="relative text-white overflow-hidden"
				style={{
					backgroundImage: `
			linear-gradient(to top right, rgba(139, 92, 246, 0.85), rgba(236, 72, 153, 0.75), rgba(252, 211, 77, 0.65)),
			url(${heroImg})
		`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Content */}
				<div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-24 px-6 lg:px-12">
					{/* LEFT CONTENT */}
					<div className="lg:w-1/2 text-center lg:text-left space-y-6">
						<h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
							Bring Home <br />
							<span className="text-yellow-300">
								Your New Best Friend
							</span>
						</h1>
						<p className="text-lg text-white/90 max-w-lg mx-auto lg:mx-0">
							Adopt with love — because every wag, purr, and paw
							deserves a story that lasts forever.
						</p>
					</div>
				</div>

				{/* Subtle Bottom Fade */}
				<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-base-100/90 to-transparent"></div>

				{/* Floating Animation */}
				<style>{`
		@keyframes float {
			0%, 100% { transform: translateY(0); }
			50% { transform: translateY(-10px); }
		}
		.animate-float {
			animation: float 4s ease-in-out infinite;
		}
	`}</style>
			</section>
			{/*Category Section*/}
			<Category />
			{/* FEATURED PETS */}
			<Pet />
			{/* TESTIMONIAL / ADOPTED PET REVIEWS */}
			<section className="pt-12 pb-16 bg-base-100 text-center max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-extrabold mb-12 text-gray-800">
					What Our Adopters Say
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{pets.map((pet) => (
						<div
							key={pet.id}
							className="relative bg-gradient-to-br from-purple-100/80 via-pink-100/70 to-yellow-100/70 
                       rounded-2xl shadow-xl p-8 flex flex-col items-center text-center 
                       transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
						>
							<img
								src={pet.images?.[0]?.image || defaultImage}
								alt={pet.name}
								className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
							/>
							<h3 className="font-bold text-xl text-gray-800 mb-2">
								{pet.name}
							</h3>
							<p className="text-gray-700 italic text-sm mb-3 px-4">
								{pet.review ||
									"This pet has brought so much joy to our home!"}
							</p>
							<span className="mt-2 block font-medium text-purple-600">
								— {pet.adopterName || "A Happy Adopter"}
							</span>
						</div>
					))}
				</div>
			</section>
			;{/* CTA  */}
			<section className="py-16 bg-gradient-to-r from-primary/90 to-secondary/80 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">
					Ready to Make a Difference?
				</h2>
				<p className="mb-6 text-white/90">
					Join thousands of pet lovers creating forever homes.
				</p>
				{user ? (
					<>
						<Link
							to="/shop"
							className="btn btn-accent btn-lg text-white"
						>
							Browse Pets
						</Link>
					</>
				) : (
					<Link
						to="/register"
						className="btn btn-accent btn-lg text-white"
					>
						Get Started
					</Link>
				)}
			</section>
		</div>
	);
};

export default Home;
