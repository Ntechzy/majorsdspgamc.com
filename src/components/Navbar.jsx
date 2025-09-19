import React, { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Menu data
const menuItems = [
  {
    name: "Home",
    path: "/",
    hasDropdown: false,
  },
  {
    name: "About",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      { name: "About College", path: "/about/about-college" },
      { name: "Vision & Mission", path: "/about/vision&mission" },
      { name: "Chairman's Message", path: "/about/chairman-message" },
      { name: "Director Message", path: "/about/director-message" },
      { name: "Principal Message", path: "/about/principal-message" },
      { name: "Approval/Affiliation", path: "/about/approvalaffiliation" },
      { name: "Awards & Achievements", path: "/about/awards-achievements" },
    ],
  },
  {
    name: "Student",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      { name: "Course Structure & Fee", path: "/student/course-structure-fee" },
      { name: "Admission Enquiry", path: "/student/admission-enquiry" },
      { name: "Student List", path: "/student/student-list" },
      { name: "E-Brochure", path: "/student/E-Brochure" },
    ],
  },
  {
    name: "NCISM Mandates",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      {
        name: "Principal and Medical Superintendent",
        path: "/page/principal-medical-superintendent",
      },
      { name: "Teaching Staff", path: "/pages/TeachingStaff" },
      { name: "Intake Capacity", path: "/pages/IntakeCapacity" },
      { name: "Non Teaching Staff", path: "/pages/NonTeachingStaff" },
      { name: "Student Details", path: "/pages/StudentDetails" },
      { name: "Research Publication", path: "/pages/ResearchPublication" },
      {
        name: "Conferences and Academic Activities",
        path: "/pages/ConferencesandAcademicActivities",
      },
      {
        name: "Attendance Report",
        path: "javascript:void(0);",
        hasDropdown: true,
        submenu: [
          {
            name: "BAMS Students Attendance",
            path: "/pages/BAMSStudentsAttendance",
          },
          {
            name: "Hospital Non-Teaching Staff Attendance",
            path: "/pages/HospitalNonTeachingStaffAttendance",
          },
          {
            name: "College Non-Teaching Staff Attendance",
            path: "/pages/CollegeNonTeachingStaffAttendance",
          },
          {
            name: "Teaching Staff Attendance",
            path: "/pages/TeachingStaffAttendance",
          },
        ],
      },
      { name: "Affiliations", path: "/pages/Affiliation" },
      {
        name: "Clinical Material in Hospital",
        path: "/pages/ClinicalMaterialinHospital",
      },
      {
        name: "Hospital Month wise OP/IP Statistics",
        path: "/pages/HospitalOPD_IPD_Data",
      },
    ],
  },
  {
    name: "Facility",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      { name: "Hospital Facility", path: "/facility/hospital-facility" },
      {
        name: "College & Other Facilities",
        path: "/facility/College-facility",
      },
      { name: "Hostel", path: "/facility/hostel" },
      { name: "Gym", path: "/facility/gym" },
    ],
  },
  {
    name: "Media",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      { name: "Image Gallery", path: "/media/image-gallery" },
      { name: "Video Gallery", path: "/media/video-gallery" },
    ],
  },
  {
    name: "Hospital Clinical Data",
    path: "javascript:void(0);",
    hasDropdown: true,
    submenu: [
      {
        name: "Hospital OPD/IPD Data",
        path: "/hospital-data/hospital-opd-ipd-data",
      },
      { name: "Other Hospital Data", path: "/hospital-data/otherhospitaldata" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    hasDropdown: false,
  },
  {
    name: "IQAC",
    path: "/pages/IQAC",
    hasDropdown: false,
  },
  {
    name: "E-Library",
    path: "/pages/e-library",
    hasDropdown: false,
  },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null); // 👈 for nested submenu desktop
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const closeTimeoutRef = useRef(null);

  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <nav className=" mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
          <img
            src="/logo-heading.png"
            alt="Heading"
            className="h-12 w-auto ml-2"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(closeTimeoutRef.current);
                setOpenIndex(index);
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setOpenIndex(null);
                  setOpenSubmenuIndex(null);
                }, 300);
              }}
            >
              <a
                href={item.path}
                className={`text-md font-semibold ${
                  item.name === "Home" ? "text-[#00715D]" : "text-black"
                } hover:text-[#00715D] flex items-center gap-1`}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>

              {/* Submenu (Desktop) */}
              {item.hasDropdown && openIndex === index && (
                <ul className="absolute top-10 left-0 min-w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative group px-4 py-2 hover:bg-gray-100"
                      onMouseEnter={() => setOpenSubmenuIndex(subIndex)}
                      onMouseLeave={() => setOpenSubmenuIndex(null)}
                    >
                      <a
                        href={sub.path}
                        className="text-sm text-gray-800 flex items-center justify-between"
                      >
                        {sub.name}
                        {sub.hasDropdown && <ChevronDown size={14} />}
                      </a>

                      {/* Nested submenu (Desktop) */}
                      {sub.hasDropdown && openSubmenuIndex === subIndex && (
                        <ul className="absolute top-0 left-full min-w-56 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                          {sub.submenu.map((nested, nestedIndex) => (
                            <li
                              key={nestedIndex}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <a
                                href={nested.path}
                                className="text-sm text-gray-800"
                              >
                                {nested.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

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
                    setMobileSubmenuOpen(
                      mobileSubmenuOpen === index ? null : index
                    )
                  }
                >
                  <a href={item.path}>{item.name}</a>
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
                        <div
                          className="flex justify-between items-center text-gray-700"
                          onClick={() =>
                            setMobileSubmenuOpen(
                              mobileSubmenuOpen === `${index}-${subIndex}`
                                ? index
                                : `${index}-${subIndex}`
                            )
                          }
                        >
                          <a href={sub.path} className="text-sm">
                            {sub.name}
                          </a>
                          {sub.hasDropdown && (
                            <ChevronDown
                              className={`transform transition-transform ${
                                mobileSubmenuOpen === `${index}-${subIndex}`
                                  ? "rotate-180"
                                  : "rotate-0"
                              }`}
                              size={14}
                            />
                          )}
                        </div>

                        {/* Nested submenu (Mobile) */}
                        {sub.hasDropdown &&
                          mobileSubmenuOpen === `${index}-${subIndex}` && (
                            <ul className="ml-4 mt-2 space-y-2">
                              {sub.submenu.map((nested, nestedIndex) => (
                                <li key={nestedIndex}>
                                  <a
                                    href={nested.path}
                                    className="text-sm text-gray-600"
                                  >
                                    {nested.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
