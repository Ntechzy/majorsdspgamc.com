import React from "react";
import StepsToFollow from "../../components/StepsToFollow";

const AdmissionEnquiry = () => {
  return (
    <>
      {/* Steps Section */}
      <StepsToFollow />

      {/* Admission Enquiry Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 h-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#ebbd29] mb-10 tracking-wide">
          Admission Enquiry Form
        </h2>

        <div className=" w-full h-[80vh] rounded-2xl shadow-2xl overflow-hidden border-2 border-[#ebbd29] bg-white">
          <iframe
            src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdjATWjn2PZEBmMDbl2xD6q7qRSXQgmN0ue5Rjms3b0Da72Qg/formResponse?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Admission Enquiry Google Form"
          >
            Loading…
          </iframe>

          {/* Decorative Gradient Overlay */}
          
        </div>
      </div>
    </>
  );
};

export default AdmissionEnquiry;
