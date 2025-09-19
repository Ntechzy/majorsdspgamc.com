import React from "react";
import PageBanner from "../../../components/shared/PageBanner";
import PdfViewer from "../../../components/shared/PdfViewer";

const TeachingStaffAttendance = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Teaching Staff Attendance" />
      </div>
      <PdfViewer
        title="TEACHING STAFF ATTENDANCE (JANUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Teaching%20Staff%20Attendance%20January%202025.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="TEACHING STAFF ATTENDANCE (FEBRUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Teaching%20Staff%20Attendance%20February%202025.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default TeachingStaffAttendance;
