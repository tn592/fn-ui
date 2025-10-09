import {
	FiPlusCircle,
	FiShoppingCart,
	FiStar,
	FiTag,
	FiUsers,
} from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";
import { MdOutlineManageAccounts } from "react-icons/md";

const Sidebar = () => {
	const { user } = useAuthContext();

	const customerMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "/dashboard/pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{
			to: "/dashboard/adoption-history",
			icon: FiShoppingCart,
			label: "AdoptionHistory",
		},
		{ to: "/reviews", icon: FiStar, label: "Reviews" },
	];

	const adminMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "/dashboard/pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{ to: "/categories", icon: FiTag, label: "Categories" },
		{ to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
		{ to: "/reviews", icon: FiStar, label: "Reviews" },
		{ to: "/users", icon: FiUsers, label: "Users" },
	];

	const menuItems = user?.is_staff ? adminMenus : customerMenus;

	return (
		<div className="drawer-side">
			<label
				htmlFor="drawer-toggle"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>
			<aside className="bg-base-200 border-r border-base-300 w-64 min-h-screen flex flex-col">
				{/* Header */}
				<div className="flex items-center gap-2 px-4 py-5 border-b border-base-300">
					<h1 className="text-lg font-semibold tracking-tight">
						Dashboard
					</h1>
				</div>

				{/* Menu */}
				<ul className="menu p-4 text-sm font-medium flex-1">
					{menuItems.map((item, i) => (
						<li key={i}>
							<Link
								to={item.to}
								className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-300 transition-all"
							>
								<item.icon className="h-4 w-4 opacity-80" />
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>

				{/* Footer */}
				<div className="px-4 py-3 border-t border-base-300 text-xs text-base-content/60">
					© 2025 FurNest Admin
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;
