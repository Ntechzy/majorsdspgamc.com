import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import WhatsAppButton from "./components/Whatsapp";
import PrincipleMedical from "./page/NCISM/PrincipleMedical";
import AboutCollege from "./page/about/AboutCollege";
import VisionMission from "./page/about/VisionMission";
import ChairmanMessage from "./page/about/ChairmanMessage";
import DirectorMessage from "./page/about/DirectorMessage";
import ApprovalAffiliation from "./page/about/ApprovalAffiliation";
import Contact from "./page/Contact";
import HospitalData from "./page/hospital/HospitalData";
import OtherHospitalData from "./page/hospital/OtherHospitalData";
import ImageGallery from "./page/media/ImageGallery";
import CollegeFacilities from "./page/facilities/CollegeFacilities";
import Gym from "./page/facilities/Gym";
import HospitalFacility from "./page/facilities/HospitalFacility";
import HeaderTop from "./components/HeaderTop";
import ApplyNow from "./components/shared/ApplyNow";
import PrincipalMessage from "./page/about/PrincipalMessage";
import AwardsAchievements from "./page/about/AwardsAchievements";
import VideoGallery from "./page/media/VideoGallery";
import Hostel from "./page/facilities/Hostel";
import CoursesAndFees from "./page/student/CoursesAndFees";
import AdmissionEnquiry from "./page/student/AdmissionEnquiry";
import StudentList from "./page/student/StudentList";
import Brochure from "./page/student/E-Brochure";
import Result from "./page/student/Result";
import ComingSoon from "./components/ComingSoon";
import TeachingStaff from "./page/NCISM/TeachingStaff";
import IntakeCapacity from "./page/NCISM/IntakeCapacity";
import NonTeachingStaff from "./page/NCISM/NonTeachingStaff";
import StudentDetails from "./page/NCISM/StudentDetails";
import ResearchPublication from "./page/NCISM/ResearchPublication";
import ConferencesandAcademicActivities from "./page/NCISM/ConferencesandAcademicActivities";
import BAMSStudentsAttendance from "./page/NCISM/attendanceReport/BAMSStudentsAttendance";
import Affiliation from "./page/NCISM/Affiliation";
import ClinicalMaterialinHospital from "./page/NCISM/ClinicalMaterialinHospital";
import HospitalOPD_IPD_Data from "./page/NCISM/HospitalOPD_IPD_Data";
import HospitalNonTeachingStaffAttendance from "./page/NCISM/attendanceReport/HospitalNonTeachingStaffAttendance";
import CollegeNonTeachingStaffAttendance from "./page/NCISM/attendanceReport/CollegeNonTeachingStaffAttendance";
import TeachingStaffAttendance from "./page/NCISM/attendanceReport/TeachingStaffAttendance";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/page/principal-medical-superintendent"
          element={<PrincipleMedical />}
        />

        {/* About Pages */}
        <Route path="/about/about-college" element={<AboutCollege />} />
        <Route path="/about/vision&mission" element={<VisionMission />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/director-message" element={<DirectorMessage />} />
        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route
          path="/about/approvalaffiliation"
          element={<ApprovalAffiliation />}
        />
        <Route
          path="/about/awards-achievements"
          element={<AwardsAchievements />}
        />

        {/* Facility Pages */}
        <Route
          path="/facility/hospital-facility"
          element={<HospitalFacility />}
        />
        <Route
          path="/facility/college-facility"
          element={<CollegeFacilities />}
        />
        <Route path="/facility/hostel" element={<Hostel />} />
        <Route path="/facility/gym" element={<Gym />} />

        {/* Student Pages */}
        <Route
          path="/student/course-structure-fee"
          element={<CoursesAndFees />}
        />
        <Route
          path="/student/admission-enquiry"
          element={<AdmissionEnquiry />}
        />
        <Route path="/student/student-list" element={<StudentList />} />
        <Route path="/student/E-Brochure" element={<Brochure />} />
        <Route path="/student/result" element={<Result />} />

        {/* Media Pages */}
        <Route path="/media/image-gallery" element={<ImageGallery />} />
        <Route path="/media/video-gallery" element={<VideoGallery />} />

        {/* Hospital Clinical Data */}
        <Route
          path="/hospital-data/hospital-opd-ipd-data"
          element={<HospitalData />}
        />
        <Route
          path="/hospital-data/otherhospitaldata"
          element={<OtherHospitalData />}
        />

        {/* Contact Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages/IQAC" element={<ComingSoon />} />
        <Route path="/pages/e-library" element={<ComingSoon />} />

        {/* NCISM Pages */}
        <Route path="/pages/TeachingStaff" element={<TeachingStaff />} />
        <Route path="/pages/IntakeCapacity" element={<IntakeCapacity />} />
        <Route path="/pages/NonTeachingStaff" element={<NonTeachingStaff />} />
        <Route path="/pages/StudentDetails" element={<StudentDetails />} />
        <Route
          path="/pages/ResearchPublication"
          element={<ResearchPublication />}
        />
        <Route
          path="/pages/ConferencesandAcademicActivities"
          element={<ConferencesandAcademicActivities />}
        />
        <Route
          path="/pages/BAMSStudentsAttendance"
          element={<BAMSStudentsAttendance />}
        />
        <Route
          path="/pages/HospitalNonTeachingStaffAttendance"
          element={<HospitalNonTeachingStaffAttendance />}
        />
        <Route
          path="/pages/CollegeNonTeachingStaffAttendance"
          element={<CollegeNonTeachingStaffAttendance />}
        />
        <Route
          path="/pages/TeachingStaffAttendance"
          element={<TeachingStaffAttendance />}
        />
        <Route path="/pages/Affiliation" element={<Affiliation />} />
        <Route
          path="/pages/ClinicalMaterialinHospital"
          element={<ClinicalMaterialinHospital />}
        />
        <Route
          path="/pages/HospitalOPD_IPD_Data"
          element={<HospitalOPD_IPD_Data />}
        />
      </Routes>
      <Footer />
      <ApplyNow />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
