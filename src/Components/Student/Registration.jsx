import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaGraduationCap, FaBook, FaArrowLeft } from "react-icons/fa";
import Header from "../Header";  // Assuming Header component is present for back & logout buttons

function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    fathersName: "",
    mothersName: "",
    contactNumber: "",
    email: "",
    qualification: "",
    course: "",
    subjects: [],
  });

  const [studentDataArray, setStudentDataArray] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const courses = {
    "Science": ["Physics", "Chemistry", "Biology"],
    "Arts": ["History", "Geography", "Political Science"],
    "Commerce": ["Accountancy", "Business Studies", "Economics"],
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      subjects: []  // Reset subjects if course changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let errors = {};
    if (!formData.fullName) errors.fullName = "Full Name is required";
    if (!formData.fathersName) errors.fathersName = "Father's Name is required";
    if (!formData.mothersName) errors.mothersName = "Mother's Name is required";
    if (!formData.contactNumber) errors.contactNumber = "Contact Number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.qualification) errors.qualification = "Qualification is required";
    if (!formData.course) errors.course = "Course is required";
    if (formData.subjects.length === 0) errors.subjects = "At least one subject must be selected";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStudentDataArray([...studentDataArray, formData]);
      alert("Registration Successful!");
      setFormData({
        fullName: "",
        fathersName: "",
        mothersName: "",
        contactNumber: "",
        email: "",
        qualification: "",
        course: "",
        subjects: [],
      });
      setCurrentStep(1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 via-white to-blue-300 min-h-screen flex items-center justify-center font-sans px-8 md:px-12">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-8 md:p-10">
        <Header showBackButton={true} showLogoutButton={true} onLogout={handleLogout} />
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Student Registration</h2>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="flex items-center justify-between">
            <div className={`w-1/3 h-2 rounded-full bg-blue-600 ${currentStep > 1 ? "bg-blue-700" : "bg-gray-300"}`}></div>
            <div className={`w-1/3 h-2 rounded-full bg-blue-600 ${currentStep > 2 ? "bg-blue-700" : "bg-gray-300"}`}></div>
            <div className={`w-1/3 h-2 rounded-full bg-blue-600 ${currentStep > 3 ? "bg-blue-700" : "bg-gray-300"}`}></div>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
            <span>Step 1</span><span>Step 2</span><span>Step 3</span>
          </div>
        </div>

        {/* Multi-step Form */}
        <form onSubmit={handleSubmit}>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <div className="mb-6">
                <label htmlFor="fullName" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaUser className="mr-2 text-blue-600" /> Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.fullName && 'border-red-500'}`}
                />
                {formErrors.fullName && <p className="text-red-500 text-sm mt-2">{formErrors.fullName}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="fathersName" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaUser className="mr-2 text-blue-600" /> Father's Name
                </label>
                <input
                  type="text"
                  id="fathersName"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.fathersName && 'border-red-500'}`}
                />
                {formErrors.fathersName && <p className="text-red-500 text-sm mt-2">{formErrors.fathersName}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="mothersName" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaUser className="mr-2 text-blue-600" /> Mother's Name
                </label>
                <input
                  type="text"
                  id="mothersName"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.mothersName && 'border-red-500'}`}
                />
                {formErrors.mothersName && <p className="text-red-500 text-sm mt-2">{formErrors.mothersName}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <label htmlFor="contactNumber" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaPhoneAlt className="mr-2 text-blue-600" /> Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.contactNumber && 'border-red-500'}`}
                />
                {formErrors.contactNumber && <p className="text-red-500 text-sm mt-2">{formErrors.contactNumber}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaEnvelope className="mr-2 text-blue-600" /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.email && 'border-red-500'}`}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>}
              </div>
            </div>
          )}

          {/* Step 3: Course Selection */}
          {currentStep === 3 && (
            <div>
              <div className="mb-6">
                <label htmlFor="qualification" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaGraduationCap className="mr-2 text-blue-600" /> Qualification
                </label>
                <select
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleSelectChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.qualification && 'border-red-500'}`}
                >
                  <option value="">Select Qualification</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Under Graduation">Under Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                  <option value="P.hD">P.hD</option>
                </select>
                {formErrors.qualification && <p className="text-red-500 text-sm mt-2">{formErrors.qualification}</p>}
              </div>

              <div className="mb-6">
                <label htmlFor="course" className="flex items-center text-lg font-semibold text-gray-700">
                  <FaBook className="mr-2 text-blue-600" /> Select Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleSelectChange}
                  required
                  className={`w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.course && 'border-red-500'}`}
                >
                  <option value="">Select Course</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
                {formErrors.course && <p className="text-red-500 text-sm mt-2">{formErrors.course}</p>}
              </div>

              {formData.course && (
                <div className="mb-6">
                  <label htmlFor="subjects" className="flex items-center text-lg font-semibold text-gray-700">
                    Select Subjects
                  </label>
                  <select
                    multiple
                    id="subjects"
                    name="subjects"
                    value={formData.subjects}
                    onChange={(e) => setFormData({ ...formData, subjects: [...e.target.selectedOptions].map(option => option.value) })}
                    className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {courses[formData.course]?.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                  {formErrors.subjects && <p className="text-red-500 text-sm mt-2">{formErrors.subjects}</p>}
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition duration-200"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
