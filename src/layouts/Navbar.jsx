import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import { FaPaw } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
	const { user, logoutUser } = useAuthContext();

	return (
		<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-base-200 shadow-sm">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
				<Link
					to="/"
					className="flex items-center gap-2 group transition-transform"
				>
					<div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
						<FaPaw className="text-secondary text-2xl group-hover:scale-110 transition-transform" />
					</div>
					<span className="font-extrabold text-2xl tracking-tight text-gray-800 group-hover:text-secondary transition-colors">
						FurNest
					</span>
				</Link>

				{user && (
					<ul className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">
						<li>
							<Link
								to="/dashboard"
								className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
							>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								to="/shop"
								className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
							>
								Pets
							</Link>
						</li>
						<li>
							<Link
								to="about-us"
								className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								className="relative hover:text-secondary transition-colors after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-secondary after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
							>
								Contact
							</Link>
						</li>
					</ul>
				)}

				<div className="flex items-center gap-3">
					{user ? (
						<>
							{/* Mobile Dropdown */}
							<div className="dropdown dropdown-end lg:hidden">
								<label
									tabIndex={0}
									className="btn btn-ghost btn-circle avatar"
								>
									<div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
										<img
											src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
											alt="User Avatar"
										/>
									</div>
								</label>

								<ul
									tabIndex={0}
									className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 shadow-md border border-base-200"
								>
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/shop">Pets</Link>
									</li>
									<li>
										<button
											onClick={logoutUser}
											className="text-red-500 flex items-center gap-2"
										>
											<FiLogOut /> Logout
										</button>
									</li>
								</ul>
							</div>

							{/* Desktop Logout */}
							<button
								onClick={logoutUser}
								className="hidden lg:inline-flex items-center gap-2 btn btn-secondary rounded-full px-6 hover:scale-105 transition-transform"
							>
								<FiLogOut />
								Logout
							</button>
						</>
					) : (
						<div className="flex gap-2">
							<Link
								to="/login"
								className="btn btn-outline btn-secondary rounded-full px-6 hover:scale-105 transition-transform"
							>
								Login
							</Link>
							<Link
								to="/register"
								className="btn btn-secondary rounded-full px-6 hover:scale-105 transition-transform"
							>
								Register
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
