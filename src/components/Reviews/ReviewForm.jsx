import { useForm } from "react-hook-form";

const ReviewForm = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const handleFormSubmit = (data) => {
		onSubmit({ ...data, ratings: 5 }); 
		reset();
	};

	return (
		<form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
			<div className="form-control">
				<label className="label font-medium text-pink-700">
					Your Review <span className="text-error">*</span>
				</label>
				<textarea
					{...register("comment", { required: true })}
					className="textarea textarea-bordered min-h-[120px] focus:textarea-primary bg-white rounded-xl"
					placeholder="Share your thoughts about this pet..."
				/>
				{errors.comment && (
					<p className="text-error text-sm mt-1">
						Comment is required
					</p>
				)}
			</div>

			<button
				type="submit"
				className="btn btn-primary btn-block md:btn-wide rounded-full"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<>
						<span className="loading loading-spinner loading-xs mr-2"></span>
						Submitting...
					</>
				) : (
					"Submit Review"
				)}
			</button>
		</form>
	);
};

export default ReviewForm;
