import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorAlert from "../ErrorAlert";
import { useForm } from "react-hook-form";

const ResendActivation = () => {
  const { resendActivation, errorMsg } = useAuthContext();
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      const response = await resendActivation(email);
      console.log(response);
      if (response.success) {
        setSuccessMsg(response.message);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Resend Activation Email
        </h2>

        {errorMsg && <ErrorAlert error={errorMsg} />}
        {successMsg && (
          <div role="alert" className="alert alert-success">
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Resend Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResendActivation;
