import React, { useState } from "react";
import PageBanner from "../../components/shared/PageBanner";

const batches = [
  { title: "MD/MS STUDENT BATCH 2024", pdf: "https://majorsdspgamc.com/pages/assets/images/MD-MS%20Batch%202024%20List.pdf" },
  { title: "MD/MS STUDENT BATCH 2023", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-List-of-Post-Graduate-Students-Batch-2023.pdf" },
  { title: "MD/MS STUDENT BATCH 2022", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-MS-Batch-2022-Students-List.pdf" },
  { title: "MD/MS STUDENT BATCH 2021", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-LIST-OF-MD-MS-BATCH-2021.pdf" },
  { title: "BAMS STUDENT BATCH 2024", pdf: "https://majorsdspgamc.com/pages/assets/images/BAMS%20Batch%202024%20List.pdf" },
  { title: "BAMS STUDENT BATCH 2023", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2023-Students-List.pdf" },
  { title: "BAMS STUDENT BATCH 2022", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2022-Students-List.pdf" },
  { title: "BAMS STUDENT BATCH 2021", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2021-Students-List.pdf" },
  { title: "BAMS STUDENT BATCH 2020", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-List-of-BAMS-batch-2020.pdf" },
  { title: "BAMS STUDENT BATCH 2019", pdf: "https://majorsdspgamc.com/pages/assets/images/student/majorsdspgamc-BAMS-Batch-2019-Students-List.pdf" },
];

const StudentList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageBanner title="Student List" path={["Student List"]} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0aadc4] mb-10">
          Student List
        </h2>

        <div className="border rounded-xl shadow-lg overflow-hidden divide-y divide-gray-200">
          {batches.map((batch, index) => (
            <div key={index} className="bg-white">
              {/* Header */}
              <button
                className={`w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold transition-all duration-300 
                ${
                  openIndex === index
                    ? "bg-[#0aadc4] text-white"
                    : "text-[#0aadc4] hover:bg-[#ebbd29] hover:text-black"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {batch.title}
                <span
                  className={`ml-2 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* PDF Section */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[700px]" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-gray-50">
                  <iframe
                    src={batch.pdf}
                    title={batch.title}
                    className="w-full h-[600px] border-2 border-[#0aadc4] rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentList;
