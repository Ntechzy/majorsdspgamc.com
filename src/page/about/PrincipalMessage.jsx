import React from 'react';
import PageBanner from '../../components/shared/PageBanner';

const PrincipalMessage = () => {
  return (
    <>
      <PageBanner title="Principal's Message" path={["Principal's Message"]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Principal's Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/principal.png" 
                alt="Prof. (Dr.) Anajana Dixit, Principal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Prof. (Dr.) Anajana Dixit</h3>
              <p className="text-[#fbb20e] font-medium">Principal</p>
              <p className="text-gray-600 text-sm">Major S.D. Singh Ayurvedic Medical College & Hospital™</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e] inline-block">
                Message from the Principal's Desk
              </h2>

              <div className="text-gray-700 space-y-4">
                <p className="font-semibold text-gray-800">Dear Students,</p>

                <p>
                  I am honored to serve as the Principal of Major S.D. Singh Ayurvedic Medical College & Hospital™, an institution dedicated to the excellence of Ayurvedic education and holistic development.
                </p>

                <p>
                  With more than 18 years of experience in the field of Ayurveda, I have had the privilege to serve as a professor, administrator, and practitioner. I completed my B.A.M.S. and M.D. (Ayurveda) from Lucknow University and have since dedicated myself to advancing the academic and research frontiers of Ayurveda.
                </p>

                <p>
                  Over the years, I have participated in numerous national and international conferences and successfully organized seminars, training programs, and workshops. My goal is to ensure that our college continues to provide quality Ayurvedic education while aligning with NAAC guidelines and modern academic standards.
                </p>

                <p>
                  I strongly believe in nurturing an environment of creativity, discipline, critical thinking, and academic integrity. I value punctuality, innovation, encouragement, and a supportive attitude, all of which contribute significantly to a vibrant learning environment.
                </p>

                <p className="italic text-gray-600 border-l-4 border-[#fbb20e] pl-4 py-2 bg-gray-50 rounded">
                  "Our mission is to equip our students with the skills and values required to lead, heal, and inspire through the principles of Ayurveda."
                </p>

                <p>
                  It is my firm belief that every student has the potential to shine. I am committed to helping you unlock that potential and become confident Ayurvedic professionals who contribute meaningfully to society.
                </p>

                <div className="mt-8">
                  <p className="text-gray-800 font-medium">With warm regards and best wishes,</p>
                  <p className="text-[#fbb20e] font-bold mt-2">Prof. (Dr.) Anajana Dixit</p>
                  <p className="text-gray-600">B.A.M.S., M.D. (Ayurveda)</p>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalMessage;

