import React from "react";
import { FaUsers, FaClipboardList, FaMoneyCheckAlt, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";

function AdminPortal() {
  const adminData = {
    name: "Admin John",
    role: "Administrator",
    institution: "Navyug College",
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white font-sans">
      {/* Header Section */}
      <div className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Institution Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">{adminData.institution}</h1>
        </div>
        <a href="/" className="text-red-400 font-semibold flex items-center">
          <FaSignOutAlt className="mr-2" /> Logout
        </a>
      </div>

      {/* Admin Details */}
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome, {adminData.name}</h1>
        <p className="text-xl text-gray-300">{adminData.role}</p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <a
          href="/manage-students"
          className="bg-blue-600 p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
        >
          <FaUsers className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">Manage Students</h2>
        </a>

        <a
          href="/manage-courses"
          className="bg-green-600 p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
        >
          <FaClipboardList className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">Manage Courses</h2>
        </a>

        <a
          href="/fee-management"
          className="bg-yellow-600 p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
        >
          <FaMoneyCheckAlt className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">Fee Management</h2>
        </a>

        <a
          href="/events-management"
          className="bg-purple-600 p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
        >
          <FaCalendarAlt className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">Manage Events</h2>
        </a>

        <a
          href="/view-feedback"
          className="bg-red-600 p-8 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
        >
          <FaClipboardList className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">View Feedback</h2>
        </a>
      </div>
    </div>
  );
}

export default AdminPortal;
