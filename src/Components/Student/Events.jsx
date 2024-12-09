import React from "react";
import { FaCalendarAlt, FaTrophy, FaLaptopCode, FaClipboardList } from "react-icons/fa";

function EventsPage() {
  const events = [
    {
      title: "Tech Fest 2024",
      description: "Explore innovation and technology at the annual tech fest.",
      date: "15th February 2024",
      icon: <FaLaptopCode />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Sports Meet 2024",
      description: "Show your athletic skills and team spirit.",
      date: "1st March 2024",
      icon: <FaTrophy />,
      color: "from-green-500 to-blue-600",
    },
    {
      title: "Mid-Semester Exams",
      description: "Prepare for mid-semester exams with your best effort.",
      date: "15th April 2024",
      icon: <FaClipboardList />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Annual Cultural Fest",
      description: "Enjoy cultural events and performances by talented students.",
      date: "20th May 2024",
      icon: <FaCalendarAlt />,
      color: "from-pink-500 to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-200">
      
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

      {/* Events Section */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg shadow-lg overflow-hidden bg-gradient-to-r ${event.color} text-white transform hover:scale-105 transition-all duration-300`}
            >
              <div className="absolute -top-6 -right-6 text-7xl opacity-10">
                {event.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-white text-lg mb-4">{event.description}</p>
              <div className="text-sm font-bold uppercase tracking-wide">
                Date: {event.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
