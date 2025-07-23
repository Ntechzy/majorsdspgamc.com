import React from "react";
import { BookOpen, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/assets/about2.png"
            alt="About Us"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2">
          {/* Top Heading */}
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-orange-500 font-bold uppercase tracking-wider mb-2">
              ABOUT US
            </h2>
            <h1 className="text-4xl font-bold text-gray-900 leading-snug mb-4">
              Our Roots, Our Vision <br />
              <span className="text-[#ff9000]">Nourishing Future Leaders.</span>
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
              The seeds of Major S. D. Singh Ayurvedic Medical College were planted by a great patriot and visionary, Shri Babu Singh Yadav, to provide access to quality education regardless of region, religion, or gender. Under the dedicated guidance of Dr. Jitendra Singh and Dr. Anita Ranjan, the college has flourished into a leading educational institution, combining scientific and practical training for the nation's development.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Courses Offered</h3>
                <p className="text-gray-600 text-sm mt-1">
                  B.A.M.S. (4.5 years, 100 seats) and M.D./M.S. Ayurveda (3 years, 30 seats) with emphasis on holistic development.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Institutional Growth</h3>
                <p className="text-gray-600 text-sm mt-1">
                  With strong spiritual and academic nourishment, the college has become a nationally reputed center of Ayurvedic education.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-gray-100 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl  p-6 mb-10">
            <p className="text-gray-600 text-sm mb-3">
              Dedicated to excellence, inclusivity, and transformation through ancient wisdom and modern learning practices.
            </p>
            <p className="text-5xl font-bold text-teal-700 text-right"><span className="text-gray-600 text-3xl ">Seats</span>100</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
