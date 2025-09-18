import React from "react";
import PageBanner from "../../components/shared/PageBanner";
import { motion } from "framer-motion";
import Table from "../../components/shared/Table";

const cardsData = [
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-international-seminar.webp",
    title: "Ist International Seminar 2023",
    description:
      "Recently, the Major SD Singh PG Ayurvedic Medical College & Hospital organized the Ist International Seminar on the topic of “International Seminar on Ayurvedic Approach to Lifestyle Diseases” to boost the confidence of its splendent students.",
  },
  {
    image:
      "	https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar2.webp",
    title: "8th National Seminar 2023",
    description:
      "Congratulations to the Ras Shastra Department of Major S.D. Singh P.G. Ayurvedic Medical College Farrukhabad for successfully conducting the National Seminar titled “रसोद्भव” on 25-03-2023. Your efforts to promote Ayurveda and traditional Indian medicine are truly inspiring! #Ayurveda #IndianMedicine #NationalSeminar #rasshastra",
  },
  {
    image:
      "	https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar3.webp",
    title: "#AshvamedhaFest2022",
    description:
      "Recently, the Major SD Singh PG Ayurvedic Medical College & Hospital organized the #AshvamedhaFest2022 to boost the confidence of its splendent students. Moreover, the students showcased their dancing, singing, and other skills and talents.",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar4.webp",
    title: "7th National Seminar 2022",
    description:
      "Under the aegis of #JAPPS_FOUNDATION, The Department of Dravyaguna & Agadtantra conducted a 7th National Seminar on 06th August 2022 on the topic “Applied Aspect Of Herbal Drugs & Toxic Drugs (Vish Aushadhi) in Contemporary Medicine”.",
  },
  {
    image:
      "	https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar5.webp",
    title: "Guest Lecture 17 May 2022",
    description:
      "On the occasion of World Hypertension Day 2022, the Department of Kaya Chikitsa of Major SD Singh PG Ayurvedic Medical College and Hospital conducted a Guest Lecture on “Measure Your Blood Pressure Accurately Control it, Live Longer”. Dr. K.M. Dwivedi, MBBS, MD(Med.), was the guest speaker. It was indeed a great opportunity for students of Major SD Singh PG Ayurvedic Medical College to hear and share views with such an amazing personality. Students had a great time interacting and learning from him. Have a glimpse of the session.",
  },
  {
    image: "https://i.ytimg.com/vi/eNvhHLCfOuw/sddefault.jpg",
    title: "National Seminar RNVV 2022",
    description:
      "Under the aegis of #JAPPS_FOUNDATION, The Department of RogNidan conducted a 6th National Seminar on 13th May 2022 on the topic ‘ Importance of RogNidan in the current scenario.’",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar6.webp",
    title: "Swasthya Webinar",
    description: "Swasthya Webinar on Enema Process",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar7.webp",
    title: "Awareness Program",
    description:
      "On May 8, Shri Rakshit Tandon ji from Cyber ​​Crime Advisor UP Police arrived in Major SD Singh PG Ayurvedic Medical College, and made the students aware.",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar8.webp",
    title: "Transitional Curriculum “Induction Program”",
    description:
      "Transitional Curriculum “Induction Program” 2021 was organized at Major SD Singh PG Ayurvedic College and Hospital. The purpose of the Transitional Curriculum “Induction Program” is to help new students adjust and feel comfortable in the new environment, inculcate in them the ethos and culture of the institution, help them build bonds with other students and faculty members, and expose them to a sense of larger purpose and self-exploration.",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar9.webp",
    title: "Guest Lecture 03 March 2022",
    description:
      "A Guest lecture on “To Hear for Life, Listen with Care” and a paper presentation competition was organized by the Department of Shalakya tantra at Major S.D. Singh P.G. Ayurvedic Medical College & Hospital Farrukhabad. The Guest lecture was conducted under the guidance of Dr. Mohanan M (Principal), Dr. Jolly Saxena (Vice Principal), Dr. Gopala Krishna Rao Gutti (Prof. & H.O.D.), Dr. Bikash Vrat Mishra (Asst. Prof.), Dr. Snehapriya P R (Asst. Prof.). This lecture was hosted by Dr. Itishree Das (Asst. Prof.). The Guest speaker of the event was Dr. Rajat Goel (MBBS, MS)",
  },
  {
    image:
      "https://majorsdspgamc.com/pages/assets/images/ncism/majorsdspgamc-Seminar10.webp",
    title: "Guest Lecture on Inclusion in the Workspace",
    description:
      "The Department of Kaumarbhritya of Major S.D. Singh P.G. Ayurvedic Medical College & Hospital Farrukhabad has conducted an Online Guest Lecture on the topic of “Inclusion in the workspace” on the occasion of World Autism Awareness Day.",
  },
  {
    image: "https://i.ytimg.com/vi/zTAjcQkrzRA/sddefault.jpg",
    title: "Live Webinar 2022",
    description:
      "MAJOR S.D. SINGH P.G. AYURVEDIC MEDICAL COLLEGE & HOSPITAL invites you to attend a Webinar on PRACTICAL APPROACH OF GARBHINI PARICHARYA",
  },
];

