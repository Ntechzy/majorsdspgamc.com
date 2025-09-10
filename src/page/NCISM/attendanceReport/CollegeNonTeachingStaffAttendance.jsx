import React from "react";
import PdfViewer from "../../../components/shared/PdfViewer";
import PageBanner from "../../../components/shared/PageBanner";

const CollegeNonTeachingStaffAttendance = () => {
  return (
    <>
      <div className="mb-10"><PageBanner title="College Non Teaching Staff Attendance" /></div>
      <PdfViewer
        title="COLLEGE NON-TEACHING STAFF ATTENDANCE (JANUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/College%20Non%20Teaching%20Staff%20Attendance%20January%202025.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="COLLEGE NON-TEACHING STAFF ATTENDANCE (FEBRUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/College%20Non%20Teaching%20Staff%20Attendance%20February%202025.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default CollegeNonTeachingStaffAttendance;
