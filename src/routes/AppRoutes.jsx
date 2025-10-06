import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import ResendActivation from "../components/Registration/ResendActivation";
import ResetPassword from "../components/Dashboard/Profile/ResetPassword";
import ResetPasswordConfirm from "../components/Dashboard/Profile/ResetPasswordConfirm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="resend-activation" element={<ResendActivation />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
