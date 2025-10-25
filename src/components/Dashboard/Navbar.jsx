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

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md lg:hidden">
					<ul className="flex flex-col py-4 px-6 gap-4">
						{user && (
							<>
								<li>
									<Link
										to="/"
										className="text-gray-700 font-medium hover:text-primary transition-colors"
										onClick={toggleMenu}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="/shop"
										className="text-gray-700 font-medium hover:text-primary transition-colors"
										onClick={toggleMenu}
									>
										Pets
									</Link>
								</li>
							</>
						)}
						<li>
							{user ? (
								<button
									onClick={() => {
										handleLogout();
										toggleMenu();
									}}
									className="w-full text-left text-red-500 font-medium hover:text-red-600 transition-colors"
								>
									Logout
								</button>
							) : (
								<>
									<Link
										to="/login"
										className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 transition-colors"
										onClick={toggleMenu}
									>
										Login
									</Link>
									<Link
										to="/register"
										className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 transition-colors"
										onClick={toggleMenu}
									>
										Register
									</Link>
								</>
							)}
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
