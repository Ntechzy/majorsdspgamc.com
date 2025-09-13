import React, { useState } from "react";
import PageBanner from "../../components/shared/PageBanner";

const courses = [
  {
    title: "Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)",
feeDetails: {
  admission: "As per NCISM*",
  tuition: "₹2,59,200 per year",
  hostel: "₹1,00,000 per year",
  caution: "₹40,800 (Refundable)",
  lab: "As per NCISM*",
  seats: "100",
  duration: "4.5 Yrs",
  transport: "As per NCISM*",
},

  },
  {
    title: "Prasuti Tantra Avum Stri Rog",
    feeDetails: {
      admission: "as Depend on NCISM*",
      tuition: "₹ 5,10,900/year",
      lab: "as Depend on NCISM*",
      seats: "6",
      duration: "3 Yrs",
      transport: "as Depend on NCISM*",
    },
  },
  {
    title: "Shalya Tantra",
    feeDetails: {
      admission: "as Depend on NCISM*",
      tuition: "₹ 5,10,900/year",
      lab: "as Depend on NCISM*",
      seats: "6",
      duration: "3 Yrs",
      transport: "as Depend on NCISM*",
    },
  },
  {
    title: "Ayurvedic Nursing",
    feeDetails: {
      admission: "as Depend on NCISM*",
      tuition: "₹ 30,000/year",
      lab: "as Depend on NCISM*",
      seats: "50",
      duration: "3 Yrs",
      transport: "as Depend on NCISM*",
    },
  },
  {
    title: "Ayurvedic Pharmacist",
    feeDetails: {
      admission: "as Depend on NCISM*",
      tuition: "₹ 30,000/year",
      lab: "as Depend on NCISM*",
      seats: "50",
      duration: "2 Yrs",
      transport: "as Depend on NCISM*",
    },
  },
];

const parseFee = (fee) => {
  if (!fee.includes("₹")) return null;
  const num = fee.replace(/[₹,\/year ]/g, "");
  return parseInt(num) || null;
};

const parseDuration = (duration) => {
  const num = parseFloat(duration);
  return isNaN(num) ? null : num;
};

const CoursesAndFees = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageBanner title="Course Structure & Fee" path={["Course Structure & Fee"]} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-extrabold text-center text-[#0aadc4] mb-12">
          Tuition & Fee Structure
        </h2>

        <div className="rounded-2xl shadow-md overflow-hidden border border-gray-200 bg-white">
          {courses.map((course, index) => {
            const tuition = parseFee(course.feeDetails.tuition);
            const duration = parseDuration(course.feeDetails.duration);
            const total =
              tuition && duration
                ? `₹ ${(tuition * duration).toLocaleString("en-IN")}`
                : "as Depend on NCISM*";

            return (
              <div key={index} className="border-b last:border-none">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#0aadc4] text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {course.title}
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Accordion Content */}
                {openIndex === index && (
                  <div className="p-6 bg-gray-50 animate-fadeIn">
                    <table className="w-full text-sm border rounded-lg overflow-hidden shadow-sm">
                     <tbody>
  {[
    ["Admission Fee", course.feeDetails.admission],
    ["Tuition Fees", course.feeDetails.tuition],
    ["Hostel Fee", course.feeDetails.hostel],   // ✅ Added
    ["Lab Fee", course.feeDetails.lab],
    ["Available Seats", course.feeDetails.seats],
    ["Duration", course.feeDetails.duration],
    ["Transport Fee", course.feeDetails.transport],
  ].map(([label, value], i) => (
    <tr
      key={i}
      className={`${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
    >
      <td className="py-3 px-4 font-medium text-gray-600">{label}</td>
      <td className="py-3 px-4 text-right text-gray-700">{value}</td>
    </tr>
  ))}
  <tr className="bg-[#ebf8fa]">
    <td className="py-3 px-4 font-bold text-[#0aadc4]">Total Fees</td>
    <td className="py-3 px-4 text-right font-bold text-[#0aadc4]">
      {total}
    </td>
  </tr>
</tbody>

                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CoursesAndFees;
