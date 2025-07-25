import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import WhatsAppButton from "./components/Whatsapp";
import PrincipleMedical from "./page/NCISM/PrincipleMedical";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/principal-medical-superintendent" element={<PrincipleMedical />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
