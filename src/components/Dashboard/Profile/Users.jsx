import { useState, useEffect } from "react";
import authApiClient from "../../../services/auth-api-client";

const Users = () => {
	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch user profile
	const fetchUserList = async () => {
		try {
			setLoading(true);
			const response = await authApiClient.get("/auth/users/");
			setUserList(response.data);
			setLoading(false);
		} catch (err) {
			console.error("Error fetching user list:", err);
			setError("Failed to fetch users.");
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUserList();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				<p className="text-gray-500 text-lg">Loading users...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-64">
				<p className="text-red-500 text-lg">{error}</p>
			</div>
		);
	}

	return (
		<div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-6">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">User List</h2>
			<ul className="divide-y divide-gray-200">
				{userList.map((user) => (
					<li
						key={user.id}
						className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 rounded-lg transition"
					>
						<span className="text-gray-700 font-medium">
							{user.email}
						</span>
						<span className="text-gray-400 text-sm">
							ID: {user.id}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
