import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import ResendActivation from "../components/Registration/ResendActivation";
import ResetPassword from "../components/Dashboard/Profile/ResetPassword";
import ResetPasswordConfirm from "../components/Dashboard/Profile/ResetPasswordConfirm";
import Shop from "../pages/Shop";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AddPet from "../pages/AddPet";
import PetDetail from "../pages/PetDetail";
import EditPetDetails from "../pages/EditPetDetails";
import Profile from "../pages/Profile";
import AdoptionHistory from "../components/Adoptions/AdoptionHistory";
import DepositMoney from "../components/Dashboard/Profile/DepositMoney";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="resend-activation" element={<ResendActivation />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="shop/:petId" element={<PetDetail />} />
      </Route>
      {/* Private Routes  */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="pets/add" element={<AddPet />} />
        <Route path="deposit-money" element={<DepositMoney />} />
        <Route
          path="shop/:petId/edit-pet-details"
          element={<EditPetDetails />}
        />
        <Route path="adoption-history" element={<AdoptionHistory />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
