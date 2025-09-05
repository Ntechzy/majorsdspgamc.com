import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Animated Circles */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0.4, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[600px] h-[600px] bg-[#ebbd29] rounded-full -top-40 -left-40 blur-3xl opacity-30"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: [0.4, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute w-[400px] h-[400px] bg-[#ebbd29] rounded-full -bottom-32 -right-32 blur-3xl opacity-30"
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-[#ebbd29] drop-shadow-lg text-center"
      >
        Coming Soon
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-gray-700 text-center max-w-xl"
      >
        We’re working hard to launch something amazing. Stay tuned for updates!
      </motion.p>

      {/* Countdown / Placeholder */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
        className="mt-10 flex items-center gap-4 text-[#ebbd29]"
      >
        <Clock className="w-8 h-8 animate-spin-slow" />
        <span className="text-2xl font-semibold tracking-wide">
          Launching Soon...
        </span>
      </motion.div>

    </div>
  );
};

export default ComingSoon;
