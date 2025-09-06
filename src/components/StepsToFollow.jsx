import React from "react";

const steps = [
  {
    title: "Register Yourself",
    img: "https://static.vecteezy.com/system/resources/thumbnails/016/716/631/small_2x/flat-isometric-3d-illustration-concept-of-creating-personal-data-for-registration-free-vector.jpg",
    position: "right",
    description: "Create your account with basic information to get started."
  },
  {
    title: "Fill Academic Details",
    img: "https://www.shutterstock.com/image-vector/student-passing-online-test-apply-600nw-2454704867.jpg",
    position: "left",
    description: "Provide your educational background and qualifications."
  },
  {
    title: "Submit Application",
    img: "https://static.vecteezy.com/system/resources/previews/006/652/478/non_2x/submit-loan-application-document-form-flat-style-design-icon-sign-illustration-isolated-on-white-background-complete-application-or-survey-document-business-concept-with-text-vector.jpg",
    position: "right",
    description: "Review and submit your completed application for processing."
  },
];

const StepsToFollow = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0a7c8a] mb-4">
          Steps To Follow
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Follow these simple steps to complete your application process quickly and efficiently.
        </p>

        <div className="relative">
          {/* Vertical Timeline */}
        
          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  step.position === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container */}
                <div className="w-full md:w-2/5 flex justify-center mb-6 md:mb-0">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#0aadc4] to-[#0a7c8a] rounded-2xl opacity-20 blur"></div>
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="relative w-56 h-56 object-contain rounded-lg z-10 transform transition-all duration-300 hover:scale-105" 
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:w-3/5 flex">
                  <div className={`flex items-center w-full ${step.position === "left" ? "flex-row-reverse" : ""}`}>
                    {/* Connector Dot */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-[#0aadc4] shadow-lg z-10">
                      <span className="text-[#0a7c8a] font-bold">{index + 1}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ml-4 mr-4 md:mx-6 flex-1 ${
                      step.position === "left" ? "md:text-right" : "md:text-left"
                    }`}>
                      <h3 className="text-xl font-bold text-[#0a7c8a] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center text-sm font-medium text-[#0aadc4]">
                        <span>Step {index + 1}</span>
                        <svg className={`w-4 h-4 ml-2 ${step.position === "left" ? "md:order-first md:mr-2 md:ml-0 rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsToFollow;
