import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import UploadFiles from "../../components/admin/UploadFiles";
import UploadTable from "../../components/admin/UploadTable";
import { menuConfig } from "../../data/menuConfig";

const AdminDashboard = () => {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    if (!selected) {
      return (
        <div className="p-6 text-gray-400 text-2xl sm:text-3xl font-semibold text-center mt-20">
          Please select a menu item
        </div>
      );
    }

    switch (selected.type) {
      case "file":
        return (
          <div className="space-y-6">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
              {selected.title || selected.label}
            </h1>
            <UploadFiles
              title={selected.title}
              page={selected.page}
              category={selected.category}
              api={selected.api}
            />
          </div>
        );

      case "table":
        return (
          <div className="space-y-6">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
              {selected.title || selected.label}
            </h1>
            <UploadTable
              title={selected.title}
              page={selected.page}
              category={selected.category}
              api={selected.api}
            />
          </div>
        );

      case "multiple": // 👈 handle multiple sections
        return (
          <div className="space-y-10">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
              {selected.title || selected.label}
            </h1>
            {selected.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 p-6 border rounded-lg bg-white shadow">
                <h2 className="text-2xl font-semibold text-gray-700">{section.title}</h2>
                {section.type === "file" ? (
                  <UploadFiles
                    title={section.title}
                    page={section.page}
                    category={section.category}
                    api={section.api}
                  />
                ) : (
                  <UploadTable
                    title={section.title}
                    page={section.page}
                    category={section.category}
                    api={section.api}
                  />
                )}
              </div>
            ))}
          </div>
        );

      default:
        return (
          <div className="p-6 text-gray-500 text-center mt-20">
            No component available for this menu type.
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar menuConfig={menuConfig} onSelect={setSelected} />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
