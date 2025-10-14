import { useEffect } from "react";
import { Link, useNavigate } from "react-router";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      window.performance.getEntriesByType("navigation")[0]?.type === "reload"
    ) {
      navigate(0);
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your transaction has been completed
          successfully.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
