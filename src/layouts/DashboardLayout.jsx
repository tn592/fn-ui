import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../components/Dashboard/Navbar";

const DashboardLayout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	return (
		<div className="drawer lg:drawer-open min-h-screen bg-base-100 text-base-content">
			{/* Mobile toggle */}
			<input
				id="drawer-toggle"
				type="checkbox"
				className="drawer-toggle"
				checked={sidebarOpen}
				onChange={toggleSidebar}
			/>

			{/* Main content */}
			<div className="drawer-content flex flex-col">
				<Navbar sidebarOpen={sidebarOpen} />

				<main className="flex-1 p-6 lg:p-8 bg-base-100">
					<div className="max-w-6xl mx-auto">
						<Outlet />
					</div>
				</main>
			</div>

			{/* Sidebar */}
			<Sidebar />
		</div>
	);
};

export default DashboardLayout;
