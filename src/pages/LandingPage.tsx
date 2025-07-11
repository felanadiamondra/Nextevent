// pages/LandingPage.tsx
import { useNavigate } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light text-secondary flex flex-col">
      <Navbar type="landing" />
      <main className="flex-1 pt-32 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              Plan your <span className="text-primary">dream events</span>
              <br /> in just a few clicks
            </h1>
            <p className="text-lg text-gray-800">
              From weddings to corporate events, simplify your planning experience with EVENTPLAN. 
              Find experts, manage budgets, and organize everything in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/signup")}
                className="bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-primary/90 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-black border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                Log In
              </button>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="/images/event.jpg" alt="Event" className="rounded-2xl shadow-md" />
            <img src="/images/event.jpg" alt="Event" className="rounded-2xl shadow-md" />
            <img src="/images/event.jpg" alt="Event" className="rounded-2xl shadow-md col-span-2" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
