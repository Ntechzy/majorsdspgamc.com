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
        <div className="p-6 text-gray-400 text-3xl font-semibold text-center mt-20">
          Please select a menu item
        </div>
      );
    }

    if (selected.type === "file") {
      return (
        <div className="space-y-6">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            {selected.label}
          </h1>
          <UploadFiles api={selected.api} />
        </div>
      );
    }

    if (selected.type === "table") {
      return (
        <div className="space-y-6">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            {selected.label}
          </h1>
          <UploadTable api={selected.api} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar menuConfig={menuConfig} onSelect={setSelected} />
      <div className="flex-1 bg-gray-50 p-6">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;
