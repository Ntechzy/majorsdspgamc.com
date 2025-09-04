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

const App = () => {
  return (
    <BrowserRouter>
    <HeaderTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/principal-medical-superintendent" element={<PrincipleMedical />} />

        {/* About Pages */}
        <Route path="/about/about-college" element={<AboutCollege />} />
        <Route path="/about/vision&mission" element={<VisionMission />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/director-message" element={<DirectorMessage />} />
        <Route path="/about/principal-message" element={<PrincipalMessage />} />
        <Route path="/about/approvalaffiliation" element={<ApprovalAffiliation />} />

        {/* Facility Pages */}
        <Route path="/facility/hospital-facility" element={<HospitalFacility />} />
     

        {/* Media Pages */}
        <Route path="/media/image-gallery" element={<ImageGallery />} />

        {/* Hospital Clinical Data */}
        <Route path="/hospital-data/hospital-opd-ipd-data" element={<HospitalData />} />
        <Route path="/hospital-data/otherhospitaldata" element={<OtherHospitalData />} />

        {/* Contact Pages */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ApplyNow/>
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
