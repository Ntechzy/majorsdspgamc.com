import React from "react";
import PageBanner from "../../../components/shared/PageBanner";
import PdfViewer from "../../../components/shared/PdfViewer";

const HospitalNonTeachingStaffAttendance = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Hospital Non Teaching Staff Attendance" />
      </div>
      <PdfViewer
        title="HOSPITAL STAFF ATTENDANCE (JANUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Hospital%20Staff%20Attendance%20January%202025.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="HOSPITAL STAFF ATTENDANCE (FEBRUARY 2025)"
        src={
          "https://majorsdspgamc.com/pages/assets/images/Hospital%20Staff%20Attendance%20February%202025.pdf"
        }
        height="500px"
      />
    </>
  );
};

export default HospitalNonTeachingStaffAttendance;
