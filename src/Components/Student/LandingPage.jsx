import React from "react";
import { FaUserGraduate, FaUserShield } from "react-icons/fa"; // React Icons
import { Link } from "react-router-dom"; // For routing (optional)

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 h-screen w-screen flex flex-col items-center justify-center font-sans px-6 sm:px-8 py-6 md:px-10 overflow-hidden">
      {/* Header Section */}
      <header className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 drop-shadow-md leading-tight">
          Navyug Postgraduate College
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4 text-blue-700 font-medium">
          Empowering Rural Youth Through Quality Education
        </p>
      </header>

      {/* Main Content */}
      <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 md:p-10 w-full max-w-4xl text-center transform hover:scale-105 transition-all duration-500 ease-in-out">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Welcome to Navyug Postgraduate College
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Established in <b>2009</b>, <b>Navyug Postgraduate College</b> stands as a beacon of hope and empowerment in a rural area. We provide accessible and quality education to over <b>550+</b> students, with a strong focus on <b>female education</b> and rural upliftment.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          <Link
            to="/student-login-signup" // Replace with your routing path
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-xl transition duration-300"
          >
            <FaUserGraduate className="text-2xl sm:text-3xl md:text-4xl" />
            <span>Student Portal</span>
          </Link>

          <Link
            to="/admin-portal" // Replace with your routing path
            className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-900 hover:shadow-xl transition duration-300"
          >
            <FaUserShield className="text-2xl sm:text-3xl md:text-4xl" />
            <span>Admin Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
