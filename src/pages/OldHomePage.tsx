import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

import "../App.css";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuth();

  // Deconnect and redirect user to login page
  const handleLogOut = async () => {
    await signOut(auth);  
    navigate('/login');
  }

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">

      {/* Header Section */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between py-3 px-4 lg:px-8" aria-label="Global">
          
          {/* Logo à gauche */}
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

          {/* Menu centré */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-x-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Product</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Features</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Marketplace</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500 cursor-pointer">Company</a>
          </div>

          {/* Boutons à droite */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              className="text-sm border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer"
              onClick={ () => {
                navigate('/login')
              }}>
              Log in
            </button>
            <button 
              className="text-sm bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded hover:opacity-90 cursor-pointer"
              onClick={ () => {
                navigate('/signup')
              }}>
              Sign up
            </button>
          </div>

          {/* Bouton mobile */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-sm text-red-500 border border-red-500 px-3 py-1.5 rounded hover:bg-red-50 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="text-sm border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Log in
              </button>
              <button
                className="text-sm bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded hover:opacity-90 cursor-pointer"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-25">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center space-x-2">
                  <img
                    className="h-6 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo"
                  />
                  <span className="text-lg font-bold">EVENT<span className="text-orange-500">PLAN</span></span>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 p-2"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 space-y-4">
                <a href="#" className="block text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">Product</a>
                <a href="#" className="block text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">Features</a>
                <a href="#" className="block text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">Marketplace</a>
                <a href="#" className="block text-base font-semibold text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg">Company</a>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="w-1/2 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
                  Log in
                </button>
                <button className="w-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2 rounded hover:opacity-90 cursor-pointer">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-32 px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
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

          {/* Right Images */}
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
