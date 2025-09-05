import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import {
  Zap,
  Droplet,
  Coffee,
  Shield,
  Users,
  Ruler,
  Home,
  CheckCircle,
} from "lucide-react";

const Hostel = () => {
  const girlsFacilities = [
    { icon: Zap, text: "Proper electricity in rooms" },
    { icon: Droplet, text: "24×7 Water supply" },
    { icon: Coffee, text: "Mess facility available" },
    { icon: Shield, text: "Proper security provided" },
    { icon: Users, text: "Anti–Ragging team" },
    { icon: Ruler, text: "Weekly cleaning facility" },
    { icon: Home, text: "Proper space is provided" },
    { icon: Zap, text: "Charges – Rs. 90,000/- per student" },
    { icon: Users, text: "2 Students per room" },
    { icon: Ruler, text: "Total 300 Intake" },
  ];

  const boysFacilities = [...girlsFacilities];

  const hostelRules = [
    "Maintain cleanliness in the rooms and common areas",
    "Strictly no ragging or bullying of any kind",
    "Respect hostel timings and curfew rules",
    "Visitors allowed only in designated areas",
    "Use of electricity and water should be responsible",
    "Follow hostel staff instructions at all times",
    "Keep personal belongings safe and organized",
    "Participate in weekly cleanliness and maintenance activities",
  ];

  const FacilitySection = ({ title, facilities, image, reverse }) => (
    <div
      className={`w-full py-20 px-6 md:px-24 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12`}
    >
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-[420px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-[#fbb20e]/30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
      </div>

      {/* Text */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c4c]">
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {facilities.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fbb20e]/20 text-[#fbb20e]">
                <item.icon size={22} />
              </div>
              <span className="text-[#374151] text-base font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <PageBanner title="Hostel Facility" path={["Hostel Facility"]} />

      {/* Welcome Section */}
      <div className="w-full bg-gradient-to-b from-white to-[#f9fafb] py-24 px-6 md:px-24 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1c2c4c] leading-tight">
          Welcome To{" "}
          <span className="text-[#fbb20e]">
            Major S.D. Singh Ayurvedic Medical College & Hospital
          </span>
        </h2>
        <p className="text-[#4b5563] max-w-3xl mx-auto text-lg leading-relaxed">
          Our hostels provide a secure, homely, and well-equipped environment
          where students can thrive academically and personally. Designed for
          both comfort and discipline, they are a true home away from home.
        </p>
      </div>

      {/* Girls Hostel */}
      <FacilitySection
        title="Girls Hostel Facilities"
        facilities={girlsFacilities}
        image="https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-hostel-3.webp"
        reverse={false}
      />

      {/* Boys Hostel */}
      <FacilitySection
        title="Boys Hostel Facilities"
        facilities={boysFacilities}
        image="https://majorsdspgamc.com/pages/assets/images/Facility/majorsdspgamc-College-Other-Facility10.webp"
        reverse={true}
      />

      {/* Hostel Rules Section */}
      <div className="w-full bg-[#fefbee] py-20 px-6 md:px-24 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c4c] text-center mb-12">
          Hostel Rules & Regulations
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {hostelRules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <CheckCircle
                size={22}
                className="text-[#fbb20e] mt-1 flex-shrink-0"
              />
              <span className="text-[#374151] text-base">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hostel;
