import React from 'react';
import UploadTable from '../../components/admin/UploadTable';
import Sidebar from '../../components/admin/Sidebar';
import UploadFiles from '../../components/admin/UploadFiles';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-70 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto" >
        <UploadFiles/>
              <div className="overflow-auto mt-4">
         <UploadTable />
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
