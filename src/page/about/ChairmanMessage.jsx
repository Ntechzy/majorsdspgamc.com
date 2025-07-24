import React from 'react';
import PageBanner from '../../components/shared/PageBanner';

const ChairmanMessage = () => {
  return (
    <>
      <PageBanner title="Chairman's Message" path={["Chairman's Message"]} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Chairman's Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/chairman.webp" // Replace with your actual image path
                alt="Dr. Jitendra Singh, Chairman"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Dr. Jitendra Singh</h3>
              <p className="text-[#fbb20e] font-medium">Chairman</p>
              <p className="text-gray-600 text-sm">Major S.D. Singh Ayurvedic Medical College & Hospital™</p>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e] inline-block">
                Message from the Chairman's Desk
              </h2>
              
              <div className="text-gray-700 space-y-4">
                <p className="font-semibold text-gray-800">Dear Students,</p>
                
                <p>
                  Pleasure is mine to state that Major S.D. Singh Ayurvedic Medical College & Hospital™ at Farrukhabad (U.P.) is inculcating life meticulously & imparting the best in every field of knowledge and education in an accurate manner. Our vision is based on crystal clear policy as transparent communication, a major emphasis on teamwork and adorning everything at its high.
                </p>
                
                <p>
                  This visionary culture provides our wards with the adoption of the present & the future challenges, responsibilities towards society and our nation at large. Who, how & where the students are associated with? does matter. All there's need to understand the accurate & appropriate meaning & motive of the word association is...
                </p>
                
                <p className="italic text-gray-600 border-l-4 border-[#fbb20e] pl-4 py-2 bg-gray-50 rounded">
                  "A drop from the sky if caught in hands... pure enough to drink, if falls... uses to was feet, if falls on hot surface... it parishes, falls on Lotus... shines like a pearl & finally on oyster... becomes a pearl. The drop is same, but the existence & worth depends whom it associates."
                </p>
                
                <p>
                  Whatever you do the association must be good as the best at its base. Our institution has set specific objectives and planned activities for achieving excellence in all spheres of Ayurveda Education. We strongly believe in academic excellence and do not compromise on teaching standards or discipline. These are the springboards on which we operate.
                </p>
                
                <p>
                  In order to meet the global challenges of transforming competitive educational environment in the new century, Major S.D. Singh Ayurvedic Medical College & Hospital™ is squaring the circle for the all-round development of the students.
                </p>
                
                <p className="font-semibold text-gray-800">
                  "So dear students, instead of swimming with the tide like dead fish, create your own waves & shine like stars & always believe in handsome is that handsome does."
                </p>
                
                <div className="mt-8">
                  <p className="text-gray-800 font-medium">Wish You All the Best.</p>
                  <p className="text-[#fbb20e] font-bold mt-2">Dr. Jitendra Singh</p>
                  <p className="text-gray-600">Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChairmanMessage;