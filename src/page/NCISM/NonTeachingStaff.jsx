import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";

const NonTeachingStaff = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Non Teaching Staff" />
      </div>
      <PdfViewer
        title="COLLEGE NON-TEACHING STAFF LIST"
        src={
          "https://majorsdspgamc.com/pages/assets/images/College%20Non%20Teaching%20Staff.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="Hospital Staff List"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Hospital%20Staff%20List.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default NonTeachingStaff;
