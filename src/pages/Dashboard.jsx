import {
	FiPlusCircle,
	FiShoppingCart,
	FiStar,
	FiTag,
	FiUsers,
} from "react-icons/fi";
import { MdAttachMoney, MdOutlineManageAccounts, MdPayment } from "react-icons/md";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

export default function Dashboard() {
	const { user } = useAuthContext();

	const customerMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{ to: "deposit-money", icon: MdAttachMoney, label: "Deposit Money" },
		{
			to: "adoption-history",
			icon: FiShoppingCart,
			label: "Adoption History",
		},
		{ to: "payment/history/", icon: MdPayment, label: "Payment History"}
	];

	const adminMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "deposit-money", icon: MdAttachMoney, label: "Deposit Money" },
		{ to: "pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{ to: "user-list", icon: FiUsers, label: "Users" },
	];

	const menuItems = user?.is_staff ? adminMenus : customerMenus;

	return (
		<div className="min-h-screen bg-gray-50 p-6">
			{/* Dashboard Container */}
			<div className="bg-white/80 backdrop-blur-lg border border-pink-100 rounded-3xl shadow-md p-6">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="text-3xl font-bold text-gray-800">
						Welcome, {user?.first_name}!
					</h1>
					<p className="text-gray-600 mt-1">
						Here's a quick overview of your dashboard.
					</p>
				</div>

				{/* Menu Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{menuItems.map((item, i) => (
						<Link
							key={i}
							to={item.to}
							className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center"
						>
							<item.icon className="text-3xl text-primary mb-3" />
							<span className="font-medium text-gray-800">
								{item.label}
							</span>
						</Link>
					))}
				</div>

				{/* Stats Section */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<div className="bg-white p-5 rounded-xl shadow flex flex-col items-center">
						<FiUsers className="text-3xl text-blue-500 mb-2" />
						<span className="text-gray-500 text-sm">
							Total Users
						</span>
						<span className="text-xl font-bold text-gray-800">
							41
						</span>
					</div>
					<div className="bg-white p-5 rounded-xl shadow flex flex-col items-center">
						<FiShoppingCart className="text-3xl text-green-500 mb-2" />
						<span className="text-gray-500 text-sm">Adoptions</span>
						<span className="text-xl font-bold text-gray-800">
							27
						</span>
					</div>
					<div className="bg-white p-5 rounded-xl shadow flex flex-col items-center">
						<FiStar className="text-3xl text-yellow-500 mb-2" />
						<span className="text-gray-500 text-sm">Reviews</span>
						<span className="text-xl font-bold text-gray-800">
							13
						</span>
					</div>
					<div className="bg-white p-5 rounded-xl shadow flex flex-col items-center">
						<FiTag className="text-3xl text-purple-500 mb-2" />
						<span className="text-gray-500 text-sm">
							Categories
						</span>
						<span className="text-xl font-bold text-gray-800">
							6
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
