import {
	FiPlusCircle,
	FiShoppingCart,
	FiStar,
	FiTag,
	FiUsers,
} from "react-icons/fi";
import {
	MdAttachMoney,
	MdOutlineManageAccounts,
	MdPayment,
} from "react-icons/md";
import { Link } from "react-router";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import useAuthContext from "../hooks/useAuthContext";
import { useState } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

export default function Dashboard() {
	const { user } = useAuthContext();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const customerMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{ to: "deposit-money", icon: MdAttachMoney, label: "Deposit Money" },
		{
			to: "adoption-history",
			icon: FiShoppingCart,
			label: "Adoption History",
		},
		{ to: "payment/history/", icon: MdPayment, label: "Payment History" },
	];

	const adminMenus = [
		{ to: "profile", icon: MdOutlineManageAccounts, label: "Account" },
		{ to: "deposit-money", icon: MdAttachMoney, label: "Deposit Money" },
		{ to: "pets/add", icon: FiPlusCircle, label: "Add Pet" },
		{ to: "user-list", icon: FiUsers, label: "Users" },
	];

	const menuItems = user?.is_staff ? adminMenus : customerMenus;

	const chartData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Adoptions",
				data: [5, 10, 8, 12, 7, 15],
				borderColor: "#4f46e5",
				backgroundColor: "rgba(79, 70, 229, 0.1)",
				tension: 0.4,
				fill: true,
				pointRadius: 3,
				pointHoverRadius: 6,
				pointBackgroundColor: "#4f46e5",
			},
		],
	};

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { display: false },
			tooltip: {
				mode: "index",
				intersect: false,
				backgroundColor: "#4f46e5",
				titleColor: "#fff",
				bodyColor: "#fff",
				cornerRadius: 6,
			},
		},
		scales: {
			x: {
				grid: { display: false },
				ticks: { color: "#6b7280" },
			},
			y: {
				grid: { drawBorder: false, color: "#e5e7eb" },
				ticks: { color: "#6b7280", stepSize: 5 },
			},
		},
	};

	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
			{/* Sidebar */}
			<aside
				className={`bg-white shadow-lg p-6 flex flex-col lg:w-64 transition-transform duration-300 ${
					sidebarOpen
						? "translate-x-0"
						: "-translate-x-full lg:translate-x-0"
				} fixed lg:relative top-0 left-0 h-full z-40 w-64`}
			>
				<div className="flex justify-between items-center mb-8 lg:hidden">
					<h2 className="text-2xl font-bold text-gray-800">
						Dashboard
					</h2>
					<button
						className="text-gray-700"
						onClick={() => setSidebarOpen(false)}
					>
						Close
					</button>
				</div>
				<h2 className="text-2xl font-bold text-gray-800 mb-8 hidden lg:block">
					Dashboard
				</h2>
				<nav className="flex-1 space-y-4">
					{menuItems.map((item, i) => (
						<Link
							key={i}
							to={item.to}
							className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition"
							onClick={() => setSidebarOpen(false)}
						>
							<item.icon className="text-xl text-purple-600" />
							<span className="text-gray-700 font-medium">
								{item.label}
							</span>
						</Link>
					))}
				</nav>
			</aside>

			{/* Mobile Sidebar Toggle */}
			<div className="lg:hidden p-4">
				<button
					onClick={() => setSidebarOpen(true)}
					className="px-3 py-1 bg-purple-600 text-white rounded-lg"
				>
					Menu
				</button>
			</div>

			{/* Main Content */}
			<main className="flex-1 p-4 lg:p-8 overflow-y-auto lg:ml-64">
				{/* Header */}
				<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-2">
					<h1 className="text-3xl font-bold text-gray-800">
						Welcome, {user?.first_name}!
					</h1>
					<p className="text-gray-500">
						Quick overview of your activities
					</p>
				</header>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					<div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
						<FiUsers className="text-3xl text-blue-600 mb-2" />
						<span className="text-gray-500 text-sm">
							Total Users
						</span>
						<span className="text-xl font-bold text-gray-800">
							41
						</span>
					</div>
					<div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
						<FiShoppingCart className="text-3xl text-green-600 mb-2" />
						<span className="text-gray-500 text-sm">Adoptions</span>
						<span className="text-xl font-bold text-gray-800">
							27
						</span>
					</div>
					<div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
						<FiStar className="text-3xl text-yellow-600 mb-2" />
						<span className="text-gray-500 text-sm">Reviews</span>
						<span className="text-xl font-bold text-gray-800">
							13
						</span>
					</div>
					<div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
						<FiTag className="text-3xl text-purple-600 mb-2" />
						<span className="text-gray-500 text-sm">
							Categories
						</span>
						<span className="text-xl font-bold text-gray-800">
							6
						</span>
					</div>
				</div>

				{/* Line Chart */}
				<div className="bg-white p-6 rounded-2xl shadow h-64">
					<h3 className="text-lg font-semibold text-gray-700 mb-4">
						Adoptions Over Time
					</h3>
					<Line data={chartData} options={chartOptions} />
				</div>
			</main>
		</div>
	);
}
