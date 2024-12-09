// import React from "react";
// import { FaUser, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaBook } from "react-icons/fa";
// import Header from "../Header"; // Assuming Header component is present for back & logout buttons

// function ProfilePage({ registeredData }) {
//   if (!registeredData) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 via-white to-blue-300">
//         <p className="text-xl text-gray-600">No registered data available. Please register first.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 min-h-screen flex items-center justify-center font-sans">
//       <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8 md:p-10">
//         <Header showBackButton={true} showLogoutButton={true} />

//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Profile</h2>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaUser className="mr-2 text-blue-600" /> Full Name
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.fullName}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaUser className="mr-2 text-blue-600" /> Father's Name
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.fathersName}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaUser className="mr-2 text-blue-600" /> Mother's Name
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.mothersName}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaPhoneAlt className="mr-2 text-blue-600" /> Contact Number
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.contactNumber}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaEnvelope className="mr-2 text-blue-600" /> Email Address
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.email}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaGraduationCap className="mr-2 text-blue-600" /> Qualification
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.qualification}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaBook className="mr-2 text-blue-600" /> Course Selected
//             </h3>
//             <p className="text-lg text-gray-800">{registeredData.course}</p>
//           </div>

//           <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold text-gray-700 flex items-center">
//               <FaBook className="mr-2 text-blue-600" /> Subjects
//             </h3>
//             <ul className="text-lg text-gray-800 list-disc pl-6">
//               {registeredData.subjects.map((subject, index) => (
//                 <li key={index}>{subject}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;





















// DUMMY PROFILE 










import React from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaUniversity, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

function StudentProfile() {
  // Dummy student profile data
  const studentData = {
    name: "John Doe",
    enrollNo: "12345",
    course: "Computer Science",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    dob: "2000-05-15",
    address: "1234 Elm Street, Some City, Country",
    photo: "https://via.placeholder.com/150",
    registrationDate: "2021-06-10",
    graduationDate: "2024-05-25",
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
        {/* Profile Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row bg-white shadow-lg rounded-lg p-8 w-full md:w-2/3">
            <img
              src={studentData.photo || 'https://via.placeholder.com/150'}
              alt="Student Profile"
              className="w-32 h-32 rounded-full mr-8 border-4 border-blue-600 lg:mb-0 mb-8"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{studentData.name}</h2>
              <p className="text-lg text-gray-600">Enrollment No: {studentData.enrollNo}</p>
              <p className="text-lg text-gray-600">Course Enrolled: {studentData.course}</p>
              <p className="text-lg text-gray-600">Email: {studentData.email}</p>
              <p className="text-lg text-gray-600">Phone: {studentData.phone}</p>
              <p className="text-lg text-gray-600">Date of Birth: {studentData.dob}</p>
              <p className="text-lg text-gray-600">Address: {studentData.address}</p>
            </div>
          </div>
        </div>

        {/* Registration and Graduation Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCalendarAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Registration Date</h3>
            <p className="text-gray-600">{studentData.registrationDate}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaGraduationCap className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Expected Graduation Date</h3>
            <p className="text-gray-600">{studentData.graduationDate}</p>
          </div>
        </div>

        {/* Address and Other Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-12">
          <FaUniversity className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">{studentData.address}</p>
        </div>

      </div>
    </div>
  );
}

export default StudentProfile;
