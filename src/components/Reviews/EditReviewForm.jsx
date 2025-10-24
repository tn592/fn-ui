const EditReviewForm = ({
	editReview,
	setEditReview,
	onCancelEdit,
	onSave,
}) => {
	return (
		<div className="mt-4 space-y-4 bg-pink-50 border border-pink-100 p-4 rounded-xl">
			<div>
				<label className="label-text font-semibold mb-1 block text-pink-700">
					Comment
				</label>
				<textarea
					value={editReview.comment}
					onChange={(e) =>
						setEditReview({
							...editReview,
							comment: e.target.value,
						})
					}
					className="textarea textarea-bordered w-full min-h-[100px] bg-white focus:textarea-primary"
				/>
			</div>
			<div className="flex gap-3">
				<button
					onClick={() => onSave({ ...editReview, ratings: 5 })} 
					className="btn btn-sm btn-success rounded-full"
				>
					Save
				</button>
				<button
					onClick={onCancelEdit}
					className="btn btn-sm btn-ghost text-pink-500 rounded-full"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default EditReviewForm;
