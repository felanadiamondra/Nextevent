import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";

interface NavbarProps {
  type: "landing" | "home";
}

export default function Navbar({ type }: NavbarProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white border-b border-muted/30 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4 items-center">
          {type === "landing" ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 text-sm font-medium text-muted border border-muted rounded-full
                hover:text-primary hover:border-primary transition"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-5 py-2 text-sm font-medium text-white bg-accent rounded-full shadow-sm
                hover:bg-accent/80 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              {/* Notification */}
              <button className="text-muted hover:text-primary transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="relative group">
                <button
                  className="px-4 py-2 text-sm rounded-full border border-muted text-muted
                  hover:text-primary hover:border-primary transition"
                >
                  Mon Compte
                </button>
                <div
                  className="absolute right-0 mt-2 w-52 bg-white text-gray-800 border border-muted/20 rounded-xl shadow-xl
                  opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform origin-top-right transition-all duration-200 z-50"
                >
                  <div className="px-4 py-3 text-sm font-semibold border-b border-muted/20">
                    {user?.displayName || "My profile"}
                  </div>
                  <div className="px-4 py-2 text-sm hover:bg-light cursor-pointer transition">
                    Account Settings
                  </div>
                  <div className="px-4 py-2 text-sm hover:bg-light cursor-pointer transition">
                    My Collection
                  </div>
                  <hr className="border-muted/20 my-1" />
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-b-xl transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-muted hover:text-primary transition"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
