import React from "react";
import PageBanner from "../../components/shared/PageBanner";

const Brochure = () => {
  return (
    <>
      <PageBanner title="Download Brochure" path={["Brochure"]} />

      <div className="w-full bg-gradient-to-b from-white to-[#f9fafb] py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2c4c] mb-6">
          Fill the Form to Access Our Brochure
        </h2>
        <p className="text-[#4b5563] max-w-2xl mx-auto mb-10">
          Kindly complete the form below to download our latest brochure
          containing detailed information about our courses, facilities, and
          admission process.
        </p>

        {/* Replace this with your actual form link */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScf8R82NdMK3T2VfltvgnZLKw_jv9f8dkLDpEaXttLn4VV8Tg/viewform"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="rounded-xl shadow-lg"
          title="Brochure Form"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Brochure;
