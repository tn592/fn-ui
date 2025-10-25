import { useState } from "react";
import { Link } from "react-router";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";

const AuthNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-base-200 shadow-sm">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2 group relative">
					<div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
						<FaPaw className="text-secondary text-xl group-hover:scale-110 transition-transform" />
					</div>
					<span className="font-bold text-xl tracking-tight text-gray-800 group-hover:text-secondary transition-colors">
						FurNest
					</span>
				</Link>

				{/* Desktop Menu */}
				<ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
					<li>
						<Link
							to="/"
							className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/shop"
							className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
						>
							Explore Pets
						</Link>
					</li>
				</ul>

				{/* Mobile Hamburger */}
				<button
					className="md:hidden text-gray-700 focus:outline-none"
					onClick={toggleMenu}
				>
					{isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white/90 backdrop-blur-md border-t border-base-200 shadow-sm">
					<ul className="flex flex-col gap-4 py-4 px-6 text-gray-700 font-medium">
						<li>
							<Link
								to="/"
								className="block w-full text-left hover:text-secondary transition-colors"
								onClick={toggleMenu}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/shop"
								className="block w-full text-left hover:text-secondary transition-colors"
								onClick={toggleMenu}
							>
								Explore Pets
							</Link>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default AuthNavbar;
