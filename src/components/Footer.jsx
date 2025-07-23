import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4 text-gray-300">
            Dr. Jitendra Singh and Dr. Anita Ranjan nourished this college by
            all his intellectual, spiritual, and social efforts which results
            that this college is leading educational institute of the country.
          </p>
          <p className="mb-4 text-gray-300">
            College offers B.A.M.S. Course of 4.5 years (100 Seats) and
            M.D./M.S. (Ayurveda) of 3 Years (30 seats).
          </p>
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#14a9e3] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#14a9e3] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#14a9e3] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#14a9e3] transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://ncism.org"
                className="hover:text-[#14a9e3] hover:underline transition-colors"
              >
                NCISM
              </a>
            </li>
            <li>
              <a
                href="https://ayush.gov.in"
                className="hover:text-[#14a9e3] hover:underline transition-colors"
              >
                Ministry of AYUSH
              </a>
            </li>
            <li>
              <a
                href="https://csjmu.ac.in"
                className="hover:text-[#14a9e3] hover:underline transition-colors"
              >
                CSJM University
              </a>
            </li>
            <li>
              <a
                href="https://mgaau.ac.in"
                className="hover:text-[#14a9e3] hover:underline transition-colors"
              >
                MGGAU Gorakhpur
              </a>
            </li>
            <li>
              <a
                href="https://upayushcounselling.upsdc.gov.in"
                className="hover:text-[#14a9e3] hover:underline transition-colors"
              >
                UP AYUSH Counseling
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info + Map */}
        <div>
          <div className="space-y-3 text-gray-300 mb-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <a
                href="tel:+917300864280"
                className="hover:underline text-white"
              >
                +91 7300864280
              </a>
              <a
                href="tel:+918840243743"
                className="hover:underline text-white"
              >
                +91 8840243743
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaWhatsapp className="w-5 h-5 mt-1 flex-shrink-0" />
              <a
                href="https://wa.me/917300864280"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white"
              >
                +91 7300864280
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <a
                href="mailto:majorsdsinghayd@gmail.com"
                className="hover:underline text-white"
              >
                majorsdsinghayd@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <address className="not-italic">
                MAJOR S.D. SINGH P.G. AYURVEDIC MEDICAL COLLEGE & HOSPITAL
                <br />
                BEWAR ROAD, FATEHGARH - FARRUKHABAD (U.P.) 209601
              </address>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded overflow-hidden border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227025.14405720733!2d79.26603239453127!3d27.2421268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3002fa39fef9%3A0x2f4d08d951adeac1!2sMajor%20S.D.%20Singh%20PG%20Ayurvedic%20Medical%20College!5e0!3m2!1sen!2sin!4v1752834665088!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Major SD Singh Ayurvedic College Location"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} MAJOR S.D. SINGH P.G. AYURVEDIC MEDICAL
          COLLEGE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
