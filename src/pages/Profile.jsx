import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import { useEffect, useState } from "react";
import ProfileButtons from "../components/Dashboard/Profile/ProfileButtons";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const { user, updateUserProfile, changePassword, errorMsg } =
		useAuthContext();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm();

	useEffect(() => {
		Object.keys(user).forEach((key) => setValue(key, user[key]));
	}, [user, setValue]);

	const onSubmit = async (data) => {
		try {
			const profilePayload = {
				first_name: data.first_name,
				last_name: data.last_name,
				address: data.address,
				phone_number: data.phone_number,
				account_balance: data.account_balance,
			};
			await updateUserProfile(profilePayload);

			if (data.current_password && data.new_password) {
				await changePassword({
					current_password: data.current_password,
					new_password: data.new_password,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-rose-200 to-indigo-200 p-6">
			<div className="w-full max-w-2xl bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-rose-200/50 overflow-hidden transition-all hover:shadow-pink-200/60">
				<div className="p-8 space-y-6">
					{/* Header */}
					<div className="text-center">
						<h2 className="text-3xl font-bold text-indigo-700 tracking-wide">
							Profile Information
						</h2>
					</div>

					{/* Error Message */}
					{errorMsg && (
						<div className="animate-fade-in">
							<ErrorAlert error={errorMsg} />
						</div>
					)}

					{/* Form */}
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
					>
						<ProfileForm
							register={register}
							errors={errors}
							isEditing={isEditing}
						/>

						<PasswordChangeForm
							errors={errors}
							register={register}
							isEditing={isEditing}
							watch={watch}
						/>

						<ProfileButtons
							isEditing={isEditing}
							setIsEditing={setIsEditing}
							isSubmitting={isSubmitting}
						/>
					</form>
				</div>

				{/* Subtle Footer Accent */}
				<div className="bg-gradient-to-r from-rose-300 to-indigo-400 h-2 w-full" />
			</div>
		</div>
	);
};

export default Profile;
