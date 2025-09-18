import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";
import NewsletterSection from "../../components/shared/NewsletterSection";

const ResearchPublication = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Research Publications" />
      </div>
      <PdfViewer
        title="RESEARCH PUBLICATION"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Research%20and%20Publications.pdf"
        }
        height="500px"
      />
      <NewsletterSection />
    </>
  );
};

export default ResearchPublication;
