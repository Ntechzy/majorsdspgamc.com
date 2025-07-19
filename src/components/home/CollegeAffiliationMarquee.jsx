import React from "react";
import { motion } from "framer-motion";

const CollegeAffiliationMarquee = () => {
  // Logo URLs
  const logos = [
    "/assets/affliation/a1.png",
    "https://upload.wikimedia.org/wikipedia/en/1/17/Maha_Yogi_Guru_Gorakhnath_Ayush_University_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Seal_of_Uttar_Pradesh.svg",
    "/assets/affliation/a4.png",
    "/assets/affliation/a5.png",
  ];

  // Duplicate the logos for seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-gray-50 py-12 px-4 shadow-inner">
      
      <div className="relative">
        {/* Gradient overlays for better UX */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-10" />
        
        <motion.div
          className="flex"
          animate={{
            x: ["0%", `-${(logos.length / duplicatedLogos.length) * 100}%`],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 px-12 flex items-center"
            >
              <div className="bg-transparent">
                <img
                  src={logo}
                  alt={`Affiliation ${index % logos.length + 1}`}
                  className="h-24 w-auto max-w-[200px] object-contain transition-all duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/assets/affliation/placeholder.png"; 
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeAffiliationMarquee;