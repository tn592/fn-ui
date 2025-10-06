import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import useAuthContext from "../../../hooks/useAuthContext";
import ErrorAlert from "../../ErrorAlert";

const ResetPasswordConfirm = () => {
  const { uid, token } = useParams();
  const { resetPasswordConfirm, errorMsg } = useAuthContext();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await resetPasswordConfirm(uid, token, data.new_password);
    if (res.success) {
      setMessage(res.message);
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Set New Password
        </h2>

        {errorMsg && <ErrorAlert error={errorMsg} />}
        {message && (
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
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">New Password</label>
            <div className="relative">
              <input
                type="password"
                className="input input-bordered bg-base-200 w-full pr-10"
                {...register("new_password", {
                  required: "New Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
            </div>
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Confirm Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
