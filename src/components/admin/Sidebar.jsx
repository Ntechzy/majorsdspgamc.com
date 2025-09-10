import React from 'react';
import { 
  User, Stethoscope, GraduationCap, Users, FileText, 
  BookOpen, Presentation, ClipboardList, Award, 
  Activity, BarChart3 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
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

  return (
    <div className="h-screen w-72 bg-gradient-to-b from-[#1c2c4c] to-[#0d1321] text-white shadow-lg flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold tracking-wide">Admin Panel</h2>
      </div>

      {/* Sidebar Menu */}
      <ul className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer transition"
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
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
