// src/pages/Signup.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/slices/authSlice"; 
import { toast } from "react-toastify"; // ✅ import toast

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(registerUser({ name, email, password }));

    if (registerUser.fulfilled.match(result)) {
      toast.success("Signup successful! You can now login."); // ✅ success toast
      navigate("/admin/login"); 
    } else {
      toast.error(result.payload?.message || "Signup failed ❌"); // ❌ error toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fefefe] to-[#8c9196] px-6">
      <div className="w-full max-w-md bg-white -mt-[100px] shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#1c2c4c] mb-2">Create Account</h2>
        <p className="text-center text-gray-500 mb-8">
          Sign up to access the admin dashboard
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13AAE8] focus:border-[#13AAE8] transition"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">Email Address</label>
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
            <label className="block text-left text-sm font-medium text-[#1c2c4c] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FBB20E] focus:border-[#FBB20E] transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white bg-[#FBB20E] shadow-md hover:opacity-90 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="flex justify-center mt-6 text-sm text-gray-500">
          <p>
            Already have an account?{" "}
            <a href="/admin/login" className="text-[#FBB20E] font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
