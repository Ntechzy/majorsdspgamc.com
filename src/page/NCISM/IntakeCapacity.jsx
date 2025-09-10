import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import Table from "../../components/shared/Table";
import NewsletterSection from "../../components/shared/NewsletterSection";

const IntakeCapacity = () => {
  return (
    <>
      <div className="mb-10">
        <PageBanner title="Intake Capacity" />
      </div>
      <Table
        title="NO. OF SEATS AVAILABLE AS PER THE FOLLOWING COURSES - 2022"
        columns={[
          { label: "No.", key: "no" },
          { label: "Course Name", key: "coursename" },
          { label: "Total No. of Seats", key: "totalseats" },
        ]}
        data={[
          {
            no: "1",
            coursename: "Bachelor of Ayurvedic Medicine and Surgery(B.A.M.S.)",
            totalseats: "100",
          },
          {
            no: "2",
            coursename: "MASTER OF SURGERY (M.S.) (Ayurved)	",
            totalseats: "12",
          },
          {
            no: "3",
            coursename: "Ayurvedic Nursing	",
            totalseats: "50",
          },
          {
            no: "4",
            coursename: "Ayurvedic Pharmacist	",
            totalseats: "50",
          },
        ]}
      />
      <NewsletterSection />
    </>
  );
};

export default IntakeCapacity;
