import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit }) => {
	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm();

	const ratingValue = watch("ratings", 0);

	return (
		<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label className="label font-medium text-pink-700">
					Rating <span className="text-error">*</span>
				</label>
				<StarRating
					onChange={(value) => setValue("ratings", value)}
					rating={ratingValue}
				/>
				{errors.ratings && (
					<p className="text-error text-sm mt-1">
						Please provide a rating!
					</p>
				)}
				<input
					type="hidden"
					{...register("ratings", { required: true })}
				/>
			</div>

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
