import React from "react";
import {
  Mail,
  Phone,
  CalendarDays,
  BadgeInfo,
  GraduationCap,
  MapPin,
} from "lucide-react";

const PrincipleMedical = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f0f9ff] py-16 px-6 md:px-12 lg:px-20">
      {/* Heading + Subheading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FBB20E] mb-2">
          Principal&apos;s Message
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-[#1c2c4c] mb-4">
          Words of Wisdom & Guidance
        </h3>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#FBB20E] to-[#FBB20E] rounded-full mb-6"></div>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Welcome to Major S.D. Singh College! As the Principal and Hospital
          Superintendent, I am honored to lead an institution that fosters
          academic excellence, holistic growth, and compassionate healthcare.
          We are dedicated to shaping future leaders who uplift society through
          knowledge and service.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FBB20E] mx-auto">
            <img
              src="/Smiling Woman in Traditional Attire.png"
              alt="Principal Dr. Anjana Dixit"
              className="w-72 h-96 md:w-80 md:h-[28rem] object-cover"
            />
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FBB20E] rounded-full opacity-20 hidden md:block"></div>
        </div>

        {/* Profile Details */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-10 w-full max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1c2c4c] mb-2 text-center lg:text-left">
            Prof. (Dr.) Anjana Dixit
          </h3>
          <p className="text-sm font-medium text-white bg-[#FBB20E] inline-block px-4 py-1 rounded-full mb-6 text-center lg:text-left">
            Principal / Hospital Superintendent
          </p>

          <div className="grid gap-5 text-gray-700 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#FBB20E] w-5 h-5 flex-shrink-0 mt-1" />
              <span>
                1/31, Nagla Deena, Po. Fatehgarh, Dist. Farrukhabad (U.P.)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#FBB20E] w-5 h-5 flex-shrink-0" />
              <span>+91 9129347795</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#FBB20E] w-5 h-5 flex-shrink-0" />
              <span>Date of Birth: 12/10/1973</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#FBB20E] w-5 h-5 flex-shrink-0" />
              <span>Date of Joining: 02/02/2024</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#FBB20E] w-5 h-5 flex-shrink-0" />
              <span>agnihotrianjana@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <BadgeInfo className="text-[#FBB20E] w-5 h-5 flex-shrink-0 mt-1" />
              <span>
                Reg. No.: 47292, Board of Ayurvedic and Unani, Tibbi Systems of
                Medicine, Lucknow, Uttar Pradesh
              </span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#FBB20E] w-5 h-5 flex-shrink-0" />
              <span>BAMS, MD (Kriya Sharir)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMedical;
