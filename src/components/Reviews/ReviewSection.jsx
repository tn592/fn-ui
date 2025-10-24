import { useParams } from "react-router";
import ReviewForm from "./ReviewForm";
import authApiClient from "../../services/auth-api-client";
import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";

const ReviewSection = () => {
	const { petId } = useParams();
	const [reviews, setReviews] = useState([]);
	const [userCanReview, setUserCanReview] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [editReview, setEditReview] = useState({comment: "" });
	const [editingId, setEditingId] = useState(null);
	const { user } = useAuthContext();

	const fetchReviews = async () => {
		setLoading(true);
		try {
			const res = await apiClient.get(`/pets/${petId}/reviews/`);
			setReviews(res.data);
		} catch (error) {
			console.log("Error fetching reviews", error);
		} finally {
			setLoading(false);
		}
	};

	const onSubmit = async (data) => {
		try {
			await authApiClient.post(`/pets/${petId}/reviews/`, data);
			fetchReviews();
		} catch (error) {
			console.log("Error submitting review", error);
		}
	};

	const checkUserPermission = async () => {
		try {
			const res = await authApiClient.get(`/has-adopted/${petId}/`);
			setUserCanReview(res.data.hasAdopted);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateReview = async (reviewId) => {
		try {
			await authApiClient.put(
				`/pets/${petId}/reviews/${reviewId}/`,
				editReview,
			);
			setEditingId(null);
			fetchReviews();
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteReview = async (reviewId) => {
		try {
			await authApiClient.delete(`/pets/${petId}/reviews/${reviewId}/`);
			fetchReviews();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkUserPermission();
		fetchReviews();
	}, []);

	return (
		<div className="space-y-10 mt-12 max-w-4xl mx-auto px-4">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold text-pink-600 flex items-center gap-2">
					Customer Reviews
				</h2>
				<div className="badge badge-lg badge-outline text-pink-500 border-pink-300 bg-pink-50">
					{reviews.length}{" "}
					{reviews.length === 1 ? "Review" : "Reviews"}
				</div>
			</div>

			{userCanReview && (
				<div className="card bg-gradient-to-r from-pink-50 to-yellow-50 border border-pink-100 shadow-md rounded-2xl">
					<div className="card-body">
						<h3 className="card-title text-lg text-pink-700">
							Write a Review 💬
						</h3>
						<ReviewForm onSubmit={onSubmit} />
					</div>
				</div>
			)}

			<div className="divider text-pink-300">✨</div>

			{isLoading ? (
				<div className="flex justify-center py-8">
					<span className="loading loading-spinner loading-lg text-pink-500"></span>
				</div>
			) : reviews.length === 0 ? (
				<div className="text-center py-8 text-gray-500">
					<div className="text-5xl mb-3">📝</div>
					<h3 className="text-xl font-semibold mb-2">
						No Reviews Yet
					</h3>
					<p>
						Be the first to share your thoughts about this adorable
						pet!
					</p>
				</div>
			) : (
				<ReviewList
					reviews={reviews}
					user={user}
					editReview={editReview}
					setEditReview={setEditReview}
					editingId={editingId}
					setEditingId={setEditingId}
					handleUpdateReview={handleUpdateReview}
					handleDeleteReview={handleDeleteReview}
				/>
			)}
		</div>
	);
};

export default ReviewSection;
