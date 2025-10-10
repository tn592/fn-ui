import { Link } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Pet from "../components/Pets/Pet";
import Category from "../components/Categories/Category";
import useAuthContext from "../hooks/useAuthContext";

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
				setPets(petsArray.slice(0, 6));
			} catch (err) {
				console.error("Failed to load pets:", err);
			}
		};
		fetchPets();
	}, []);

	return (
		<div className="bg-base-100 text-gray-800">
			{/*  HERO SECTION  */}
			<section className="relative bg-gradient-to-tr from-secondary/90 via-primary/80 to-accent/70 text-white overflow-hidden">
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

			{/* TESTIMONIAL */}
			<section className="py-16 text-center max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-8">
					What Our Adopters Say
				</h2>
				<div className="bg-base-200 rounded-xl shadow-lg p-8">
					<p className="italic text-lg text-gray-700 mb-4">
						“FurNest helped me find my purr-fect companion. The
						process was smooth, and now my home feels full of love!”
					</p>
					<h4 className="font-semibold text-primary">— Emma</h4>{" "}
				</div>
			</section>

			{/* CTA  */}
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

			{/* FOOTER  */}
			<footer className="py-8 bg-base-200 text-center text-sm text-gray-600">
				<p>
					© {new Date().getFullYear()} FurNest. All Rights Reserved.
				</p>
				<p>Made with ❤️ by Admin.</p>
			</footer>
		</div>
	);
};

export default Home;
