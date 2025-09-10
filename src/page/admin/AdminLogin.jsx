import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to dashboard after successful login
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefefe] to-[#f9fafb] px-6">
      <div className="w-full max-w-md bg-white -mt-[100px] shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#1c2c4c] mb-2">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to manage and access the admin dashboard
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-[#FBB20E] shadow-md hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

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
