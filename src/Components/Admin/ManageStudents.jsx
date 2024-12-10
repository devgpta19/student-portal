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
      "course": "Computer Science",
      "semester": "Semester 1",
      "result": "8.8"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "enrollNo": "12346",
      "contact": "9876543211",
      "email": "janesmith@example.com",
      "fatherName": "Michael Smith",
      "motherName": "Laura Smith",
      "address": "456 Oak St, Chicago, IL",
      "dob": "1999-02-22",
      "course": "Mathematics",
      "semester": "Semester 2",
      "result": "7.3"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "enrollNo": "12347",
      "contact": "9876543212",
      "email": "alicejohnson@example.com",
      "fatherName": "David Johnson",
      "motherName": "Emily Johnson",
      "address": "789 Pine St, Aurora, IL",
      "dob": "2001-01-10",
      "course": "Biology",
      "semester": "Semester 1",
      "result": "9.02"
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "enrollNo": "12348",
      "contact": "9876543213",
      "email": "bobbrown@example.com",
      "fatherName": "James Brown",
      "motherName": "Patricia Brown",
      "address": "101 Maple St, Naperville, IL",
      "dob": "2000-07-23",
      "course": "Physics",
      "semester": "Semester 3",
      "result": "8.1"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "enrollNo": "12349",
      "contact": "9876543214",
      "email": "charliedavis@example.com",
      "fatherName": "William Davis",
      "motherName": "Jennifer Davis",
      "address": "202 Birch St, Evanston, IL",
      "dob": "1999-12-05",
      "course": "Chemistry",
      "semester": "Semester 4",
      "result": "8.6"
    },
    {
      "id": 6,
      "name": "Diana Harris",
      "enrollNo": "12350",
      "contact": "9876543215",
      "email": "dianaharris@example.com",
      "fatherName": "Robert Harris",
      "motherName": "Nancy Harris",
      "address": "303 Cedar St, Bloomington, IL",
      "dob": "2001-09-17",
      "course": "Economics",
      "semester": "Semester 2",
      "result": "7.9"
    },
    {
      "id": 7,
      "name": "Eve Clark",
      "enrollNo": "12351",
      "contact": "9876543216",
      "email": "eveclark@example.com",
      "fatherName": "Richard Clark",
      "motherName": "Elizabeth Clark",
      "address": "404 Elm St, Peoria, IL",
      "dob": "2000-11-30",
      "course": "Psychology",
      "semester": "Semester 1",
      "result": "8.9"
    },
    {
      "id": 8,
      "name": "Frank Lewis",
      "enrollNo": "12352",
      "contact": "9876543217",
      "email": "franklewis@example.com",
      "fatherName": "Thomas Lewis",
      "motherName": "Sandra Lewis",
      "address": "505 Willow St, Champaign, IL",
      "dob": "2000-05-15",
      "course": "Engineering",
      "semester": "Semester 3",
      "result": "9.6"
    },
    {
      "id": 9,
      "name": "Grace Martin",
      "enrollNo": "12353",
      "contact": "9876543218",
      "email": "gracemartin@example.com",
      "fatherName": "John Martin",
      "motherName": "Helen Martin",
      "address": "606 Ash St, Urbana, IL",
      "dob": "1999-08-22",
      "course": "Literature",
      "semester": "Semester 4",
      "result": "9.1"
    },
    {
      "id": 10,
      "name": "Henry White",
      "enrollNo": "12354",
      "contact": "9876543219",
      "email": "henrywhite@example.com",
      "fatherName": "Charles White",
      "motherName": "Marie White",
      "address": "707 Pine St, Decatur, IL",
      "dob": "2001-03-12",
      "course": "History",
      "semester": "Semester 2",
      "result": "6.3"
    },
    // More student data can go here
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
    semester: "",
    result: ""
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
    // If result is entered, check if semester is selected
    if (newStudent.result && !newStudent.semester) {
      alert("Please select a semester first.");
      return;
    }

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
      semester: "",
      result: ""
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
                {/* Display Semester and Result */}
                {student.semester && student.result && (
                  <div className="mt-4 text-gray-600">
                    <p>Semester: {student.semester}</p>
                    <p>Result: {student.result}</p>
                  </div>
                )}
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
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

              {/* Semester Result Section */}
              <label className="block">
                Select Semester:
                <select
                  name="semester"
                  value={newStudent.semester}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                >
                  <option value="">Select Semester</option>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                  <option value="Semester 3">Semester 3</option>
                  <option value="Semester 4">Semester 4</option>
                  <option value="Semester 5">Semester 5</option>
                  <option value="Semester 6">Semester 6</option>
                  <option value="Semester 7">Semester 7</option>
                  <option value="Semester 8">Semester 8</option>
                </select>
              </label>

              <label className="block">
                Enter Result:
                <input
                  type="text"
                  name="result"
                  value={newStudent.result}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter result (e.g., GPA or grades)"
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
 