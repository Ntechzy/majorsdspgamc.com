import React from "react";
import {
  BookOpen,
  GraduationCap,
  UserRoundSearch,
  Trophy,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Example Stats Data
const stats = [
  {
    value: 124,
    label: "Graduate Programs",
    icon: GraduationCap,
    iconColor: "text-purple-600",
  },
  {
    value: 393,
    label: "Best Courses",
    icon: BookOpen,
    iconColor: "text-green-600",
  },
  {
    value: 2000,
    label: "Successful Alumni",
    icon: GraduationCap,
    iconColor: "text-blue-600",
  },
  {
    value: 95,
    label: "Satisfaction Rate",
    isPercent: true,
    icon: BookOpen,
    iconColor: "text-rose-600",
  },
];

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-12 h-12 mb-4 flex items-center justify-center rounded-md bg-white border shadow ${stat.iconColor}`}
            >
              <stat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-neutral-900">
              <CountUp start={0} end={stat.value} duration={2} />
              {stat.isPercent ? "%" : "+"}
            </h3>
            <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
