import React from 'react';
import { FaBook, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

function EnrolledCourses() {
  // Dummy student course data
  const courseData = {
    courseName: "Bachelors of Computer Science",
    totalSemesters: 8, // Total semesters in the course
    startDate: "2021-06-01",
    endDate: "2024-05-25",
    semesters: [
      { semester: 1, startDate: "2021-06", subjects: ["Introduction to Programming", "Mathematics I", "Physics I"] },
      { semester: 2, startDate: "2021-12", subjects: ["Data Structures", "Mathematics II", "Computer Architecture"] },
      { semester: 3, startDate: "2022-06", subjects: ["Operating Systems", "Discrete Mathematics", "Database Management"] },
      { semester: 4, startDate: "2022-12", subjects: ["Design and Analysis of Algorithms", "Mathematics III", "Software Engineering"] },
      { semester: 5, startDate: "2023-06", subjects: ["Computer Networks", "Computer Graphics", "Theory of Computation"] },
      { semester: 6, startDate: "2023-12", subjects: ["Artificial Intelligence", "Web Development", "Computer Security"] },
      { semester: 7, startDate: "2024-06", subjects: ["Machine Learning", "Cloud Computing", "Big Data"] },
      { semester: 8, startDate: "2024-12", subjects: ["Capstone Project", "Advanced Programming", "Software Testing"] }
    ]
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/student-portal" className="text-blue-600 font-semibold">Back</a>
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/50" alt="Institution Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold text-gray-800">Navyug College</h1>
        </div>
        <a href="/student-login-signup" className="text-red-600 font-semibold">Logout</a>
      </div>

      <div className="container mx-auto p-6 md:p-12">
        {/* Course Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{courseData.courseName}</h2>
          <p className="text-lg text-gray-600 mb-6">Course Duration: {courseData.startDate} to {courseData.endDate}</p>

          {/* Semester Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.semesters.map((semester, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaGraduationCap className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Semester {semester.semester}</h3>
                <p className="text-gray-600">Start Date: {semester.startDate}</p>
                <p className="text-gray-600">Subjects:</p>
                <ul className="text-gray-600 list-disc pl-6">
                  {semester.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Course Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Overview</h3>
          <p className="text-lg text-gray-600">
            This course is designed to provide students with a comprehensive understanding of computer science fundamentals, including programming, algorithms, data structures, operating systems, databases, and more.
          </p>
          <div className="mt-6">
            <p className="text-lg text-gray-600"><FaBook className="inline mr-2" /> Total Semesters: {courseData.totalSemesters}</p>
            <p className="text-lg text-gray-600"><FaCalendarAlt className="inline mr-2" /> Duration: {courseData.startDate} to {courseData.endDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCourses;
