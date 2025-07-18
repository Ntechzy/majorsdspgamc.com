import React from "react";
import {
  BookOpen,
  GraduationCap,
  UserRoundSearch,
  Trophy,
} from "lucide-react";

const stats = [
  {
    value: "500",
    label: "Total Courses",
    icon: <BookOpen className="w-10 h-10 text-white" />,
  },
  {
    value: "1900",
    label: "Our Students",
    icon: <GraduationCap className="w-10 h-10 text-white" />,
  },
  {
    value: "750",
    label: "Skilled Lecturers",
    icon: <UserRoundSearch className="w-10 h-10 text-white" />,
  },

];

const StatsSection = () => {
  return (
    <section className="w-full bg-blue-500 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-white">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            {/* SVG Blob Background */}
            <div className="relative w-30 h-30 mb-4">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full z-0"
              >
                <path
                  fill="#F8A81C"
                  d="M60.3,-33.5C69.1,-19.5,61.1,5.6,48.2,29.3C35.4,53,17.7,75.3,-3.6,77.4C-24.8,79.4,-49.7,61.2,-63,37.3C-76.3,13.3,-78.2,-16.5,-65.7,-32.5C-53.3,-48.6,-26.7,-51.1,-0.5,-50.8C25.7,-50.6,51.4,-47.5,60.3,-33.5Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* Icon on Top */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {stat.icon}
              </div>
            </div>

            {/* Stat Number */}
            <h3 className="text-4xl font-bold">{stat.value}</h3>

            {/* Stat Label */}
            <p className="text-white font-medium mt-2">+ {stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
