import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md';

const HeaderTop = () => {
  return (
    <div className="w-full flex text-white text-sm">
      {/* Left section */}
      <div className="bg-[#f8a713] px-6 py-2 flex items-center space-x-3 w-[40%]">
        <span className="font-semibold">Follow Us:</span>
        <div className="flex items-center space-x-2">
          <a href="#" className="bg-[#0f6b5b] p-1.5 rounded-full"><FaFacebookF /></a>
          <a href="#" className="bg-[#0f6b5b] p-1.5 rounded-full"><FaInstagram /></a>
          <a href="#" className="bg-[#0f6b5b] p-1.5 rounded-full"><FaWhatsapp /></a>
          <a href="#" className="bg-[#0f6b5b] p-1.5 rounded-full"><FaYoutube /></a>
        </div>
      </div>

      {/* Right section */}
      <div className="bg-[#0f6b5b] flex-1 px-6 py-2 flex flex-wrap items-center justify-end space-x-6">
        <div className="flex items-center space-x-1">
          <MdLocationOn className="text-[#f8a713]" />
          <span>BEWAR ROAD, FATEHGARH - FARRUKHABAD (U.P.) 209601</span>
        </div>
        <div className="flex items-center space-x-1">
          <MdEmail className="text-[#f8a713]" />
          <a href="mailto:majorsdsinghayd@gmail.com" className="hover:underline">majorsdsinghayd@gmail.com</a>
        </div>
        <div className="flex items-center space-x-1">
          <MdCall className="text-[#f8a713]" />
          <a href="tel:+917300864280" className="hover:underline">+91 7300864280</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
