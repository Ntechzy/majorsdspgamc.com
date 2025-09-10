import { Sidebar } from "lucide-react";
import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(""); // keep as string
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Token validation
    if (token.length !== 6 || !/^\d+$/.test(token)) {
      setError("Token must be exactly 6 digits.");
      return;
    }

    setError(""); // clear error if valid

    // Here you can handle login logic
    console.log("Email:", email);
    console.log("Token:", token);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefefe] to-[#f9fafb] px-6">
      <div className="w-full max-w-md bg-white -mt-[100px] shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#1c2c4c] mb-2">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to manage and access the admin dashboard
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13AAE8] focus:border-[#13AAE8] transition"
              required
            />
          </div>

          {/* 6-Digit Token */}
          <div>
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">
              6-Digit Token
            </label>
            <input
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              maxLength={6}
              placeholder="Enter your token"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13AAE8] focus:border-[#13AAE8] transition tracking-widest text-center font-mono"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBB20E] focus:border-[#FBB20E] transition"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-[#FBB20E] shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Back to Home */}
        <div className="flex justify-center mt-6 text-sm text-gray-500">
          <a href="/" className="hover:text-[#FBB20E]">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
