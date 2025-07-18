import React, { useState } from "react";
import { ChevronDown, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

// Menu structure with submenu items
const menuItems = [
  {
    name: "Home",
    path: "/",
    hasDropdown: true,
    submenu: [
      { name: "Overview", path: "/overview" },
      { name: "Campus Tour", path: "/campus-tour" },
      { name: "Leadership", path: "/leadership" },
    ],
  },
  {
    name: "Courses",
    path: "/courses",
    hasDropdown: true,
    submenu: [
      { name: "BAMS", path: "/courses/bams" },
      { name: "MD Ayurveda", path: "/courses/md" },
      { name: "Diploma", path: "/courses/diploma" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    hasDropdown: true,
    submenu: [
      { name: "Academic Calendar", path: "/academics/calendar" },
      { name: "Syllabus", path: "/academics/syllabus" },
      { name: "Examinations", path: "/academics/exams" },
    ],
  },
  {
    name: "Pages",
    path: "/pages",
    hasDropdown: true,
    submenu: [
      { name: "About Us", path: "/pages/about" },
      { name: "Gallery", path: "/pages/gallery" },
      { name: "Events", path: "/pages/events" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
    hasDropdown: true,
    submenu: [
      { name: "Apply Now", path: "/admissions/apply" },
      { name: "Eligibility", path: "/admissions/eligibility" },
      { name: "Fee Structure", path: "/admissions/fees" },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
    hasDropdown: true,
    submenu: [
      { name: "Latest News", path: "/blog/news" },
      { name: "Articles", path: "/blog/articles" },
      { name: "Events", path: "/blog/events" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    hasDropdown: false,
  },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          <img src="/logo-heading.png" alt="Heading" className="h-12 w-auto ml-2" />
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center space-x-8 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                to={item.path}
                className={`text-md font-semibold ${
                  item.name === "Home" ? "text-[#00715D]" : "text-black"
                } hover:text-[#00715D] flex items-center gap-1`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </Link>

              {/* Submenu */}
              {item.hasDropdown && openIndex === index && (
                <ul className="absolute top-10 left-0 min-w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                      <Link to={sub.path} className="text-sm text-gray-800">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center space-x-5">
          <Link
            to="/apply"
            className="bg-[#f8a81c] hover:bg-[#f7b93e] transition-all text-white font-bold px-6 py-4 flex items-center gap-2 text-sm shadow-md rounded-tl-full rounded-tr-full rounded-br-full"
          >
            <Pencil size={16} />
            APPLY NOW
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
