import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditReviewForm from "./EditReviewForm";

const ReviewCard = ({
  review,
  user,
  editReview,
  setEditReview,
  onEditClick,
  isEditing,
  onCancelEdit,
  onSaveEdit,
  onDeleteClick,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 mb-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
        <div>
          <p className="font-semibold text-gray-800">{review.user.name}</p>
        </div>

        {user && user.id === review.user.id && (
          <div className="flex gap-2">
            <button
              onClick={onEditClick}
              className="btn btn-xs btn-outline btn-primary gap-1"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={onDeleteClick}
              className="btn btn-xs btn-outline btn-error gap-1"
            >
              <FaTrashAlt /> Delete
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <EditReviewForm
          editReview={editReview}
          setEditReview={setEditReview}
          onCancelEdit={onCancelEdit}
          onSave={() => onSaveEdit(review.id)}
        />
      ) : (
        <div className="mt-4 bg-pink-50 border border-pink-100 rounded-xl p-3">
          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
