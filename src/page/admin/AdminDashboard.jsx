import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import UploadFiles from "../../components/admin/UploadFiles";
import UploadTable from "../../components/admin/UploadTable";
import { menuConfig } from "../../data/menuConfig";

const AdminDashboard = () => {
  const [selected, setSelected] = useState(null);

  const renderContent = () => {
    if (!selected) {
      return <div className="p-6 text-gray-500 text-3xl">Please select a menu item</div>;
    }

    if (selected.type === "file") {
      return <UploadFiles api={selected.api} />;
    }
    if (selected.type === "table") {
      return <UploadTable api={selected.api} />;
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
