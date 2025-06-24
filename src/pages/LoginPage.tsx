// src/pages/Login.tsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 px-4 animate-fade-in">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Welcome back 👋</h2>
        {error && <p className="mb-4 text-center text-sm text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-white shadow-md hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          No account yet?{" "}
          <a href="/signup" className="font-medium text-orange-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
