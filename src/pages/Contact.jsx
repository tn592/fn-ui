import heroImg from "../assets/hero_section_img.jpg";

const Contact = () => {
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
						Contact <span className="text-yellow-300">FurNest</span>
					</h1>
					<p className="mt-6 text-lg text-white/90 max-w-2xl">
						We’d love to hear from you! Whether you have questions,
						suggestions, or want to connect, our team is here to
						help.
					</p>
				</div>
			</section>

			{/* CONTACT INFO */}
			<section className="py-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
				<div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
					<svg
						className="w-12 h-12 text-primary mb-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					<h3 className="text-xl font-bold mb-2">Email Us</h3>
					<p className="text-gray-600">support@furnest.com</p>
				</div>
				<div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
					<svg
						className="w-12 h-12 text-primary mb-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 5a2 2 0 012-2h3.5a1 1 0 01.894.553l1.764 3.527a1 1 0 01-.083 1.063l-2.25 3a1 1 0 00.083 1.063l3.5 5.5a1 1 0 001.414 0l2.25-2.25a1 1 0 011.414 0l2.25 2.25a1 1 0 001.414 0l2.25-2.25a1 1 0 011.414 0l2.25 2.25a1 1 0 001.414 0l2.25-2.25a1 1 0 000-1.414l-2.25-2.25"
						/>
					</svg>
					<h3 className="text-xl font-bold mb-2">Call Us</h3>
					<p className="text-gray-600">+1 (555) 123-4567</p>
				</div>
				<div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
					<svg
						className="w-12 h-12 text-primary mb-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 20h5v-5M2 12l10 10 10-10M2 12V7a2 2 0 012-2h16a2 2 0 012 2v5"
						/>
					</svg>
					<h3 className="text-xl font-bold mb-2">Visit Us</h3>
					<p className="text-gray-600">
						123 Pet Street, Happy Town, USA
					</p>
				</div>
			</section>

			{/* CONTACT FORM */}
			<section className="py-20 max-w-3xl mx-auto px-6 bg-base-200 rounded-3xl shadow-lg">
				<h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
					Send Us a Message
				</h2>
				<form className="grid grid-cols-1 gap-6">
					<input
						type="text"
						placeholder="Your Name"
						className="input input-bordered w-full rounded-xl"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="input input-bordered w-full rounded-xl"
					/>
					<textarea
						placeholder="Your Message"
						className="textarea textarea-bordered w-full rounded-xl"
						rows={6}
					/>
					<button
						type="submit"
						className="btn btn-lg w-full rounded-xl 
							bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300
							text-gray-800 font-semibold shadow-md transition-all duration-300
							hover:scale-[1.02] hover:shadow-lg hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400
							active:scale-[0.98] border-none"
					>
						Send Message
					</button>
				</form>
			</section>

			{/* CALL TO ACTION */}
			<section className="py-16 bg-gradient-to-r from-primary/90 to-secondary/80 text-white text-center mt-16">
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

export default Contact;
