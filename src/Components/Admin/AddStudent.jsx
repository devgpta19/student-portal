import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

function AddStudent() {
  const [studentData, setStudentData] = useState({
    name: "",
    enrollNo: "",
    course: "",
    contact: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the inputs
    if (
      !studentData.name ||
      !studentData.enrollNo ||
      !studentData.course ||
      !studentData.contact ||
      !studentData.email
    ) {
      setMessage("All fields are required.");
      return;
    }

    // Assuming students are stored somewhere (like in a database or state)
    // Here we'll simulate by logging the student data to the console
    console.log("New Student Added:", studentData);

    // Reset form and show success message
    setStudentData({
      name: "",
      enrollNo: "",
      course: "",
      contact: "",
      email: "",
    });
    setMessage("Student added successfully!");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Add New Student</h1>
        <a
          href="/admin-portal"
          className="text-red-600 font-semibold hover:underline"
        >
          Back to Admin Portal
        </a>
      </div>

      {/* Form */}
      <div className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Student Information
        </h2>

        {/* Form fields */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block">
              Name:
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter student's name"
              />
            </label>
            <label className="block">
              Enrollment Number:
              <input
                type="text"
                name="enrollNo"
                value={studentData.enrollNo}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter enrollment number"
              />
            </label>
            <label className="block">
              Course:
              <input
                type="text"
                name="course"
                value={studentData.course}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter student's course"
              />
            </label>
            <label className="block">
              Contact:
              <input
                type="text"
                name="contact"
                value={studentData.contact}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter student's contact"
              />
            </label>
            <label className="block">
              Email:
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
                placeholder="Enter student's email"
              />
            </label>
          </div>

          {/* Success/Failure Message */}
          {message && (
            <div
              className={`mt-4 p-4 text-white rounded-lg ${
                message === "Student added successfully!"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {message}
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all"
            >
              <FaUserPlus className="inline mr-2" /> Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
