import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import WhatsAppButton from "./components/Whatsapp";
import AboutCollege from "./page/about/AboutCollege";
import VisionMission from "./page/about/VisionMission";
import ChairmanMessage from "./page/about/ChairmanMessage";
import DirectorMessage from "./page/about/DirectorMessage";
import ApprovalAffiliation from "./page/about/ApprovalAffiliation";
import Contact from "./page/Contact";
import HospitalData from "./page/hospital/HospitalData";
import OtherHospitalData from "./page/hospital/OtherHospitalData";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Pages */}
        <Route path="/about/about-college" element={<AboutCollege />} />
        <Route path="/about/vision&mission" element={<VisionMission />} />
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/director-message" element={<DirectorMessage />} />
        <Route path="/about/approvalaffiliation" element={<ApprovalAffiliation />} />
        

         {/* Hospital Clinical Data */}
       <Route path="/hospital-data/hospital-opd-ipd-data" element={<HospitalData />} />
         <Route path="/hospital-data/otherhospitaldata" element={<OtherHospitalData />} />

        {/* Contact Pages */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
