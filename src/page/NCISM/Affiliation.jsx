import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";
import Table from "../../components/shared/Table";

const Affiliation = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Affilitaion" />
      </div>
      <PdfViewer
        title="AYUSH/NCISM PERMISSION 2025-26"
        src={
          "https://majorsdspgamc.com/documents/Yearly-Permission-AYU0256.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="UNIVERSITY AFFILITATIONS"
        src={
          "https://majorsdspgamc.com/pages/assets/images/BAMS%20Affiliation%202025-26.pdf"
        }
        height="500px"
      />
      <Table
        title={"Affliating University Details Till Batch 2020"}
        columns={[
          { label: "S.No.", key: "no" },
          { label: "Designation", key: "designation" },
          { label: "Phone No.", key: "phoneno" },
          { label: "Email ID", key: "emailid" },
        ]}
        data={[
          {
            no: "1",
            designation: "Dr. Vinay Pathak Vice Chancellor",
            phoneno: "2581280",
            emailid: "vc@kanpuruniversity.org",
          },
          {
            no: "2",
            designation: "Dr. Anil Kumar Yadav Registrar",
            phoneno: "2583280, 2580044",
            emailid: "registrar@kanpuruniversity.org",
          },
        ]}
      />
      <Table
        title={"Affiliating university Details from batch-2021"}
        columns={[
          { label: "S.No.", key: "no" },
          { label: "Designation", key: "designation" },
          { label: "Phone No.", key: "phoneno" },
          { label: "Email ID", key: "emailid" },
        ]}
        data={[
          {
            no: "1",
            designation: "Dr. A.K. Singh Vice Chancellor",
            phoneno: "8810724949",
            emailid: "vc@mggaugkp.ac.in",
          },
          {
            no: "2",
            designation: "Dr. R.B. Singh Registrar",
            phoneno: "8810724948",
            emailid: "-",
          },
        ]}
      />
    </>
  );
};

export default Affiliation;
