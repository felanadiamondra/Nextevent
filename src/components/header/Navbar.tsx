// components/Navbar.tsx
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

interface NavbarProps {
  type: "landing" | "home";
}

export default function Navbar({ type }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="w-full fixed top-0 z-50 shadow bg-white py-4 px-6 flex justify-between items-center">
      <Logo />
      <div className="space-x-4 hidden md:flex">
        {type === "landing" ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-sm px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-sm px-4 py-2 rounded bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button
              className="text-sm px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
              onClick={() => navigate("/notifications")}
            >
              🔔 Notifications
            </button>
          </>
        )}
      </div>
    </header>
  );
}
