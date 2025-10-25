import heroImg from "../assets/hero_section_img.jpg";

const AboutUs = () => {
	const team = [
		{ name: "Alice Johnson", role: "Founder & CEO" },
		{ name: "Michael Lee", role: "Head of Operations" },
		{ name: "Sofia Kim", role: "Community Manager" },
	];

	return (
		<div className="bg-base-100 text-gray-800">
			{/* HERO SECTION */}
			<section
				className="relative text-white overflow-hidden"
				style={{
					backgroundImage: `linear-gradient(to top right, rgba(139, 92, 246, 0.85), rgba(236, 72, 153, 0.75)), url(${heroImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center py-32 px-6 text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
						About <span className="text-yellow-300">FurNest</span>
					</h1>
					<p className="mt-6 text-lg text-white/90 max-w-2xl">
						We believe every pet deserves a loving home. Join us in
						our mission to bring happiness to pets and families
						alike.
					</p>
				</div>
			</section>

			{/* OUR MISSION */}
			<section className="py-20 max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-extrabold mb-6 text-gray-800">
					Our Mission
				</h2>
				<p className="text-gray-700 text-lg max-w-3xl mx-auto">
					At FurNest, we strive to connect pets with caring families.
					Through love, dedication, and compassion, we ensure every
					animal finds a forever home. Our platform makes pet adoption
					easy, safe, and joyful.
				</p>
			</section>

			{/* TEAM SECTION */}
			<section className="py-20 bg-base-200 text-center max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-extrabold mb-12 text-gray-800">
					Meet Our Team
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{team.map((member, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-500"
						>
							<div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4 border-4 border-primary shadow-md overflow-hidden">
								<svg
									className="w-20 h-20 text-gray-300"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.6h19.2v-1.6c0-3.2-6.4-4.8-9.6-4.8z" />
								</svg>
							</div>
							<h3 className="font-bold text-xl text-gray-800 mb-1">
								{member.name}
							</h3>
							<p className="text-gray-600 text-sm italic">
								{member.role}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* CALL TO ACTION */}
			<section className="py-16 bg-gradient-to-r from-primary/90 to-secondary/80 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">
					Ready to Make a Difference?
				</h2>
				<p className="mb-6 text-white/90">
					Join us today and help us create happy homes for pets
					everywhere.
				</p>
				<a href="/shop" className="btn btn-accent btn-lg text-white">
					Browse Pets
				</a>
			</section>
		</div>
	);
};

export default AboutUs;
