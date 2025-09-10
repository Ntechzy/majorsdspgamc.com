import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mail,
  Phone,
  CalendarDays,
  BadgeInfo,
  GraduationCap,
  MapPin,
} from "lucide-react";

const PrincipleMedical = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f0f9ff] py-20 px-6 md:px-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#FBB20E] mb-2">
          Principal's Message
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#FBB20E] to-[#13AAE8] rounded-full mb-6"></div>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg">
          Welcome to Major S.D. Singh College! As the Principal and Hospital
          Superintendent, I am honored to lead an institution that fosters
          academic excellence, holistic growth, and compassionate healthcare. We
          are dedicated to shaping future leaders who uplift society through
          knowledge and service.
        </p>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-shrink-0" data-aos="fade-right">
          <img
            src="/Smiling Woman in Traditional Attire.png"
            alt="Principal Dr. Anjana Dixit"
            className="w-64 h-80 object-cover rounded-2xl border-[6px] border-[#FBB20E] shadow-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4 text-[#1c2c4c] max-w-xl" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-[#FBB20E]">
            Prof. (Dr.) Anjana Dixit
          </h2>
          <p className="text-sm font-medium text-white bg-[#FBB20E] inline-block px-4 py-1 rounded-full">
            Principal / Hospital Superintendent
          </p>

          <div className="grid gap-3 text-gray-700 pt-4 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#13AAE8]" />
              <span>
                1/31, Nagla Deena, Po. Fatehgarh, Dist. Farrukhabad (U.P.)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#13AAE8]" />
              <span>+91 9129347795</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#13AAE8]" />
              <span>Date of Birth: 12/10/1973</span>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#13AAE8]" />
              <span>Date of Joining: 02/02/2024</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#13AAE8]" />
              <span>agnihotrianjana@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <BadgeInfo className="text-[#13AAE8]" />
              <span>
                Reg. No.: 47292, Board of Ayurvedic and Unani, Tibbi Systems of
                Medicine, Lucknow, Uttar Pradesh
              </span>
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#13AAE8]" />
              <span>BAMS, MD (Kriya Sharir)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleMedical;
