// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

function Header({ showBackButton, showLogoutButton, onLogout }) {
  const navigate = useNavigate();

  // Handle back button click
  const handleBack = () => {
    if (showBackButton) {
      navigate(-1); // Navigate to the previous page
    }
  };

  // Handle logout button click
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Execute the logout logic (like clearing user session)
      navigate("/student-login-signup"); // Redirect to login page
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-blue-600 text-white flex justify-between items-center z-10">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={handleBack}
          className="text-lg p-2 rounded-full hover:bg-blue-500"
        >
          <FaArrowLeft />
        </button>
      )}

      {/* Logout Button */}
      {showLogoutButton && (
        <button
          onClick={handleLogout}
          className="text-lg p-2 rounded-full hover:bg-blue-500"
        >
          <FaSignOutAlt />
        </button>
      )}
    </div>
  );
}

export default Header;
