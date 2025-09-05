import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import { Dumbbell, Wind, Zap, Maximize } from "lucide-react";

const Gym = () => {
  const facilities = [
    { icon: Dumbbell, text: "Well Equipped" },
    { icon: Zap, text: "Proper guidance & trainers" },
    { icon: Maximize, text: "Spacious workout area" },
    { icon: Wind, text: "Air-conditioned environment" },
    { icon: Zap, text: "Proper electricity backup" },
    { icon: Dumbbell, text: "Variety of fitness levels supported" },
  ];

  return (
    <>
      <PageBanner title="Gym" path={["Gym"]} />

      {/* Intro Section */}
      <div className="w-full bg-gradient-to-b from-white to-[#f9fafb] py-20 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <img
            src="https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-Fitness.webp"
            alt="Fitness at Major SD Singh"
            className="rounded-2xl shadow-xl border-2 border-[#fbb20e] object-cover w-full h-[400px]"
          />

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c2c4c]">
              Fitness at <span className="text-[#fbb20e]">Major SD Singh</span>
            </h2>
            <p className="text-[#4b5563] leading-relaxed text-lg">
              Gym & Fitness at Major SD Singh is a dynamic and diverse center with
              group classes for every fitness level. Our trainers provide proper
              guidance and ensure a motivating atmosphere for all members.
              With modern equipment and air-conditioned facilities, we encourage
              students to stay healthy and strong.
            </p>
            <p className="text-[#6b7280] italic text-md">
              "A healthy body leads to a healthy mind."
            </p>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="w-full bg-gradient-to-b from-[#f9fafb] to-white py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1c2c4c] mb-12">
          Our Fitness Facilities
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl border-l-4 border-[#fbb20e] transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#fbb20e]/20 text-[#fbb20e]">
                  <Icon size={28} />
                </div>
                <p className="text-lg font-medium text-[#374151]">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivation Section */}
      <div className="w-full bg-[#fbb20e]/10 py-20 px-6 md:px-24 text-center space-y-6 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c4c]">
          Energize Your <span className="text-[#fbb20e]">Desire</span>
        </h2>
        <p className="text-[#4b5563] max-w-2xl mx-auto text-lg">
          Join, Sweat, Fit. Be an inspiration for others. Together we build
          strength, discipline, and confidence.
        </p>
      </div>

      {/* Athletics Image Section */}
      <div className="w-full bg-gradient-to-b from-white to-[#f9fafb] py-20 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-Fitness1.webp"
            alt="Athletics at Major SD Singh"
            className="rounded-2xl shadow-xl border-2 border-[#fbb20e] object-cover w-full h-[400px]"
          />
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#1c2c4c]">
              Athletics at Major SD Singh
            </h3>
            <p className="text-[#4b5563] text-lg leading-relaxed">
              Along with gym training, athletics is encouraged to ensure all-round
              development of physical and mental health. Students can participate
              in multiple sports activities, keeping fitness fun and engaging.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gym;
