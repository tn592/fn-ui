const EditPetDetailsForm = ({ register, errors, isEditing, categories }) => {
	return (
		<div className="grid gap-5">
			{/* Name */}
			<div>
				<label className="label-text font-semibold">Pet Name</label>
				<input
					type="text"
					className="input input-bordered w-full"
					disabled={!isEditing}
					{...register("name", { required: "Pet name is required" })}
				/>
				{errors.name && (
					<p className="text-error text-sm mt-1">
						{errors.name.message}
					</p>
				)}
			</div>

			{/* Breed */}
			<div>
				<label className="label-text font-semibold">Breed</label>
				<input
					type="text"
					className="input input-bordered w-full"
					disabled={!isEditing}
					{...register("breed", { required: "Breed is required" })}
				/>
				{errors.breed && (
					<p className="text-error text-sm mt-1">
						{errors.breed.message}
					</p>
				)}
			</div>

			{/* Age */}
			<div>
				<label className="label-text font-semibold">Age</label>
				<input
					type="number"
					className="input input-bordered w-full"
					disabled={!isEditing}
					{...register("age", {
						required: "Age is required",
						min: { value: 0, message: "Age cannot be negative" },
					})}
				/>
				{errors.age && (
					<p className="text-error text-sm mt-1">
						{errors.age.message}
					</p>
				)}
			</div>

			{/* Price */}
			<div>
				<label className="label-text font-semibold">Price ($)</label>
				<input
					type="number"
					step="0.01"
					className="input input-bordered w-full"
					disabled={!isEditing}
					{...register("price", { required: "Price is required" })}
				/>
				{errors.price && (
					<p className="text-error text-sm mt-1">
						{errors.price.message}
					</p>
				)}
			</div>

			{/* Description */}
			<div>
				<label className="label-text font-semibold">Description</label>
				<textarea
					rows="4"
					className="textarea textarea-bordered w-full"
					disabled={!isEditing}
					{...register("description", {
						required: "Description is required",
					})}
				/>
				{errors.description && (
					<p className="text-error text-sm mt-1">
						{errors.description.message}
					</p>
				)}
			</div>

			{/* Availability */}
			<div>
				<label className="label-text font-semibold">Availability</label>
				<select
					className="select select-bordered w-full"
					disabled={!isEditing}
					{...register("availability", {
						required: "Availability is required",
					})}
				>
					<option value="true">Available</option>
					<option value="false">Not Available</option>
				</select>
				{errors.availability && (
					<p className="text-error text-sm mt-1">
						{errors.availability.message}
					</p>
				)}
			</div>

			{/* Category */}
			<div>
				<label className="label-text font-semibold">Category</label>
				<select
					className="select select-bordered w-full"
					disabled={!isEditing}
					{...register("category", {
						required: "Category is required",
					})}
				>
					<option value="">Select a category</option>
					{categories.map((cat) => (
						<option key={cat.id} value={cat.id}>
							{cat.name}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-error text-sm mt-1">
						{errors.category.message}
					</p>
				)}
			</div>
		</div>
	);
};

export default EditPetDetailsForm;
