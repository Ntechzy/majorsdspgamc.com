// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/authSlice"; // 👈 import login thunk

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(result)) {
      navigate("/admin/dashboard"); // ✅ redirect on success
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefefe] to-[#f9fafb] px-6">
      <div className="w-full max-w-md bg-white -mt-[100px] shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#1c2c4c] mb-2">Admin Login</h2>
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
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white bg-[#FBB20E] shadow-md hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error.message || error}</p>}

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
