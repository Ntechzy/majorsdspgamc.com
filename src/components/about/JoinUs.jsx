import React from 'react';

const JoinUs = () => {
  const cardData = [
    {
      number: '01.',
      title: 'Books & Library',
      content:
        'The College Library houses one of the largest collections of books, journals, theses & dissertations, reports, and other resources, offering a ready platform for the students, scholars, teachers and other stakeholders to pursue learning and research.',
    },
    {
      number: '02.',
      title: 'Trending Courses',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)</li>
          <li>Doctor of Medicine (Ayurveda)</li>
          <li>Doctor of Surgery (Ayurveda)</li>
          <li>Ayurvedic Upcharika (GNM)</li>
          <li>Ayurvedic Pharmacist (D.Pharm)</li>
        </ul>
      ),
    },
    {
      number: '03.',
      title: 'GMP Certified In House Pharmacy',
      content:
        'Pharmacy is well maintained and during practical demonstration, preparing essential drugs. Pharmacy is also GMP certified by UP Govt. Drug Testing lab is functional. Prepared Drugs are used for dispensing hospital patients and also for commercial purpose.',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center relative pb-2">
          Join Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#fbb20e]"></span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our world-class facilities and educational offerings
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#fbb20e] hover:border-[#e6a00d] group"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-[#fbb20e] mr-3">{item.number}</span>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#fbb20e] transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="text-gray-600 leading-relaxed">
                {typeof item.content === 'string' ? item.content : item.content}
              </div>
              <div className="mt-4">
                <button className="text-[#fbb20e] font-medium hover:text-[#e6a00d] transition-colors flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-[#fbb20e] hover:bg-[#e6a00d] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all">
            Application Form 
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;