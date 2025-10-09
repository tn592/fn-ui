const PetButtons = ({ isEditing, setIsEditing }) => {
	return (
		<div className="flex justify-center pt-6">
			{isEditing ? (
				<div className="flex gap-4">
					<button type="submit" className="btn btn-primary px-8">
						Save Changes
					</button>
					<button
						type="button"
						className="btn btn-outline"
						onClick={() => setIsEditing(false)}
					>
						Cancel
					</button>
				</div>
			) : (
				<button
					type="button"
					className="btn btn-primary px-8"
					onClick={() => setIsEditing(true)}
				>
					Update Details
				</button>
			)}
		</div>
	);
};

export default PetButtons;
