import React from "react";
import { BookOpen, GraduationCap, UserRoundSearch, Trophy } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 124,
    label: "National Awards",
    icon: Trophy,
  },
  {
    value: 392,
    label: "Top-rated Courses",
    icon: BookOpen,
  },
  {
    value: 885,
    label: "Qualified Teachers",
    icon: UserRoundSearch,
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-tr from-[#012a2c] via-[#014f3d] to-[#012a2c] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ffffff0c] to-transparent blur-lg" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.3, duration: 0.8, type: "spring" }}
            className="group relative bg-white/10 border border-white/20 backdrop-blur-md shadow-xl p-8 rounded-2xl flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#f8d816] via-[#e6c200] to-[#f8d816] shadow-md">
              <stat.icon className="w-8 h-8 text-[#087521]" />
            </div>
            <h3 className="text-5xl font-bold text-[#f8d816]">
              <CountUp start={0} end={stat.value} duration={2.5} />+
            </h3>
            <p className="mt-2 text-white/90 font-medium text-lg tracking-wide">
              {stat.label}
            </p>
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#f8d816]/60 transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

