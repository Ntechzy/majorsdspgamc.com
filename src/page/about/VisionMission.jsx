import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import {
  Award,
  ShieldCheck,
  HeartPulse,
  Lightbulb,
  Handshake,
  Leaf,
  CheckCircle,
} from "lucide-react";

const VisionMission = () => {
  return (
    <>
      {/* Banner */}
      <PageBanner title="Vision & Mission" path={["Vision & Mission"]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6 relative inline-block">
              Our Vision
              <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#fbb20e] rounded"></span>
            </h2>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              At <span className="font-semibold text-[#374151]">Major S.D. Singh Ayurvedic Medical College & Hospital™</span>, 
              our vision is to emerge as a{" "}
              <span className="font-medium text-[#374151]">
                centre of excellence in Ayurvedic Medical Education
              </span>, 
              healthcare, and research. We aspire to integrate the wisdom of Ayurveda 
              with the innovations of modern science, producing holistic healers 
              who serve humanity with compassion and integrity.
            </p>
            <p className="text-lg text-[#4b5563] leading-relaxed mt-4">
              We aim to build a future where{" "}
              <span className="italic text-[#374151]">
                Ayurveda is globally recognized
              </span>{" "}
              as a trusted system of medicine, addressing the health challenges 
              of society with natural, preventive, and curative solutions.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/college.png"
                alt="College Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/asset/gallery/img15.webp"
                alt="College Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mb-6 relative inline-block">
              Our Mission
              <span className="absolute left-0 -bottom-2 w-20 h-1 bg-[#fbb20e] rounded"></span>
            </h2>
            <ul className="space-y-4 text-lg text-[#4b5563]">
              {[
                "Provide quality education in Ayurveda blending classical knowledge with modern healthcare practices.",
                "Promote original research and innovation in Ayurvedic medicine to address contemporary health challenges.",
                "Deliver affordable and accessible healthcare services to rural and urban communities alike.",
                "Foster ethical values, professionalism, and compassion among our students and staff.",
                "Empower graduates with leadership qualities, global exposure, and a lifelong commitment to learning.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-[#fbb20e] mt-1 flex-shrink-0"
                    size={22}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#374151] mb-12 relative inline-block">
            Our Core Values
            <span className="block w-20 h-1 bg-[#fbb20e] mx-auto mt-2 rounded"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award size={28} className="text-[#fbb20e]" />,
                title: "Excellence",
                desc: "We pursue the highest standards in teaching, research, and patient care.",
              },
              {
                icon: <ShieldCheck size={28} className="text-[#fbb20e]" />,
                title: "Integrity",
                desc: "We uphold honesty, ethics, and transparency in every endeavor.",
              },
              {
                icon: <HeartPulse size={28} className="text-[#fbb20e]" />,
                title: "Compassion",
                desc: "We care deeply for our patients, students, and community with empathy.",
              },
              {
                icon: <Lightbulb size={28} className="text-[#fbb20e]" />,
                title: "Innovation",
                desc: "We embrace creativity and new ideas to advance Ayurvedic medicine.",
              },
              {
                icon: <Handshake size={28} className="text-[#fbb20e]" />,
                title: "Service",
                desc: "We are dedicated to serving society through accessible healthcare.",
              },
              {
                icon: <Leaf size={28} className="text-[#fbb20e]" />,
                title: "Heritage",
                desc: "We honor the timeless wisdom of Ayurveda and preserve its values.",
              },
            ].map((value, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#374151]">
                    {value.title}
                  </h3>
                  <p className="text-[#6b7280]">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
