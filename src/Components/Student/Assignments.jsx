import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { saveAs } from "file-saver";

function AssignmentsPage() {
  const assignments = [
    {
      title: "Assignment 1: Data Structures",
      description: "Submit by December 15, 2024",
      fileUrl: "/files/assignment1.pdf",
    },
    {
      title: "Assignment 2: Web Development",
      description: "Submit by December 20, 2024",
      fileUrl: "/files/assignment2.pdf",
    },
    {
      title: "Assignment 3: Database Management",
      description: "Submit by December 25, 2024",
      fileUrl: "/files/assignment3.pdf",
    },
  ];

  // Handle file download
  const handleDownload = (fileUrl, fileName) => {
    saveAs(fileUrl, fileName); 
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/student-portal" className="text-blue-600 font-semibold">Back</a>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Institution Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold text-gray-800">Navyug College</h1>
        </div>
        <a href="/student-login-signup" className="text-red-600 font-semibold">Logout</a>
      </div>

      <div className="p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Assignments</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-indigo-200 hover:bg-indigo-300 p-8 rounded-lg shadow-lg text-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{assignment.title}</h2>
              <p className="text-lg mb-4">{assignment.description}</p>
              <button
                onClick={() =>
                  handleDownload(assignment.fileUrl, `${assignment.title}.pdf`)
                }
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300 flex items-center"
              >
                <FaFileDownload className="mr-2" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentsPage;
