import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import PdfViewer from "../../components/shared/PdfViewer";
import NewsletterSection from "../../components/shared/NewsletterSection";

const StudentDetails = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Student Details" />
      </div>
      <PdfViewer
        title="MD/MS STUDENT BATCH 2024"
        src={
          "https://majorsdspgamc.com/pages/assets/images/MD-MS%20Batch%202024%20List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="MD/MS STUDENT BATCH 2023"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-List-of-Post-Graduate-Students-Batch-2023.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="MD/MS STUDENT BATCH 2022"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-MS-Batch-2022-Students-List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="MD/MS STUDENT BATCH 2021"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-LIST-OF-MD-MS-BATCH-2021.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2024"
        src={
          "https://majorsdspgamc.com/pages/assets/images/BAMS%20Batch%202024%20List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2023"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2023-Students-List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2022"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2022-Students-List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2021"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2021-Students-List.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2020"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-List-of-BAMS-batch-2020.pdf"
        }
        height="500px"
      />
      <PdfViewer
        title="BAMS STUDENT BATCH 2019"
        src={
          "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2019-Students-List.pdf"
        }
        height="500px"
      />
      <NewsletterSection />
    </>
  );
};

export default StudentDetails;
