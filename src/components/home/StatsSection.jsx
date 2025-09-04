import React from "react";
import { BookOpen, GraduationCap } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Example Stats Data
const stats = [
  {
    value: 4,
    label: "Courses",
    icon: BookOpen,
    iconColor: "text-yellow-600",
     suffix: "+",
  },
  {
    value: 10,
    label: "Awards",
    icon: GraduationCap,
    iconColor: "text-indigo-600",
    suffix: "+",
  },
  {
    value: 19,
    label: "Years of Excellence",
    icon: BookOpen,
    iconColor: "text-teal-600",
    suffix: "+",
  },
  {
    value: 20,
    label: "National & International Seminars",
    icon: GraduationCap,
    iconColor: "text-orange-600",
    suffix: "+",
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
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix || ""}
                />
              )}
            </h3>
            <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
