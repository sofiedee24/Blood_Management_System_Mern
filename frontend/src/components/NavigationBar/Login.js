import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the credentials
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#800000] text-white shadow-md">
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-[#660000] transition">
              <Bars3Icon className="w-6 h-6 text-white" />
            </button>
            <span className="text-xl font-bold tracking-wide">BloodTrack</span>
          </div>
        </div>
      </nav>

      {/* Login Card */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-20">
          {/* Header */}
          <h2 className="text-2xl font-bold text-center text-[#800000] mb-6">
            Login to Your Account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#800000] hover:bg-[#660000] text-white py-2 px-4 rounded-md shadow font-medium"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-[#800000] hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="text-[#800000] hover:underline">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
