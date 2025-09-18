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
              {selected.label}
            </h1>
            <UploadFiles api={selected.api} category={selected.category} />
          </div>
        );

      case "table":
        return (
          <div className="space-y-6">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-800">
              {selected.label}
            </h1>
            <UploadTable api={selected.api} category={selected.category} />
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
