import { useState } from "react";
import Navbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Navbar */}
			<Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

			{/* Main content */}
			<main className="flex-1 p-6 bg-gray-50 relative">
				<Outlet />
			</main>

			{/* Mobile Menu Overlay */}
			{menuOpen && (
				<div className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40">
					<div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg p-4 w-48">
						<a
							href="/"
							className="block py-2 text-gray-700 hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Home
						</a>
						<a
							href="/shop"
							className="block py-2 text-gray-700 hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Pets
						</a>
						<a
							href="/dashboard"
							className="block py-2 text-gray-700 hover:text-primary"
							onClick={() => setMenuOpen(false)}
						>
							Dashboard
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashboardLayout;
