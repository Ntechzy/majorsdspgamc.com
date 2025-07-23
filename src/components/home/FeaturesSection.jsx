import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  BookOpen,
  DollarSign,
  Award,
  UserCog,
  LibraryBig,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    backIcon: <Award className="w-8 h-8 text-white" />,
    title: "Ayurvedic Scholarships",
    description: "We provide merit-based and need-based scholarships for BAMS students.",
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-white" />,
    backIcon: <UserCog className="w-8 h-8 text-white" />,
    title: "Experienced Vaidyas",
    description: "Learn from certified Ayurvedic doctors with clinical and teaching experience.",
  },
  {
    id: 3,
    icon: <BookOpen className="w-8 h-8 text-white" />,
    backIcon: <LibraryBig className="w-8 h-8 text-white" />,
    title: "Ayurvedic Library",
    description: "Access classical Ayurvedic texts, journals, and modern research papers.",
  },
  {
    id: 4,
    icon: <DollarSign className="w-8 h-8 text-white" />,
    backIcon: <BadgeDollarSign className="w-8 h-8 text-white" />,
    title: "Affordable Education",
    description: "Quality Ayurvedic education at a fee structure accessible to all.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="relative z-20 -mt-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Empty space for desktop left padding */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Features Grid */}
          <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
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
                      {feature.icon}
                    </motion.div>
                    <motion.div
                      className="absolute w-full h-full flex items-center justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      {feature.backIcon}
                    </motion.div>
                  </motion.div>
                  <div className="text-[#086c63] text-3xl font-extrabold leading-none tracking-tight">
                    <span className="font-outline-1 text-transparent">0{feature.id}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
