import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link component for navigation

function ManageStudents() {
  const [students, setStudents] = useState([
    {
        "id": 1,
        "name": "John Doe",
        "enrollNo": "12345",
        "contact": "9876543210",
        "email": "johndoe@example.com",
        "fatherName": "Richard Doe",
        "motherName": "Sarah Doe",
        "address": "123 Main St, Springfield, IL",
        "dob": "2000-04-15",
        "course": "Computer Science"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "enrollNo": "12346",
        "contact": "9876543211",
        "email": "janesmith@example.com",
        "fatherName": "James Smith",
        "motherName": "Linda Smith",
        "address": "456 Oak Ave, Springfield, IL",
        "dob": "1999-07-22",
        "course": "Mechanical Engineering"
      },
      {
        "id": 3,
        "name": "Alex Johnson",
        "enrollNo": "12347",
        "contact": "9876543212",
        "email": "alexjohnson@example.com",
        "fatherName": "Robert Johnson",
        "motherName": "Mary Johnson",
        "address": "789 Pine Rd, Springfield, IL",
        "dob": "2001-01-10",
        "course": "Electrical Engineering"
      },
      {
        "id": 4,
        "name": "Emily Davis",
        "enrollNo": "12348",
        "contact": "9876543213",
        "email": "emilydavis@example.com",
        "fatherName": "William Davis",
        "motherName": "Barbara Davis",
        "address": "101 Maple St, Springfield, IL",
        "dob": "2000-11-25",
        "course": "Biotechnology"
      },
      {
        "id": 5,
        "name": "Michael Brown",
        "enrollNo": "12349",
        "contact": "9876543214",
        "email": "michaelbrown@example.com",
        "fatherName": "Richard Brown",
        "motherName": "Jennifer Brown",
        "address": "202 Cedar Ln, Springfield, IL",
        "dob": "1999-09-05",
        "course": "Civil Engineering"
      },
      {
        "id": 6,
        "name": "Sophia Martinez",
        "enrollNo": "12350",
        "contact": "9876543215",
        "email": "sophiamartinez@example.com",
        "fatherName": "Carlos Martinez",
        "motherName": "Maria Martinez",
        "address": "303 Birch Blvd, Springfield, IL",
        "dob": "2000-02-20",
        "course": "Architecture"
      },
      {
        "id": 7,
        "name": "William Wilson",
        "enrollNo": "12351",
        "contact": "9876543216",
        "email": "williamwilson@example.com",
        "fatherName": "David Wilson",
        "motherName": "Nancy Wilson",
        "address": "404 Walnut Dr, Springfield, IL",
        "dob": "1998-10-30",
        "course": "Mechanical Engineering"
      },
      {
        "id": 8,
        "name": "Olivia Moore",
        "enrollNo": "12352",
        "contact": "9876543217",
        "email": "oliviamoore@example.com",
        "fatherName": "Joseph Moore",
        "motherName": "Elizabeth Moore",
        "address": "505 Cherry Cres, Springfield, IL",
        "dob": "2001-03-12",
        "course": "Physics"
      },
      {
        "id": 9,
        "name": "Liam Taylor",
        "enrollNo": "12353",
        "contact": "9876543218",
        "email": "liamtaylor@example.com",
        "fatherName": "Ethan Taylor",
        "motherName": "Amanda Taylor",
        "address": "606 Pine Hill Rd, Springfield, IL",
        "dob": "1999-08-04",
        "course": "Computer Science"
      },
      {
        "id": 10,
        "name": "Ava Harris",
        "enrollNo": "12354",
        "contact": "9876543219",
        "email": "avaharris@example.com",
        "fatherName": "Christopher Harris",
        "motherName": "Susan Harris",
        "address": "707 Fir Ln, Springfield, IL",
        "dob": "2000-12-18",
        "course": "Chemical Engineering"
      },
    // Add more students here
  ]);

  const [editing, setEditing] = useState(false);
  const [editStudentId, setEditStudentId] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    enrollNo: "",
    contact: "",
    email: "",
    fatherName: "",
    motherName: "",
    address: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input changes for student details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Start editing a student
  const startEditing = (studentId) => {
    const studentToEdit = students.find((student) => student.id === studentId);
    setNewStudent(studentToEdit);
    setEditStudentId(studentId);
    setEditing(true);
    setShowModal(true);
  };

  // Save edited student details
  const saveStudent = (e) => {
    e.preventDefault();
    const updatedStudents = students.map((student) =>
      student.id === editStudentId ? newStudent : student
    );
    setStudents(updatedStudents);
    setNewStudent({
      name: "",
      enrollNo: "",
      contact: "",
      email: "",
      fatherName: "",
      motherName: "",
      address: "",
    });
    setEditing(false);
    setShowModal(false);
  };

  // Delete student
  const deleteStudent = (studentId) => {
    const filteredStudents = students.filter((student) => student.id !== studentId);
    setStudents(filteredStudents);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter students based on search query
  const filteredStudents = students
    .filter((student) => {
      return (
        student.name.toLowerCase().includes(searchQuery) ||
        student.email.toLowerCase().includes(searchQuery) ||
        student.enrollNo.includes(searchQuery)
      );
    })
    .sort((a, b) => {
      // Sorting students alphabetically by their name
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Manage Students</h1>
        <a
          href="/admin-portal"
          className="text-red-600 font-semibold hover:underline"
        >
          Back to Admin Portal
        </a>
      </div>

      {/* Search Bar */}
      <div className="mt-8 flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email, or Enrollment No."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-3 w-1/3 border rounded-lg shadow-md focus:outline-none"
        />
      </div>

      {/* Student List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Students</h2>
        <div className="space-y-4">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row justify-between gap-3 lg:gap-0 items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                <p className="text-gray-600">Enrollment No: {student.enrollNo}</p>
                <p className="text-gray-600">Contact: {student.contact}</p>
                <p className="text-gray-600">Email: {student.email}</p>
                <p className="text-gray-600">Father's Name: {student.fatherName}</p>
                <p className="text-gray-600">Mother's Name: {student.motherName}</p>
                <p className="text-gray-600">Address: {student.address}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => startEditing(student.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit className="text-xl" />
                </button>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Student Button */}
      <div className="mt-8 flex justify-center">
        <Link to="/add-student">
          <button
            className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all"
          >
            Add Student
          </button>
        </Link>
      </div>

      {/* Edit/Add Student Form */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {editing ? "Edit Student" : "Add New Student"}
            </h3>
            <form onSubmit={saveStudent} className="space-y-4">
              <label className="block">
                Name:
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter student name"
                />
              </label>
              <label className="block">
                Enrollment No:
                <input
                  type="text"
                  name="enrollNo"
                  value={newStudent.enrollNo}
                  className="w-full p-2 mt-1 border rounded bg-gray-200 cursor-not-allowed"
                  placeholder="Enrollment number"
                  readOnly
                />
              </label>
              <label className="block">
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={newStudent.contact}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter contact number"
                />
              </label>
              <label className="block">
                Email:
                <input
                  type="email"
                  name="email"
                  value={newStudent.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter email"
                />
              </label>
              <label className="block">
                Father's Name:
                <input
                  type="text"
                  name="fatherName"
                  value={newStudent.fatherName}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter father's name"
                />
              </label>
              <label className="block">
                Mother's Name:
                <input
                  type="text"
                  name="motherName"
                  value={newStudent.motherName}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter mother's name"
                />
              </label>
              <label className="block">
                Address:
                <textarea
                  name="address"
                  value={newStudent.address}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter permanent address"
                />
              </label>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all"
                >
                  Save Student
                </button>
              </div>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 text-red-600 hover:text-red-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageStudents;
