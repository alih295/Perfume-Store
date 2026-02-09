import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1  flex flex-col">
        <Navbar />

        <div className="p-6  overflow-auto h-[calc(100vh-70px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