const ConferencesandAcademicActivities = ({
  title = "Some Activities",
  cards = [],
}) => {
  return (
    <>
      <PageBanner title="Conferences and Academic Activities" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          {title}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {cardsData.map((cardsdata, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              {cardsdata.image && (
                <img
                  src={cardsdata.image}
                  alt={cardsdata.title}
                  className="w-full h-48 object-cover"
                />
              )}

              {/* Title & Description */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {cardsdata.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex-1">
                  {cardsdata.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Table
          title="EVENTS AND ATTENDANCE - 2022"
          columns={[
            { label: "Sr. No.", key: "srno" },
            { label: "Date", key: "date" },
            { label: "Topic", key: "topic" },
            { label: "Total Attendance", key: "attendance" },
          ]}
          data={[
            {
              srno: "1",
              date: "13-08-2022",
              topic: "Guest Lecture on World Organ Donation Day",
              attendance: "195",
            },
            {
              srno: "2",
              date: "06-08-2022",
              topic:
                "7th National Seminar on the topic 'Applied Aspect Of Herbal Drugs & Toxic Drugs (Vish Aushadhi) in Contemporary Medicine'",
              attendance: "684",
            },
            {
              srno: "3",
              date: "01-08-2022",
              topic: "Guest Lecture & Awareness Class",
              attendance: "164",
            },
            {
              srno: "4",
              date: "28-07-2022",
              topic:
                "Guest Lecture & Elocution Competition on '#WorldHepatitisDay2022'",
              attendance: "287",
            },
            {
              srno: "5",
              date: "11-07-2022",
              topic: "Guest Lecture on 'World Population Day'",
              attendance: "198",
            },
            {
              srno: "6",
              date: "31-05-2022",
              topic: "Guest Lecture on 'Poisoning Our Planet #TobaccoExposed'",
              attendance: "352",
            },
            {
              srno: "7",
              date: "17-05-2022",
              topic:
                "Guest Lecture on Measure Your Blood Pressure Accurately Control it, Live Longer",
              attendance: "603",
            },
            {
              srno: "8",
              date: "13-05-2022",
              topic:
                "NATIONAL SEMINAR ON IMPORTANCE OF ROG NIDAN IN CURRENT SCENARIO",
              attendance: "986",
            },
            {
              srno: "9",
              date: "10-05-2022",
              topic: "SWASTHYA WEBINAR ON ENEMA PROCESS",
              attendance: "698",
            },
            {
              srno: "10",
              date: "09-05-2022",
              topic: "CYBER CRIME WARENESS PROGRAM",
              attendance: "548",
            },
            {
              srno: "11",
              date: "02-05-2022",
              topic: "WEBINAR ON SWASTHYA (ROLE OF PANCHAKARMA)",
              attendance: "577",
            },
            {
              srno: "12",
              date: "11-04-2022",
              topic: "Transitional Curriculum 'Induction Program'",
              attendance: "645",
            },
            {
              srno: "13",
              date: "02-04-2022",
              topic: "Guest Lecture on the topic 'Inclusion in the workspace'",
              attendance: "793",
            },
            {
              srno: "14",
              date: "09-03-2022",
              topic: "WEBINAR ON WORLD KIDNEY DAY",
              attendance: "765",
            },
            {
              srno: "15",
              date: "08-03-2022",
              topic: "Elocution Competition for International Women's Day",
              attendance: "883",
            },
            {
              srno: "16",
              date: "04-03-2022",
              topic: "WEBINAR ON SWASTHYA (IMPORTANCE OF PANCHAKARMA)",
              attendance: "1102",
            },
            {
              srno: "17",
              date: "03-03-2022",
              topic: "GUEST LECTURE ON TO HEAR FOR LIFE, LISTEN WITH CARE",
              attendance: "989",
            },
            {
              srno: "18",
              date: "04-02-2022",
              topic:
                "GUEST LECTURE ON SCOPE OF AYURVEDA IN THE MANAGEMENT OF CANCER",
              attendance: "781",
            },
            {
              srno: "19",
              date: "27-01-2022",
              topic: "Webinar on PRACTICAL APPROACH OF GARBHINI PARICHARYA",
              attendance: "989",
            },
          ]}
        />
      </section>
    </>
  );
};

export default ConferencesandAcademicActivities;
