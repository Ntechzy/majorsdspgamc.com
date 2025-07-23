import React, { useState } from "react";
import { ChevronDown, Pencil, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Menu data
const menuItems = [
  {
    name: "Home",
    path: "/",
    hasDropdown: false,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          <img src="/logo-heading.png" alt="Heading" className="h-12 w-auto ml-2" />
        </div>

        {/* Desktop Menu */}
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

              {/* Submenu (Desktop) */}
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

        {/* CTA Button (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-5">
          <Link
            to="/apply"
            className="bg-[#f8a81c] hover:bg-[#f7b93e] transition-all text-white font-bold px-6 py-4 flex items-center gap-2 text-sm shadow-md rounded-tl-full rounded-tr-full rounded-br-full"
          >
            <Pencil size={16} />
            APPLY NOW
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center text-black font-semibold"
                  onClick={() =>
                    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index)
                  }
                >
                  <Link to={item.path}>{item.name}</Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`transform transition-transform ${
                        mobileSubmenuOpen === index ? "rotate-180" : "rotate-0"
                      }`}
                      size={18}
                    />
                  )}
                </div>
                {/* Submenu (Mobile) */}
                {item.hasDropdown && mobileSubmenuOpen === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link to={sub.path} className="text-sm text-gray-700">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* CTA Button in mobile */}
            <li className="mt-4">
              <Link
                to="/apply"
                className="block w-full bg-[#f8a81c] hover:bg-[#f7b93e] text-white text-center font-bold px-6 py-3 rounded-full shadow"
              >
                <div className="flex justify-center items-center gap-2">
                  <Pencil size={16} />
                  APPLY NOW
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
