// pages/HomePage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <Navbar type="home" />

      <main className="pt-32 px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-100 to-red-100 px-6 py-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome, <span className="text-orange-500">{user?.displayName || "Event Planner"}</span>
            </h1>
            <p className="text-lg text-gray-700">
              Organize your weddings, conferences, or private parties with confidence. All your tools and professionals in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Create New Event
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                Browse Services
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {["event1.jpg", "event2.jpg", "event3.jpg", "event4.jpg"].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={`./images/${img}`}
                  alt={`Event ${index + 1}`}
                  className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-56"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Photographer', 'Venue', 'Catering', 'DJ'].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-md text-center"
              >
                <img
                  src="/images/event.jpg"
                  alt={service}
                  className="w-full h-28 object-cover rounded-xl mb-2"
                />
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* User Events Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">My Upcoming Events</h2>
          <div className="space-y-4">
            {[1, 2].map((e) => (
              <div
                key={e}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg">Event Title {e}</h3>
                  <p className="text-gray-600">Date: 2025-08-0{e} | Status: Planned</p>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl shadow-inner text-center">
          <h2 className="text-2xl font-semibold mb-2">Need Inspiration?</h2>
          <p className="text-gray-700 mb-4">
            Discover how others plan their events, get inspired by real-life stories, and learn from experts.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
            Explore Ideas
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
