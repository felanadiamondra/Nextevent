import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

import "../App.css";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between py-3 px-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center space-x-2">
              <img
                className="h-6 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
              />
              <span className="text-lg font-bold">EVENT<span className="text-orange-500">PLAN</span></span>
            </a>
          </div>

          {/* Menu Center */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-x-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Product</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Features</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Marketplace</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Company</a>
          </div>

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
        </nav>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-25">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
              {/* Mobile Header */}
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2">
                  <img className="h-6 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
                  <span className="text-lg font-bold">EVENT<span className="text-orange-500">PLAN</span></span>
                </a>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700 p-2">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Notification & Mon Compte */}
              <div className="mt-6 space-y-4">
                <button className="w-full flex items-center gap-2 text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 9v5.159c0 .538-.214 1.055-.595 1.436L6 17h5" />
                  </svg>
                  Notifications
                </button>

                <div className="border rounded-lg p-2 space-y-2 bg-gray-50">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    My profile
                  </div>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    Account settings
                  </div>      
                  <hr className="border-gray-200" />
                  <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">My Likes</button>
                  <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg">My Collection</button>
                  <button onClick={handleLogOut} className="w-full text-left text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg">Logout</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="pt-32 px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Effortlessly <br />
              <span className="text-orange-500">plan your events</span>
            </h1>
            <p className="text-lg text-gray-600">
              Make event planning easy with our comprehensive platform. From start to finish, we streamline the process and offer dedicated support to make your event a success.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:opacity-90">
                Plan an Event
              </button>
              <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100">
                Find an Expert
              </button>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-md col-span-2">
              <img src="./images/event.jpg" alt="Event 1" className="object-cover w-full h-full" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img src="./images/event.jpg" alt="Event 2" className="object-cover w-full h-full" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img src="./images/event.jpg" alt="Event 3" className="object-cover w-full h-full" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md col-span-2">
              <img src="./images/event.jpg" alt="Event 4" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
