import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import EditPetDetailsForm from "../components/PetDetails/EditPetDetailsForm";
import PetButtons from "../components/PetDetails/PetButtons";
import apiClient from "../services/api-client";
import { useParams } from "react-router";
import authApiClient from "../services/auth-api-client";

const EditPetDetails = () => {
	const [categories, setCategories] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const { petId } = useParams();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		apiClient.get(`/pets/${petId}/`).then((res) => {
			const pet = res.data;
			Object.keys(pet).forEach((key) => setValue(key, pet[key]));
		});
	}, [petId, setValue]);

	// Fetch Categories
	useEffect(() => {
		apiClient.get("/categories/").then((res) => setCategories(res.data));
	}, []);

	const onSubmit = async (data) => {
		try {
			const petPayLoad = { ...data };
			// Update Pet Details
			const updatePetDetails = async (data) => {
				setErrorMsg("");
				try {
					authApiClient.put(`/pets/${petId}/`, { ...data });
				} catch (error) {
					console.log(error);
				}
			};
			await updatePetDetails(petPayLoad);
			alert("Pet Details Updated");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
			<div className="card-body">
				<h2 className="card-title text-2xl mb-4">Update Pet Details</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<EditPetDetailsForm
						register={register}
						errors={errors}
						isEditing={isEditing}
						categories={categories}
					/>
					<PetButtons
						isEditing={isEditing}
						setIsEditing={setIsEditing}
					/>
				</form>
			</div>
		</div>
	);
};

export default EditPetDetails;
