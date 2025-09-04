import React from 'react';
import PageBanner from '../../components/shared/PageBanner';

const DirectorMessage = () => {
  return (
    <>
      <PageBanner title="Director's Message" path={["Director's Message"]} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Director's Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/director.webp" // Replace with actual image path
                alt="Dr. Anita Ranjan, Director"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Dr. Anita Ranjan</h3>
              <p className="text-[#fbb20e] font-medium">Director</p>
              <p className="text-gray-600 text-sm">Major S.D. Singh Ayurvedic Medical College & Hospital™</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e] inline-block">
                Message from the Director's Desk
              </h2>

              <div className="text-gray-700 space-y-4">
                <p className="font-semibold text-gray-800">Dear Students,</p>

                <p>
                  Here, at Major S.D. Singh Ayurvedic Medical College & Hospital™, we are pledged to produce quality students. By "quality," I mean individuals who possess deep knowledge, politeness, good manners, sharp acumen, and above all, a focused, career-oriented mindset with a strong zeal to succeed in life.
                </p>

                <p>
                  Our dedicated faculty members strive to ensure that every student understands the concepts thoroughly and in the simplest way possible. I truly appreciate the sincere efforts and support of both our faculty and students, who have made the dream of becoming a B.A.M.S. graduate achievable.
                </p>

                <p>
                  I, Dr. Anita Ranjan (Director), assure you that once you become part of the Major S.D. Singh Ayurvedic Medical College & Hospital™ family, your future will be bright, and your potential will flourish.
                </p>

                <p>
                  A special word for our hostellers—we make every effort to provide a family-like atmosphere in the hostel. That is why our management stays personally and professionally connected with staff, faculty, students, and employees alike.
                </p>

                <p className="italic text-gray-600 border-l-4 border-[#fbb20e] pl-4 py-2 bg-gray-50 rounded">
                  "We try to fulfill all the expectations a guardian would have for their loved ones."
                </p>

                <div className="mt-8">
                  <p className="text-gray-800 font-medium">Wish You All the Best.</p>
                  <p className="text-[#fbb20e] font-bold mt-2">Dr. Anita Ranjan</p>
                  <p className="text-gray-600">M.B.B.S. / M.S. (Obstetrics & Gynaecology)</p>
                  <p className="text-gray-600">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorMessage;
