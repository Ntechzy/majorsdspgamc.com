import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import WhatsAppButton from "./components/Whatsapp";
import AboutCollege from "./page/about/AboutCollege";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* About Pages */}
        <Route path="/about/about-college" element={<AboutCollege/>}/>

      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
