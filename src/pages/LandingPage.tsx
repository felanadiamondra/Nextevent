import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Header */}
      <header className="w-full fixed top-0 z-50 shadow bg-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-6"
            alt="Logo"
          />
          <span className="font-bold text-lg">
            EVENT<span className="text-orange-500">PLAN</span>
          </span>
        </div>
        <div className="space-x-4 hidden md:flex">
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
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Plan your <span className="text-orange-500">dream events</span>
              <br /> in just a few clicks
            </h1>
            <p className="text-lg text-gray-600">
              From weddings to corporate events, simplify your planning experience with EVENTPLAN. Find experts, manage budgets, and organize everything in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("/login")}
                className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Log In
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/images/event.jpg"
              alt="Event 1"
              className="rounded-2xl shadow-md"
            />
            <img
              src="/images/event.jpg"
              alt="Event 2"
              className="rounded-2xl shadow-md"
            />
            <img
              src="/images/event.jpg"
              alt="Event 3"
              className="rounded-2xl shadow-md col-span-2"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © 2025 EVENTPLAN. All rights reserved.
      </footer>
    </div>
  );
}
