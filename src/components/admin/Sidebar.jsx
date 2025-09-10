import React, { useState } from "react";

const Sidebar = ({ menuConfig, onSelect }) => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="h-screen w-72 bg-gradient-to-b from-[#1c2c4c] to-[#0d1321] text-white shadow-lg flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      {/* Sidebar Menu with hidden scrollbar */}
      <ul
        className="flex-1 overflow-y-auto px-4 py-6 space-y-3"
        style={{
          scrollbarWidth: "none", // Firefox
        }}
      >
        {Object.entries(menuConfig).map(([key, section]) => (
          <div key={key}>
            <li
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer"
              onClick={() => setOpenMenu(openMenu === key ? null : key)}
            >
              <span className="flex items-center gap-3">
                <section.icon size={20} />
                {section.title}
              </span>
              <span>{openMenu === key ? "▲" : "▼"}</span>
            </li>

            {openMenu === key &&
              section.items.map((item, i) => (
                <li
                  key={i}
                  onClick={() => onSelect(item)}
                  className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-[#FBB20E] hover:text-black cursor-pointer text-sm"
                >
                  <item.icon size={18} />
                  {item.label}
                </li>
              ))}
          </div>
        ))}
      </ul>

      

      {/* Additional CSS to hide scrollbar in Webkit browsers */}
      <style jsx>{`
        ul::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
