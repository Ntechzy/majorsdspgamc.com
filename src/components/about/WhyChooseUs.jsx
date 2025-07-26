import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image + Quote */}
        <div className="relative">
          <img
            src="https://majorsdspgamc.com/pages/assets/images/Media/majorsdspgamc-CEREMONY9.webp"
            alt="Lecture"
            className="rounded-xl w-full shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-yellow-400 text-sm md:text-base p-4 rounded-md max-w-xs shadow-xl
              md:-mb-15 md:-ml-10
              mb-2 ml-2
          ">
            <p className="text-gray-800 font-medium leading-snug">
              “With a commitment to uncompromising quality and the highest educational ethics, we ensure complete satisfaction every time. We are synonymous with Transparency, Reliability, and Truthfulness.”
            </p>
          </div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#fbb20e]">Choose Us</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Major S D Singh Ayurvedic Medical College is a leading institute guiding students in Ayurveda through BAMS and MD/MS programs with academic and professional excellence.
          </p>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Recognized by AYUSH, CCIM, CSJMU & UP Govt.</li>
            <li>Modern Labs, AC Classrooms, and a well-stocked Library</li>
            <li>Dedicated staff and a focus on quality education</li>
            <li>One of the biggest campuses in Ayurvedic education</li>
          </ul>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="space-y-2">
          <GraduationCap className="mx-auto text-purple-600" size={36} />
          <h3 className="text-3xl font-bold text-gray-900">
            <CountUp end={124} duration={3} />+
          </h3>
          <p className="text-sm text-gray-600">Graduate Programs</p>
        </div>
        <div className="space-y-2">
          <BookOpen className="mx-auto text-green-600" size={36} />
          <h3 className="text-3xl font-bold text-gray-900">
            <CountUp end={393} duration={3} />+
          </h3>
          <p className="text-sm text-gray-600">Best Courses</p>
        </div>
        <div className="space-y-2">
          <GraduationCap className="mx-auto text-blue-600" size={36} />
          <h3 className="text-3xl font-bold text-gray-900">
            <CountUp end={2000} duration={3} />+
          </h3>
          <p className="text-sm text-gray-600">Successful Alumni</p>
        </div>
        <div className="space-y-2">
          <BookOpen className="mx-auto text-rose-600" size={36} />
          <h3 className="text-3xl font-bold text-gray-900">
            <CountUp end={95} duration={3} />%
          </h3>
          <p className="text-sm text-gray-600">Satisfaction Rate</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
