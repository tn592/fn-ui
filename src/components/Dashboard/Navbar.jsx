import { Link, useNavigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ menuOpen, toggleMenu }) => {
	const { user, logoutUser } = useAuthContext();
	const navigate = useNavigate();

	const handleLogout = () => {
		logoutUser();
		navigate("/");
	};

	return (
		<nav className="bg-white shadow-md border-b border-gray-200 px-4 lg:px-12 py-3 flex items-center justify-between z-50 relative">
			{/* Brand */}
			<Link
				to="/"
				className="text-2xl font-bold text-primary tracking-tight"
			>
				FurNest
			</Link>

			{/* Desktop Menu */}
			<div className="hidden lg:flex items-center gap-8">
				{user && (
					<>
						<Link
							to="/"
							className="text-gray-700 hover:text-primary font-medium transition-colors"
						>
							Home
						</Link>
						<Link
							to="/shop"
							className="text-gray-700 hover:text-primary font-medium transition-colors"
						>
							Pets
						</Link>
					</>
				)}
			</div>

			{/* Auth Buttons */}
			<div className="hidden lg:flex items-center gap-4">
				{user ? (
					<button
						onClick={handleLogout}
						className="px-4 py-1 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
					>
						Logout
					</button>
				) : (
					<>
						<Link
							to="/login"
							className="px-4 py-1 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="px-4 py-1 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
						>
							Register
						</Link>
					</>
				)}
			</div>

			{/* Mobile Menu Toggle */}
			<div className="lg:hidden">
				<button
					onClick={toggleMenu}
					className="btn btn-ghost btn-square"
					aria-label="Toggle Menu"
				>
					{menuOpen ? (
						<FiX className="h-6 w-6 text-gray-700" />
					) : (
						<FiMenu className="h-6 w-6 text-gray-700" />
					)}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
