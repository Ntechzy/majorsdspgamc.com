import React from "react";
import PageBanner from "../../../components/shared/PageBanner";
import PdfViewer from "../../../components/shared/PdfViewer";

const BAMSStudentsAttendance = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="BAMS Students Attendance" />
      </div>
      <PdfViewer
        title="BAMS STUDENT BATCH 2021"
        src={
          "https://majorsdspgamc.com/pages/assets/images/BATCH%202021%20ATTENDANCE.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2022"
        src={
          "https://majorsdspgamc.com/pages/assets/images/BATCH%202022%20ATTENDANCE.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2023"
        src={
          "https://majorsdspgamc.com/pages/assets/images/BATCH%202023%20ATTENDANCE.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default BAMSStudentsAttendance;
