import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import FeePayment from './Components/Student/FeePayment';
import Registration from './Components/Student/Registration';
import Result from './Components/Student/Result';
import LandingPage from './Components/Student/LandingPage';
import EnrolledCourses from './Components/Student/EnrolledCourses';
import StudentHomePage from './Components/Student/StudentPortal';
import AssignmentsPage from './Components/Student/Assignments';
import Landing2 from './Components/Landing2';
import ProfilePage from './Components/Student/ProfilePage';
import Receipt from './Components/Student/Receipt';
import EventsPage from './Components/Student/Events';

import AdminPortal from './Components/Admin/AdminPortal';
import ManageStudents from './Components/Admin/ManageStudents';
import AddStudent from './Components/Admin/AddStudent';
import ManageCourses from './Components/Admin/ManageCourses';
import ManageEvents from './Components/Admin/ManageEvent';
import FeeManagement from './Components/Admin/FeeManagement';


const App = () => {
  return (
    <>
      <div className='min-h-screen w-screen overflow-hidden p-1 bg-slate-700'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student-login-signup" element={<Landing2 />} />
            <Route path="/student-profile" element={<ProfilePage />} />
            <Route path="/student-portal" element={<StudentHomePage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/fee-status" element={<FeePayment />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/view-result" element={<Result />} />
            <Route path="/course-enrolled" element={<EnrolledCourses />} />
            <Route path="/assignment" element={<AssignmentsPage />} />
            <Route path="/events" element={<EventsPage />} />

            <Route path="/admin-portal" element={<AdminPortal />} />
            <Route path="/manage-students" element={<ManageStudents />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/manage-courses" element={<ManageCourses />} />
            <Route path="/events-management" element={<ManageEvents />} />
            <Route path="/fee-management" element={<FeeManagement />} />



          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
