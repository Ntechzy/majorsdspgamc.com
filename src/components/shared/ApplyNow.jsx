import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ApplyNow = () => {
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ x: -5 }}
      className="fixed right-0 top-1/2 z-50"
    >
      <Link
        to="/apply"
        className="group relative flex items-center justify-center h-32 w-10 md:w-12 bg-[#f8a81c] hover:bg-[#f7b93e] rounded-l-lg shadow-lg overflow-hidden transition-all duration-300"
        aria-label="Apply Now"
      >
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-l-lg shadow-[0_0_15px_rgba(248,168,28,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <span className="text-xs md:text-sm -rotate-90 font-bold tracking-wider whitespace-nowrap text-white drop-shadow-md">
          Apply Now
        </span>
        
        {/* Animated arrow indicator (visible on hover) */}
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1.5 top-1/2 -translate-y-1/2"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ApplyNow;