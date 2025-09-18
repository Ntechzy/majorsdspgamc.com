import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";
import NewsletterSection from "../../components/shared/NewsletterSection";

const ClinicalMaterialinHospital = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Clinical Material in Hospital" />
      </div>
      <PdfViewer
        title="CLINICAL MATERIAL AVAILABLE IN HOSPITAL"
        src={
          "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Clinical-Material.pdf"
        }
        height="500px"
      />
      <NewsletterSection />
    </>
  );
};

export default ClinicalMaterialinHospital;
