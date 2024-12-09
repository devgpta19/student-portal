import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function ManageCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Computer Science",
      code: "CS101",
      duration: "4 Years",
      semesters: [
        { semester: "Semester 1", subjects: ["Math", "Physics"] },
        { semester: "Semester 2", subjects: ["Data Structures", "Chemistry"] },
      ],
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      code: "ME101",
      duration: "4 Years",
      semesters: [
        { semester: "Semester 1", subjects: ["Engineering Mechanics", "Chemistry"] },
        { semester: "Semester 2", subjects: ["Thermodynamics", "Math"] },
      ],
    },
    // Add more courses here
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
  const openSemesterModal = (courseId, semesterIndex) => {
    const course = courses.find((course) => course.id === courseId);
    setEditingSemester(semesterIndex);
    setSemesterSubjects([...course.semesters[semesterIndex].subjects]);
    setShowModal(true);
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
        <a
          href="/admin-portal"
          className="text-red-600 font-semibold hover:underline"
        >
          Back to Admin Portal
        </a>
      </div>

      {/* Course List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Courses</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                <p className="text-gray-600">Code: {course.code}</p>
                <p className="text-gray-600">Duration: {course.duration}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => startEditing(course.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit className="text-xl" />
                </button>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash className="text-xl" />
                </button>
                <button
                  onClick={() => openSemesterModal(course.id, 0)} // Open modal for semester 1
                  className="text-green-600 hover:text-green-800"
                >
                  Edit Semester Subjects
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add or Edit Course Form */}
      <div className="mt-8 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {editing ? "Edit Course" : "Add New Course"}
        </h2>

        <form
          onSubmit={editing ? saveCourse : addCourse}
          className="space-y-4"
        >
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
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all"
            >
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
              Edit Subjects for Semester {editingSemester + 1}
            </h3>
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
                <button
                  onClick={() => removeSubject(index)}
                  className="text-red-600 mt-2 hover:text-red-800"
                >
                  Remove Subject
                </button>
              </div>
            ))}

            <button
              onClick={addSubject}
              className="bg-green-600 text-white py-2 px-4 rounded-md mt-4"
            >
              Add Subject
            </button>

            <div className="flex justify-between mt-4">
              <button
                onClick={saveSemesterSubjects}
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Save Subjects
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white py-2 px-4 rounded-md"
              >
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
