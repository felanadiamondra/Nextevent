// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import Landing from "../pages/LandingPage";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../routes/ProtectedRoute";

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;