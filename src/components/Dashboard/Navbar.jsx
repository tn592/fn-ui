import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ sidebarOpen }) => {
	const { user, logoutUser } = useAuthContext();

	return (
		<div className="navbar bg-white shadow-sm border-b border-base-200 px-4 lg:px-8">
			{/* Mobile sidebar toggle */}
			<div className="flex-none lg:hidden">
				<label
					htmlFor="drawer-toggle"
					className="btn btn-ghost btn-square"
				>
					{sidebarOpen ? (
						<FiX className="h-5 w-5" />
					) : (
						<FiMenu className="h-5 w-5" />
					)}
				</label>
			</div>

			{/* Brand */}
			<div className="flex-1">
				<div
					to="/"
					className="font-semibold text-lg tracking-wide text-base-content"
				>
					FurNest
				</div>
			</div>

			{/* Desktop menu */}
			{user && (
				<div className="hidden lg:flex items-center gap-6">
					<Link to="/" className="link link-hover font-medium">
						Home
					</Link>
					<Link to="/shop" className="link link-hover font-medium">
						Pets
					</Link>
					<details className="dropdown">
						<summary className="cursor-pointer font-medium">
							User
						</summary>
						<ul className="menu dropdown-content bg-white shadow-md rounded-box w-40 p-2 mt-2">
							<li>
								<a>Profile</a>
							</li>
							<li>
								<a>Adoptions</a>
							</li>
						</ul>
					</details>
				</div>
			)}

			{/* Auth buttons */}
			<div className="navbar-end">
				{user ? (
					<button
						onClick={logoutUser}
						className="btn btn-sm btn-primary"
					>
						Logout
					</button>
				) : (
					<div className="flex gap-2">
						<Link to="/login" className="btn btn-sm btn-primary">
							Login
						</Link>
						<Link to="/register" className="btn btn-sm btn-outline">
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
