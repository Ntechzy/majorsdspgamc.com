import React, { useState } from 'react';
import { 
  User, Stethoscope, GraduationCap, Users, FileText, 
  BookOpen, Presentation, ClipboardList, Award, 
  Activity, BarChart3, ChevronDown, ChevronUp, Image, Video 
} from 'lucide-react';

const Sidebar = () => {
  const [ncismOpen, setNcismOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [hospitalOpen, setHospitalOpen] = useState(false);

  const ncismItems = [
    { label: "Principal and Medical Superintendent", icon: User },
    { label: "Teaching Staff", icon: GraduationCap },
    { label: "Intake Capacity", icon: ClipboardList },
    { label: "Non Teaching Staff", icon: Users },
    { label: "Student Details", icon: FileText },
    { label: "Research Publication", icon: BookOpen },
    { label: "Conferences and Academic Activities", icon: Presentation },
    { label: "Attendance Report", icon: ClipboardList },
    { label: "Affiliations", icon: Award },
    { label: "Clinical Material in Hospital", icon: Stethoscope },
    { label: "Hospital Month wise OP/IP Statistics", icon: BarChart3 },
  ];

  const mediaItems = [
    { label: "Image Gallery", icon: Image },
    { label: "Video Gallery", icon: Video },
  ];

  const hospitalItems = [
    { label: "Hospital OPD/IPD Data", icon: Stethoscope },
    { label: "Other Hospital Data", icon: Stethoscope },
  ];

  return (
    <div className="h-screen w-72 bg-gradient-to-b from-[#1c2c4c] to-[#0d1321] text-white shadow-lg flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold tracking-wide">Admin Panel</h2>
      </div>

      {/* Sidebar Menu */}
      <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {/* NCISM Mandates Dropdown */}
        <li
          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition"
          onClick={() => setNcismOpen(!ncismOpen)}
        >
          <span className="flex items-center gap-3">
            <Activity size={20} />
            NCISM Mandates
          </span>
          {ncismOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </li>

        {ncismOpen &&
          ncismItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition text-sm"
            >
              <item.icon size={18} />
              {item.label}
            </li>
          ))}

        {/* Media Dropdown */}
        <li
          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition"
          onClick={() => setMediaOpen(!mediaOpen)}
        >
          <span className="flex items-center gap-3">
            <Image size={20} />
            Media
          </span>
          {mediaOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </li>

        {mediaOpen &&
          mediaItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition text-sm"
            >
              <item.icon size={18} />
              {item.label}
            </li>
          ))}

        {/* Hospital Clinical Data Dropdown */}
        <li
          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition"
          onClick={() => setHospitalOpen(!hospitalOpen)}
        >
          <span className="flex items-center gap-3">
            <Stethoscope size={20} />
            Hospital Clinical Data
          </span>
          {hospitalOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </li>

        {hospitalOpen &&
          hospitalItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition text-sm"
            >
              <item.icon size={18} />
              {item.label}
            </li>
          ))}
      </ul>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 text-center text-xs text-gray-400">
        © 2025 Major SD Singh
      </div>
    </div>
  );
};

export default Sidebar;
