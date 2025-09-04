import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import { Award, Medal, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import AchievementSection from "../../components/home/AchievementSection";

const AwardsAchievements = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Best Ayurvedic Medical College Award",
      year: "2022",
      description:
        "Recognized for excellence in Ayurvedic education and healthcare services by the National Ayurveda Council.",
    },
    {
      icon: Medal,
      title: "Excellence in Research",
      year: "2021",
      description:
        "Honored for outstanding contributions in Ayurvedic research and publications at the International Ayurveda Conference.",
    },
    {
      icon: Star,
      title: "Community Healthcare Service Award",
      year: "2020",
      description:
        "Awarded for organizing free health camps and promoting Ayurveda to rural communities.",
    },
    {
      icon: Award,
      title: "Outstanding Faculty Recognition",
      year: "2019",
      description:
        "Several faculty members were recognized for their excellence in teaching and research contributions.",
    },
  ];

  return (
    <>
      <PageBanner
        title="Awards & Achievements"
        path={["Awards & Achievements"]}
      />

      {/* Intro Section */}
      <div className="w-full bg-white py-16 px-6 md:px-24 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-[#374151] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Celebrating Our <span className="text-[#fbb20e]">Legacy</span>
        </motion.h2>
        <div className="w-24 h-1 bg-[#fbb20e] mx-auto mb-6 rounded-full"></div>
        <motion.p
          className="text-lg text-[#4b5563] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Major S.D. Singh Ayurvedic Medical College & Hospital™, every award
          and recognition we receive is a reflection of our dedication to
          excellence in Ayurvedic education, patient care, and community
          service. These milestones inspire us to reach greater heights and set
          new benchmarks.
        </motion.p>
      </div>

      {/* Stats / Counter Section */}
      <AchievementSection />

      <div className="w-full bg-gradient-to-b from-[#f9fafb] to-white py-20 px-6 md:px-24">
        {/* Heading */}
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-[#374151] mb-4">
            Our Journey of <span className="text-[#fbb20e]">Excellence</span>
          </h2>
          <p className="text-lg text-[#4b5563] max-w-2xl mx-auto">
            Over the years, Major S.D. Singh Ayurvedic Medical College &
            Hospital™ has been recognized for its commitment to Ayurveda,
            research, and community service.
          </p>
        </section>

        {/* Timeline Style Awards */}
        <section className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#fbb20e]/30 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {awards.map((award, index) => {
              const Icon = award.icon;
              const isLeft = index % 2 === 0; // alternate left-right

              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center md:gap-8 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-[#fbb20e] shadow-md transform -translate-x-1/2 hidden md:block"></div>

                  {/* Content Box */}
                  <div
                    className={`md:w-5/12 bg-white shadow-md rounded-xl p-6 border-l-4 border-[#fbb20e] ${
                      isLeft ? "md:ml-0" : "md:mr-0"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-[#fbb20e]/20 text-[#fbb20e]">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-semibold text-[#374151]">
                        {award.title}{" "}
                        <span className="text-[#fbb20e]">({award.year})</span>
                      </h3>
                    </motion.div>
                    <p className="text-[#4b5563]">{award.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default AwardsAchievements;
