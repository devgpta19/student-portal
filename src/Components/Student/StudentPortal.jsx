import React from 'react';
import { FaUser, FaClipboardCheck, FaMoneyBillAlt, FaCalendarAlt, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

function StudentPortal() {
    // Dummy student data
    const studentData = {
        name: "John Doe",
        enrollNo: "12345",
        course: "Computer Science",
        photo: "https://via.placeholder.com/150",
        registrationStatus: "Completed",
        feeStatus: "Pending",
        events: "Upcoming: Tech Fest, Sports Meet",
        resultStatus: "Final Exam Results Available",
        assignments: "Assignments Due: 15th Dec",
    };

    return (
        <div className="bg-gradient-to-r from-blue-300 via-white to-blue-200 min-h-screen font-sans">
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-white shadow-xl rounded-b-xl">
                <div className="flex items-center space-x-4">
                    <img src="https://via.placeholder.com/50" alt="Institution Logo" className="w-12 h-12 rounded-full" />
                    <h1 className="text-2xl font-bold text-gray-800">Navyug College</h1>
                </div>
                <a href='/student-login-signup' className="text-red-600 font-semibold text-lg">Logout</a>
            </div>

            <div className="container mx-auto p-8 md:p-12">
                {/* Student Information Section */}
                <div className="flex justify-center mb-12">
                    <div className="flex items-center flex-col lg:flex-row gap-4 bg-white shadow-2xl rounded-lg p-8 w-full md:w-2/3">
                        <img
                            src={studentData.photo || 'https://via.placeholder.com/150'}
                            alt="Student Profile"
                            className="w-32 h-32 rounded-full mr-8 border-4 border-blue-600 transform transition-all duration-300 ease-in-out hover:scale-105"
                        />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">{studentData.name}</h2>
                            <p className="text-lg text-gray-600 mt-2">Enrollment No: {studentData.enrollNo}</p>
                            <p className="text-lg text-gray-600">Course Enrolled: {studentData.course}</p>
                        </div>
                    </div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <a href="/student-profile" className="bg-green-200 p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-green-300">
                        <FaClipboardCheck className="text-5xl text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Registration Status</h3>
                        <p className="text-lg text-gray-600">{studentData.registrationStatus}</p>
                    </a>

                    <a href="/fee-status" className="bg-yellow-200 p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-yellow-300">
                        <FaMoneyBillAlt className="text-5xl text-yellow-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Fee Status</h3>
                        <p className="text-lg text-gray-600">{studentData.feeStatus}</p>
                    </a>
                </div>

                {/* Additional Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a href="/events" className="bg-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-50">
                        <FaCalendarAlt className="text-5xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Events</h3>
                        <p className="text-lg text-gray-600">{studentData.events}</p>
                    </a>

                    <a href="/view-result" className="bg-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-50">
                        <FaFileAlt className="text-5xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Result</h3>
                        <p className="text-lg text-gray-600">{studentData.resultStatus}</p>
                    </a>

                    <a href="/course-enrolled" className="bg-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-50">
                        <FaGraduationCap className="text-5xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Course Enrolled</h3>
                        <p className="text-lg text-gray-600">{studentData.course}</p>
                    </a>

                    <a href="/assignment" className="bg-white p-8 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-blue-50">
                        <FaClipboardCheck className="text-5xl text-blue-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Assignments</h3>
                        <p className="text-lg text-gray-600">{studentData.assignments}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StudentPortal;   
