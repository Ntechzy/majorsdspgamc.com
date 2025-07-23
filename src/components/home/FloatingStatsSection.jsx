import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  BookOpen,
  UserRoundSearch,
  Star,
  BookMarked,
  User2,
  BadgeCheck,
} from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: <Trophy className="w-8 h-8 text-white" />,
    backIcon: <Star className="w-8 h-8 text-white" />,
    title: "National Awards",
    value: 124,
    description: "Recognized nationally for excellence in Ayurvedic education.",
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-white" />,
    backIcon: <BookMarked className="w-8 h-8 text-white" />,
    title: "Top Courses",
    value: 392,
    description: "Comprehensive BAMS curriculum curated by experts.",
  },
  {
    id: 3,
    icon: <UserRoundSearch className="w-8 h-8 text-white" />,
    backIcon: <User2 className="w-8 h-8 text-white" />,
    title: "Professional Teachers",
    value: 885,
    description: "Highly skilled Vaidyas and Ayurvedic professionals onboard.",
  },
  {
    id: 4,
    icon: <Trophy className="w-8 h-8 text-white" />,
    backIcon: <BadgeCheck className="w-8 h-8 text-white" />,
    title: "Accredited Success",
    value: 100,
    description: "High success rate in professional Ayurvedic placements.",
  },
];

const FloatingStatsSection = () => {
  return (
    <div className="relative z-20 px-4 md:px-12 py-20 bg-gradient-to-br from-green-900 to-emerald-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Side Padding Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Cards Grid */}
          <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg p-6 text-left space-y-2 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon and Number */}
                <div className="flex justify-between items-start mb-2">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#086c63] flex items-center justify-center shadow-md relative"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.2 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {stat.backIcon}
                    </motion.div>
                  </motion.div>
                  <div className="text-[#086c63] text-3xl font-extrabold leading-none tracking-tight">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                    />+
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900">{stat.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingStatsSection;
