import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const AddPet = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [categories, setCategories] = useState([]);
	const [petId, setPetId] = useState(null);
	const [previewImages, setPreviewImages] = useState([]);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	// Fetch Categories
	useEffect(() => {
		apiClient.get("/categories/").then((res) => {
			setCategories(res.data);
		});
	}, []);

	// Submit Pet Details
	const handlePetAdd = async (data) => {
		try {
			const petRes = await authApiClient.post("/pets/", data);
			setPetId(petRes.data.id);
		} catch (error) {
			console.log("Error adding pet", error);
		}
	};

	// Handle Image Change
	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);
		setPreviewImages(files.map((file) => URL.createObjectURL(file)));
	};

	// Handle Image Upload
	const handleUpload = async () => {
		if (!images.length) return alert("Please select images.");
		setLoading(true);
		try {
			for (const image of images) {
				const formData = new FormData();
				formData.append("image", image);
				await authApiClient.post(`/pets/${petId}/images/`, formData);
			}
			alert("Images uploaded successfully!");
			navigate("/dashboard");
		} catch (error) {
			console.log("Error uploading image", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-16 px-6 flex justify-center">
			<div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl p-10 transition-all duration-300 hover:shadow-2xl">
				<h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
					{!petId ? "Add a New Pet" : "📸 Upload Pet Images"}
				</h2>

				{!petId ? (
					<form
						onSubmit={handleSubmit(handlePetAdd)}
						className="space-y-6"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Pet Name */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Pet Name
								</label>
								<input
									{...register("name", { required: true })}
									className="input input-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
									placeholder="Enter pet name"
								/>
								{errors.name && (
									<p className="text-red-500 text-xs mt-1">
										This field is required
									</p>
								)}
							</div>

							{/* Breed */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Breed
								</label>
								<input
									{...register("breed", { required: true })}
									className="input input-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
									placeholder="e.g. Golden Retriever"
								/>
								{errors.breed && (
									<p className="text-red-500 text-xs mt-1">
										This field is required
									</p>
								)}
							</div>

							{/* Age */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Age (in years)
								</label>
								<input
									type="number"
									{...register("age", {
										required: true,
										min: 0,
									})}
									className="input input-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
									placeholder="Age"
								/>
								{errors.age && (
									<p className="text-red-500 text-xs mt-1">
										Please enter a valid age
									</p>
								)}
							</div>

							{/* Price */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Price ($)
								</label>
								<input
									type="number"
									step="0.01"
									{...register("price", { required: true })}
									className="input input-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
									placeholder="e.g. 300.00"
								/>
								{errors.price && (
									<p className="text-red-500 text-xs mt-1">
										This field is required
									</p>
								)}
							</div>
						</div>

						{/* Description */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Description
							</label>
							<textarea
								{...register("description", { required: true })}
								className="textarea textarea-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
								rows="4"
								placeholder="Describe your pet..."
							></textarea>
							{errors.description && (
								<p className="text-red-500 text-xs mt-1">
									This field is required
								</p>
							)}
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Availability */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Availability
								</label>
								<select
									{...register("availability", {
										required: true,
									})}
									className="select select-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
								>
									<option value="">
										Select availability
									</option>
									<option value="true">Available</option>
									<option value="false">Not Available</option>
								</select>
								{errors.availability && (
									<p className="text-red-500 text-xs mt-1">
										This field is required
									</p>
								)}
							</div>

							{/* Category */}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-1">
									Category
								</label>
								<select
									{...register("category", {
										required: true,
									})}
									className="select select-bordered w-full focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
								>
									<option value="">Select a category</option>
									{categories.map((cat) => (
										<option key={cat.id} value={cat.id}>
											{cat.name}
										</option>
									))}
								</select>
								{errors.category && (
									<p className="text-red-500 text-xs mt-1">
										This field is required
									</p>
								)}
							</div>
						</div>

						<button
							type="submit"
							className="btn bg-pink-500 hover:bg-pink-600 text-white w-full mt-6 text-lg font-semibold tracking-wide shadow-md"
						>
							Add Pet
						</button>
					</form>
				) : (
					<div className="text-center">
						<h3 className="text-lg font-semibold text-gray-700 mb-3">
							Upload Pet Images
						</h3>
						<input
							type="file"
							multiple
							accept="image/*"
							className="file-input file-input-bordered w-full"
							onChange={handleImageChange}
						/>
						{previewImages.length > 0 && (
							<div className="flex flex-wrap justify-center gap-3 mt-4">
								{previewImages.map((src, idx) => (
									<img
										key={idx}
										src={src}
										alt="Preview"
										className="w-24 h-24 rounded-xl object-cover border border-pink-200 shadow-sm hover:scale-105 transition-all"
									/>
								))}
							</div>
						)}

						<button
							onClick={handleUpload}
							className={`btn w-full mt-6 text-lg font-semibold ${
								loading
									? "bg-gray-400 cursor-not-allowed"
									: "bg-pink-500 hover:bg-pink-600 text-white shadow-md"
							}`}
							disabled={loading}
						>
							{loading ? "Uploading..." : "Upload Images"}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default AddPet;
