import React from 'react';
import { FaBook, FaGraduationCap, FaClipboardCheck, FaCalendarCheck } from 'react-icons/fa';

// Helper function to calculate GPA from marks
const calculateGPA = (marks) => {
  if (marks >= 90) return 10;
  if (marks >= 80) return 9;
  if (marks >= 70) return 8;
  if (marks >= 60) return 7;
  if (marks >= 50) return 6;
  if (marks >= 40) return 5;
  return 0; // Failed
};

// Helper function to calculate SGPA for a semester
const calculateSGPA = (subjects) => {
  const totalGPA = subjects.reduce((acc, subject) => acc + calculateGPA(subject.marks), 0);
  return totalGPA / subjects.length;
};

// Helper function to calculate CGPA
const calculateCGPA = (semesters) => {
  const totalSGPA = semesters.reduce((acc, semester) => acc + calculateSGPA(semester.subjects), 0);
  return totalSGPA / semesters.length;
};

function ResultsPage() {
  // Dummy student results data
  const studentResults = {
    courseName: "Bachelors of Computer Science",
    totalSemesters: 8,
    semesters: [
      { semester: 1, subjects: [{ name: "Introduction to Programming", marks: 85 }, { name: "Mathematics I", marks: 78 }, { name: "Physics I", marks: 82 }] },
      { semester: 2, subjects: [{ name: "Data Structures", marks: 88 }, { name: "Mathematics II", marks: 75 }, { name: "Computer Architecture", marks: 80 }] },
      { semester: 3, subjects: [{ name: "Operating Systems", marks: 90 }, { name: "Discrete Mathematics", marks: 82 }, { name: "Database Management", marks: 86 }] },
      { semester: 4, subjects: [{ name: "Design and Analysis of Algorithms", marks: 92 }, { name: "Mathematics III", marks: 80 }, { name: "Software Engineering", marks: 89 }] },
      { semester: 5, subjects: [{ name: "Computer Networks", marks: 78 }, { name: "Computer Graphics", marks: 85 }, { name: "Theory of Computation", marks: 76 }] },
      { semester: 6, subjects: [{ name: "Artificial Intelligence", marks: 95 }, { name: "Web Development", marks: 88 }, { name: "Computer Security", marks: 80 }] },
      { semester: 7, subjects: [{ name: "Machine Learning", marks: 90 }, { name: "Cloud Computing", marks: 87 }, { name: "Big Data", marks: 80 }] },
      { semester: 8, subjects: [{ name: "Capstone Project", marks: 0 }, { name: "Advanced Programming", marks: 0 }, { name: "Software Testing", marks: 0 }], status: "Pending" }
    ]
  };

  // Calculate SGPA and CGPA
  const sgpaForSemesters = studentResults.semesters.map(semester => 
    semester.status === "Pending" ? 0 : calculateSGPA(semester.subjects)
  );
  const cgpa = calculateCGPA(studentResults.semesters);

  return (
    <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 min-h-screen font-sans">
      {/* Header Section */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/student-portal" className="text-blue-600 font-semibold">Back</a>
        <div className="flex items-center gap-1">
          <img
            src="https://via.placeholder.com/50"
            alt="Institution Logo"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg font-bold text-gray-800">Navyug College</h1>
        </div>
        <a href="/student-login-signup" className="text-red-600 font-semibold">Logout</a>
      </div>

      <div className="container mx-auto p-6 md:p-12">
        {/* Course Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{studentResults.courseName}</h2>
          <p className="text-lg text-gray-600 mb-6">Results Summary</p>

          {/* Semester-wise Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentResults.semesters.map((semester, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaGraduationCap className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">Semester {semester.semester}</h3>
                <div className="mt-4">
                  {semester.status === "Pending" ? (
                    <p className="text-lg text-red-600">Exams Pending - Not Conducted Yet</p>
                  ) : (
                    <>
                      {semester.subjects.map((subject, idx) => (
                        <div key={idx} className="mb-4">
                          <div className="flex justify-between">
                            <p className="text-gray-600">{subject.name}</p>
                            <p className="text-gray-600">{subject.marks} Marks</p>
                          </div>
                        </div>
                      ))}
                      <p className="text-gray-600">SGPA: {sgpaForSemesters[index].toFixed(2)}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CGPA Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Cumulative GPA Overview</h3>
          <div className="text-lg text-gray-600 mb-4">
            <FaClipboardCheck className="mr-2" /> CGPA: {cgpa.toFixed(2)} / 10
          </div>
          <p className="text-gray-600">The CGPA represents the overall academic performance of the student throughout the course.</p>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;
