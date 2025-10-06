import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
	const { user, logoutUser } = useAuthContext();

	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>

					{user && (
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<li>
								<a>Dashboard</a>
							</li>
							<li>
								<a>User</a>
								<ul className="p-2">
									<li>
										<a>Profile</a>
									</li>
									<li>
										<a>Adoptions</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Pets</a>
							</li>
						</ul>
					)}
				</div>

				<a className="btn btn-ghost text-xl">FurNest</a>
			</div>

			{user && (
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Dashboard</a>
						</li>
						<li>
							<details>
								<summary>User</summary>
								<ul className="p-2">
									<li>
										<a>Profile</a>
									</li>
									<li>
										<a>Adoptions</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Pets</a>
						</li>
					</ul>
				</div>
			)}

			<div className="navbar-end">
				{user ? (
					<button onClick={logoutUser} className="btn btn-secondary">
						Logout
					</button>
				) : (
					<div className="flex gap-3">
						<Link to="/login" className="btn btn-secondary">
							Login
						</Link>
						<Link to="/register" className="btn btn-secondary">
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
