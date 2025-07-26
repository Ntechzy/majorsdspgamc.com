import React from "react";
import { motion } from "framer-motion";

const ImageFeatureBox = ({ imageUrl = "/assets/default.jpg", alt = "Feature Image" }) => {
  return (
    <section className="relative z-20 -mt-28 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left spacing */}
          <div className="hidden md:block md:col-span-2" />

          {/* Centered Image Box */}
          <div className="col-span-1 md:col-span-4">
            <motion.div
              className="overflow-hidden rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={imageUrl}
                alt={alt}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageFeatureBox;
