import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useState } from "react";
import AuthNavbar from "../layouts/AuthNavbar";

const Register = () => {
	const { registerUser, errorMsg } = useAuthContext();
	const [successMsg, setSuccessMsg] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		delete data.confirm_password;
		try {
			const response = await registerUser(data);
			console.log(response);
			if (response.success) {
				setSuccessMsg(response.message);
				// setTimeout(() => navigate("/login"), 3000);
			}
		} catch (error) {
			console.log("Registration failed", error);
		}
	};

	return (
		<>
			<AuthNavbar />

			<div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-secondary/5 via-base-200 to-white">
				<div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-transform hover:scale-[1.01] duration-300">
					{/* Header */}
					<div className="bg-gradient-to-r from-secondary to-primary text-white text-center py-6 px-6">
						<h2 className="text-2xl font-bold tracking-tight">
							Create Your Account 
						</h2>
						<p className="text-sm opacity-90 mt-1">
							Join the FurNest family and start exploring!
						</p>
					</div>

					{/* Body */}
					<div className="p-8">
						{errorMsg && <ErrorAlert error={errorMsg} />}
						{successMsg && (
							<div
								role="alert"
								className="alert alert-success mb-4"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 shrink-0 stroke-current"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{successMsg}</span>
							</div>
						)}

						<h2 className="text-xl font-semibold text-gray-800 mb-2">
							Sign Up
						</h2>
						<p className="text-sm text-gray-500 mb-4">
							Create an account to get started.
						</p>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-5"
						>
							{/* First Name */}
							<div>
								<label
									htmlFor="first_name"
									className="block text-sm font-medium text-gray-700"
								>
									First Name
								</label>
								<input
									id="first_name"
									type="text"
									placeholder="John"
									className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
										errors.first_name ? "input-error" : ""
									}`}
									{...register("first_name", {
										required: "First Name is Required",
									})}
								/>
								{errors.first_name && (
									<p className="mt-1 text-xs text-error">
										{errors.first_name.message}
									</p>
								)}
							</div>

							{/* Last Name */}
							<div>
								<label
									htmlFor="last_name"
									className="block text-sm font-medium text-gray-700"
								>
									Last Name
								</label>
								<input
									id="last_name"
									type="text"
									placeholder="Doe"
									className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
										errors.last_name ? "input-error" : ""
									}`}
									{...register("last_name", {
										required: "Last Name is Required",
									})}
								/>
								{errors.last_name && (
									<p className="mt-1 text-xs text-error">
										{errors.last_name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="name@example.com"
									className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
										errors.email ? "input-error" : ""
									}`}
									{...register("email", {
										required: "Email is Required",
									})}
								/>
								{errors.email && (
									<p className="mt-1 text-xs text-error">
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Address */}
							<div>
								<label
									htmlFor="address"
									className="block text-sm font-medium text-gray-700"
								>
									Address
								</label>
								<input
									id="address"
									type="text"
									placeholder="7/A Dhanmondi, Dhaka"
									className="mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
									{...register("address")}
								/>
							</div>

							{/* Phone */}
							<div>
								<label
									htmlFor="phone_number"
									className="block text-sm font-medium text-gray-700"
								>
									Phone Number
								</label>
								<input
									id="phone_number"
									type="text"
									placeholder="0123456789"
									className="mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50"
									{...register("phone_number")}
								/>
							</div>

							{/* Password */}
							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Password
								</label>
								<input
									id="password"
									type="password"
									placeholder="••••••••"
									className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
										errors.password ? "input-error" : ""
									}`}
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 8,
											message:
												"Password must be at least 8 characters",
										},
									})}
								/>
								{errors.password && (
									<p className="mt-1 text-xs text-error">
										{errors.password.message}
									</p>
								)}
							</div>

							{/* Confirm Password */}
							<div>
								<label
									htmlFor="confirmPassword"
									className="block text-sm font-medium text-gray-700"
								>
									Confirm Password
								</label>
								<input
									id="confirmPassword"
									type="password"
									placeholder="••••••••"
									className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
										errors.confirm_password
											? "input-error"
											: ""
									}`}
									{...register("confirm_password", {
										required:
											"Confirm Password is required",
										validate: (value) =>
											value === watch("password") ||
											"Password do not match",
									})}
								/>
								{errors.confirm_password && (
									<p className="mt-1 text-xs text-error">
										{errors.confirm_password.message}
									</p>
								)}
							</div>

							{/* Submit */}
							<button
								type="submit"
								className="btn btn-secondary w-full rounded-full font-semibold text-white mt-3 hover:scale-105 transition-transform"
							>
								Sign Up
							</button>
						</form>

						{/* Success Message Extra */}
						{successMsg && (
							<div className="mt-5 text-center text-sm">
								<p>
									Didn’t get the activation email?{" "}
									<Link
										to="/resend-activation"
										className="text-secondary hover:underline font-medium"
									>
										Resend Activation Email
									</Link>
								</p>
							</div>
						)}

						{/* Bottom Link */}
						<div className="text-center mt-6 text-sm text-gray-600">
							<p>
								Already have an account?{" "}
								<Link
									to="/login"
									className="text-secondary font-medium hover:underline"
								>
									Sign in
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="py-8 bg-base-200 text-center text-sm text-gray-600 border-t border-gray-100">
				<p>
					© {new Date().getFullYear()} FurNest. All Rights Reserved.
				</p>
				<p className="mt-1">Made with ❤️ by Admin.</p>
			</footer>
		</>
	);
};

export default Register;
