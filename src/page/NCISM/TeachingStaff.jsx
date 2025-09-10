import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";

const TeachingStaff = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Teaching Staff" />
      </div>
      <PdfViewer
        title="Teaching Staff"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Teaching%20Staff%20List.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default TeachingStaff;
