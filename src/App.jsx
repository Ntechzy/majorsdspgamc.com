import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";
import HeaderTop from "./components/HeaderTop";
import ComingSoon from "./components/ComingSoon";
import ApplyNow from "./components/shared/ApplyNow";

// Pages
import Home from "./page/Home";
import PrincipleMedical from "./page/NCISM/PrincipleMedical";
import AboutCollege from "./page/about/AboutCollege";
import VisionMission from "./page/about/VisionMission";
import ChairmanMessage from "./page/about/ChairmanMessage";
import DirectorMessage from "./page/about/DirectorMessage";
import ApprovalAffiliation from "./page/about/ApprovalAffiliation";
import PrincipalMessage from "./page/about/PrincipalMessage";
import AwardsAchievements from "./page/about/AwardsAchievements";
import Contact from "./page/Contact";

// Hospital
import HospitalData from "./page/hospital/HospitalData";
import OtherHospitalData from "./page/hospital/OtherHospitalData";

// Facilities
import CollegeFacilities from "./page/facilities/CollegeFacilities";
import Gym from "./page/facilities/Gym";
import HospitalFacility from "./page/facilities/HospitalFacility";
import Hostel from "./page/facilities/Hostel";

// Student
import CoursesAndFees from "./page/student/CoursesAndFees";
import AdmissionEnquiry from "./page/student/AdmissionEnquiry";
import StudentList from "./page/student/StudentList";
import Brochure from "./page/student/E-Brochure";
import Result from "./page/student/Result";

// Media
import ImageGallery from "./page/media/ImageGallery";
import VideoGallery from "./page/media/VideoGallery";

// Admin
import AdminDashboard from "./page/admin/AdminDashboard";
import AdminLogin from "./page/admin/AdminLogin";
import AdminSignup from "./page/admin/AdminSignup";

// NCISM
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
        {/* Home */}
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
        <Route path="/about/approvalaffiliation" element={<ApprovalAffiliation />} />
        <Route path="/about/awards-achievements" element={<AwardsAchievements />} />

        {/* Facility Pages */}
        <Route path="/facility/hospital-facility" element={<HospitalFacility />} />
        <Route path="/facility/college-facility" element={<CollegeFacilities />} />
        <Route path="/facility/hostel" element={<Hostel />} />
        <Route path="/facility/gym" element={<Gym />} />

        {/* Student Pages */}
        <Route path="/student/course-structure-fee" element={<CoursesAndFees />} />
        <Route path="/student/admission-enquiry" element={<AdmissionEnquiry />} />
        <Route path="/student/student-list" element={<StudentList />} />
        <Route path="/student/e-brochure" element={<Brochure />} />
        <Route path="/student/result" element={<Result />} />

        {/* Media Pages */}
        <Route path="/media/image-gallery" element={<ImageGallery />} />
        <Route path="/media/video-gallery" element={<VideoGallery />} />

        {/* Hospital Clinical Data */}
        <Route path="/hospital-data/hospital-opd-ipd-data" element={<HospitalData />} />
        <Route path="/hospital-data/otherhospitaldata" element={<OtherHospitalData />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Coming Soon */}
        <Route path="/pages/IQAC" element={<ComingSoon />} />
        <Route path="/pages/e-library" element={<ComingSoon />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/signup" element={<AdminSignup />} />

        {/* NCISM Pages */}
        <Route path="/pages/TeachingStaff" element={<TeachingStaff />} />
        <Route path="/pages/IntakeCapacity" element={<IntakeCapacity />} />
        <Route path="/pages/NonTeachingStaff" element={<NonTeachingStaff />} />
        <Route path="/pages/StudentDetails" element={<StudentDetails />} />
        <Route path="/pages/ResearchPublication" element={<ResearchPublication />} />
        <Route path="/pages/ConferencesandAcademicActivities" element={<ConferencesandAcademicActivities />} />
        <Route path="/pages/BAMSStudentsAttendance" element={<BAMSStudentsAttendance />} />
        <Route path="/pages/HospitalNonTeachingStaffAttendance" element={<HospitalNonTeachingStaffAttendance />} />
        <Route path="/pages/CollegeNonTeachingStaffAttendance" element={<CollegeNonTeachingStaffAttendance />} />
        <Route path="/pages/TeachingStaffAttendance" element={<TeachingStaffAttendance />} />
        <Route path="/pages/Affiliation" element={<Affiliation />} />
        <Route path="/pages/ClinicalMaterialinHospital" element={<ClinicalMaterialinHospital />} />
        <Route path="/pages/HospitalOPD_IPD_Data" element={<HospitalOPD_IPD_Data />} />
      </Routes>

      <Footer />
      <ApplyNow />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
