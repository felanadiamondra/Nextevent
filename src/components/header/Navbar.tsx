// components/Navbar.tsx
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
  const {user} = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = async() => {
    await signOut(auth);
    navigate("/login");
  }

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
             {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4 relative">
            {/* Notification */}
            <button className="text-gray-700 hover:text-orange-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5" />
              </svg>
            </button>

            {/* Mon Compte Dropdown */}
              <div className="relative group">
                <button className="text-sm border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer">
                  Mon Compte
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {/* Séparateur */}
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    My profile
                  </div>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    Account settings
                  </div>
                  <hr className="border-gray-200" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Likes
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Collection
                  </button>
                  <hr className="border-gray-200" />
                  <button
                    onClick={handleLogOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button type="button" onClick={() => setMobileMenuOpen(true)} className="inline-flex items-center justify-center p-2 text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
