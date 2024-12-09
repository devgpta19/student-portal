import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function ManageCourses() {
  const [courses, setCourses] = useState([
    {
      "id": 1,
      "name": "Computer Science",
      "code": "CS101",
      "duration": "4 Years",
      "semesters": [
        { "semester": "Semester 1", "subjects": ["Math", "Physics", "Introduction to Programming"] },
        { "semester": "Semester 2", "subjects": ["Data Structures", "Chemistry", "Discrete Mathematics"] },
        { "semester": "Semester 3", "subjects": ["Algorithms", "Database Management", "Operating Systems"] },
        { "semester": "Semester 4", "subjects": ["Software Engineering", "Computer Networks", "Digital Logic"] },
        { "semester": "Semester 5", "subjects": ["Web Development", "Artificial Intelligence", "Computer Architecture"] },
        { "semester": "Semester 6", "subjects": ["Machine Learning", "Compiler Design", "Cloud Computing"] },
        { "semester": "Semester 7", "subjects": ["Data Science", "Blockchain Technology", "Cyber Security"] },
        { "semester": "Semester 8", "subjects": ["Advanced Programming", "Mobile App Development", "Capstone Project"] }
      ]
    },
    {
      "id": 2,
      "name": "Mechanical Engineering",
      "code": "ME101",
      "duration": "4 Years",
      "semesters": [
        { "semester": "Semester 1", "subjects": ["Math", "Physics", "Engineering Drawing"] },
        { "semester": "Semester 2", "subjects": ["Material Science", "Thermodynamics", "Strength of Materials"] },
        { "semester": "Semester 3", "subjects": ["Fluid Mechanics", "Manufacturing Processes", "Mechanics of Solids"] },
        { "semester": "Semester 4", "subjects": ["Dynamics", "Machine Design", "Control Systems"] },
        { "semester": "Semester 5", "subjects": ["Heat Transfer", "Finite Element Analysis", "Automobile Engineering"] },
        { "semester": "Semester 6", "subjects": ["Robotics", "Mechanical Vibration", "Energy Systems"] },
        { "semester": "Semester 7", "subjects": ["Internal Combustion Engines", "Hydraulics and Pneumatics", "Applied Mechanics"] },
        { "semester": "Semester 8", "subjects": ["Design Engineering", "Capstone Project", "Advanced Manufacturing"] }
      ]
    },
    {
      "id": 3,
      "name": "Electrical Engineering",
      "code": "EE101",
      "duration": "4 Years",
      "semesters": [
        { "semester": "Semester 1", "subjects": ["Math", "Physics", "Basic Electrical Engineering"] },
        { "semester": "Semester 2", "subjects": ["Circuit Theory", "Electromagnetic Fields", "Material Science"] },
        { "semester": "Semester 3", "subjects": ["Control Systems", "Power Systems", "Analog Electronics"] },
        { "semester": "Semester 4", "subjects": ["Digital Electronics", "Signals and Systems", "Microprocessors"] },
        { "semester": "Semester 5", "subjects": ["Power Electronics", "Renewable Energy Systems", "Electrical Machines"] },
        { "semester": "Semester 6", "subjects": ["Microcontrollers", "Electrical Drives", "Automation Systems"] },
        { "semester": "Semester 7", "subjects": ["High Voltage Engineering", "Smart Grids", "Instrumentation"] },
        { "semester": "Semester 8", "subjects": ["Power System Protection", "Capstone Project", "Electrical Design"] }
      ]
    },
    {
      "id": 4,
      "name": "Civil Engineering",
      "code": "CE101",
      "duration": "4 Years",
      "semesters": [
        { "semester": "Semester 1", "subjects": ["Math", "Physics", "Introduction to Civil Engineering"] },
        { "semester": "Semester 2", "subjects": ["Strength of Materials", "Engineering Surveying", "Building Materials"] },
        { "semester": "Semester 3", "subjects": ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics"] },
        { "semester": "Semester 4", "subjects": ["Concrete Technology", "Soil Mechanics", "Hydrology"] },
        { "semester": "Semester 5", "subjects": ["Transportation Engineering", "Water Resources Engineering", "Environmental Engineering"] },
        { "semester": "Semester 6", "subjects": ["Design of Concrete Structures", "Reinforced Concrete", "Steel Structures"] },
        { "semester": "Semester 7", "subjects": ["Advanced Surveying", "Construction Management", "Geotechnical Engineering"] },
        { "semester": "Semester 8", "subjects": ["Capstone Project", "Advanced Structural Analysis", "Sustainable Development"] }
      ]
    },
    {
      "id": 5,
      "name": "Chemical Engineering",
      "code": "ChE101",
      "duration": "4 Years",
      "semesters": [
        { "semester": "Semester 1", "subjects": ["Math", "Chemistry", "Introduction to Chemical Engineering"] },
        { "semester": "Semester 2", "subjects": ["Material and Energy Balance", "Fluid Mechanics", "Thermodynamics"] },
        { "semester": "Semester 3", "subjects": ["Transport Phenomena", "Reaction Engineering", "Process Control"] },
        { "semester": "Semester 4", "subjects": ["Heat and Mass Transfer", "Chemical Process Calculations", "Process Design"] },
        { "semester": "Semester 5", "subjects": ["Separation Processes", "Chemical Engineering Thermodynamics", "Biochemical Engineering"] },
        { "semester": "Semester 6", "subjects": ["Process Safety", "Environmental Engineering", "Plant Design"] },
        { "semester": "Semester 7", "subjects": ["Polymer Engineering", "Process Control and Optimization", "Bioprocess Engineering"] },
        { "semester": "Semester 8", "subjects": ["Capstone Project", "Advanced Process Design", "Chemical Plant Management"] }
      ]
    },
    // other courses...
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    duration: "",
    semesters: [],
  });

  const [editing, setEditing] = useState(false);
  const [editCourseId, setEditCourseId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingSemester, setEditingSemester] = useState(null);
  const [semesterSubjects, setSemesterSubjects] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Add new course
  const addCourse = (e) => {
    e.preventDefault();
    if (newCourse.name && newCourse.code && newCourse.duration) {
      setCourses([...courses, { id: Date.now(), ...newCourse }]);
      setNewCourse({ name: "", code: "", duration: "", semesters: [] });
    }
  };

  // Start editing a course
  const startEditing = (courseId) => {
    const courseToEdit = courses.find((course) => course.id === courseId);
    setNewCourse(courseToEdit);
    setEditing(true);
    setEditCourseId(courseId);
  };

  // Save edited course
  const saveCourse = (e) => {
    e.preventDefault();
    const updatedCourses = courses.map((course) =>
      course.id === editCourseId ? newCourse : course
    );
    setCourses(updatedCourses);
    setNewCourse({ name: "", code: "", duration: "", semesters: [] });
    setEditing(false);
  };

  // Delete course
  const deleteCourse = (courseId) => {
    const filteredCourses = courses.filter((course) => course.id !== courseId);
    setCourses(filteredCourses);
  };

  // Open modal for editing subjects of a semester
  const openSemesterModal = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    setSelectedSemester(0); // Default to first semester
    setSemesterSubjects([...course.semesters[0].subjects]);
    setEditingSemester(0);
    setShowModal(true);
  };

  // Handle semester selection
  const handleSemesterChange = (e) => {
    const semesterIndex = parseInt(e.target.value);
    setSelectedSemester(semesterIndex);
    const selectedCourse = courses.find((course) => course.id === newCourse.id);
    setSemesterSubjects([...selectedCourse.semesters[semesterIndex].subjects]);
    setEditingSemester(semesterIndex);
  };

  // Save edited semester subjects
  const saveSemesterSubjects = () => {
    const updatedCourses = courses.map((course) => {
      if (course.id === newCourse.id) {
        course.semesters[editingSemester].subjects = semesterSubjects;
      }
      return course;
    });
    setCourses(updatedCourses);
    setShowModal(false);
  };

  // Handle subject input change
  const handleSemesterSubjectsChange = (e, index) => {
    const updatedSubjects = [...semesterSubjects];
    updatedSubjects[index] = e.target.value;
    setSemesterSubjects(updatedSubjects);
  };

  // Add new subject to the semester
  const addSubject = () => {
    setSemesterSubjects([...semesterSubjects, ""]);
  };

  // Remove subject from the semester
  const removeSubject = (index) => {
    const updatedSubjects = semesterSubjects.filter((_, i) => i !== index);
    setSemesterSubjects(updatedSubjects);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Manage Courses</h1>
        <a href="/admin-portal" className="text-red-600 font-semibold hover:underline">
          Back to Admin Portal
        </a>
      </div>

      {/* Course List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                <p className="text-gray-600">Code: {course.code}</p>
                <p className="text-gray-600">Duration: {course.duration}</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={() => startEditing(course.id)} className="text-blue-600 hover:text-blue-800">
                  <FaEdit className="text-xl" />
                </button>
                <button onClick={() => deleteCourse(course.id)} className="text-red-600 hover:text-red-800">
                  <FaTrash className="text-xl" />
                </button>
                <button onClick={() => openSemesterModal(course.id)} className="text-green-600 hover:text-green-800">
                  Edit Semester Subjects
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add or Edit Course Form */}
      <div className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{editing ? "Edit Course" : "Add New Course"}</h2>
        <form onSubmit={editing ? saveCourse : addCourse} className="space-y-4">
          <label className="block">
            Course Name:
            <input
              type="text"
              name="name"
              value={newCourse.name}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Enter course name"
            />
          </label>
          <label className="block">
            Course Code:
            <input
              type="text"
              name="code"
              value={newCourse.code}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Enter course code"
            />
          </label>
          <label className="block">
            Duration:
            <input
              type="text"
              name="duration"
              value={newCourse.duration}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded"
              placeholder="Enter course duration"
            />
          </label>
          <div className="mt-6 flex justify-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all">
              {editing ? "Save Changes" : "Add Course"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Editing Semester Subjects */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Edit Subjects for Semester {selectedSemester + 1}
            </h3>

            {/* Semester Selection Dropdown */}
            <label className="block mb-4">
              Select Semester:
              <select
                value={selectedSemester}
                onChange={handleSemesterChange}
                className="w-full p-2 mt-1 border rounded"
              >
                {courses
                  .find((course) => course.id === newCourse.id)
                  .semesters.map((semester, index) => (
                    <option key={index} value={index}>
                      {semester.semester}
                    </option>
                  ))}
              </select>
            </label>

            {/* Display Subjects for Selected Semester */}
            {semesterSubjects.map((subject, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700">Subject {index + 1}</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => handleSemesterSubjectsChange(e, index)}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder={`Subject ${index + 1}`}
                />
                <button onClick={() => removeSubject(index)} className="text-red-600 mt-2 hover:text-red-800">
                  Remove Subject
                </button>
              </div>
            ))}
            <button onClick={addSubject} className="bg-green-600 text-white py-2 px-4 rounded-md mt-4">
              Add Subject
            </button>

            <div className="flex justify-between mt-4">
              <button onClick={saveSemesterSubjects} className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Save Subjects
              </button>
              <button onClick={() => setShowModal(false)} className="bg-red-600 text-white py-2 px-4 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageCourses;
