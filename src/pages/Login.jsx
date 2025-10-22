import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useState } from "react";
import AuthNavbar from "../layouts/AuthNavbar";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { errorMsg, loginUser } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data);
      if (response.success) navigate("/");
    } catch (error) {
      console.log("Login Failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthNavbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/5 via-base-200 to-white px-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-transform hover:scale-[1.01] duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-primary text-white text-center py-6 px-6">
            <h2 className="text-2xl font-bold tracking-tight">Welcome Back</h2>
            <p className="text-sm opacity-90 mt-1">
              Log in to access your cozy FurNest space.
            </p>
          </div>

          {/* Body */}
          <div className="p-8">
            {errorMsg && <ErrorAlert error={errorMsg} />}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className={`mt-2 input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
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
                  })}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-error">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-secondary w-full rounded-full mt-3 font-semibold text-white hover:scale-105 transition-transform"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Extra Links */}
            <div className="flex items-center justify-between mt-6 text-sm">
              <Link
                to="/reset-password"
                className="text-secondary hover:underline"
              >
                Forgot password?
              </Link>
              <Link
                to="/register"
                className="text-secondary font-medium hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <footer className="py-8 bg-base-200 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} FurNest. All Rights Reserved.</p>
        <p>Made with ❤️ by Admin.</p>
      </footer>
    </>
  );
};

export default Login;
