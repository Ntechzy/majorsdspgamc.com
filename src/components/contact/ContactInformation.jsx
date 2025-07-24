import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInformation = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e]">
        Contact Information
      </h2>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-[#fbb20e]/10 p-3 rounded-full">
            <Phone className="w-6 h-6 text-[#fbb20e]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
            <a href="tel:+917311125822" className="text-gray-600 hover:text-[#fbb20e] transition-colors">
              +91 7311125822
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-[#fbb20e]/10 p-3 rounded-full">
            <Mail className="w-6 h-6 text-[#fbb20e]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Mail Us</h3>
            <a href="mailto:majorsdsinghay@gmail.com" className="text-gray-600 hover:text-[#fbb20e] transition-colors">
              majorsdsinghay@gmail.com
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-[#fbb20e]/10 p-3 rounded-full">
            <Clock className="w-6 h-6 text-[#fbb20e]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
            <p className="text-gray-600">Mon - Sat: 09.00am to 06.00pm</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-[#fbb20e]/10 p-3 rounded-full">
            <MapPin className="w-6 h-6 text-[#fbb20e]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600">
              MAJOR S.D. SINGH P.G. AYURVEDIC MEDICAL COLLEGE & HOSPITAL<br />
              BEWAR ROAD, FATEHGARH - FARRUKHABAD (U.P.) 208901
            </p>
          </div>
        </div>
      </div>

      {/* Small Message */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Small Message</h3>
        <p className="text-gray-600 italic">
          We're here to help you with any questions about our programs, admissions, or facilities.
          Don't hesitate to reach out to us through any of these channels.
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
