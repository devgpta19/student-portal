import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function ManageEvents() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Fest 2024",
      date: "2024-03-15",
      description: "A grand technical fest showcasing new innovations.",
    },
    {
      id: 2,
      name: "Sports Meet 2024",
      date: "2024-04-01",
      description: "Annual sports meet with various athletic events.",
    },
    {
      id: 3,
      name: "Examination Dates",
      date: "2024-05-10",
      description: "Final exams for all courses.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    description: "",
  });
  const [editEventId, setEditEventId] = useState(null);

  // Handle input changes for event details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Start editing an event
  const startEditing = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    setNewEvent(eventToEdit);
    setEditEventId(eventId);
    setEditing(true);
    setShowModal(true);
  };

  // Save event details (for both adding and editing)
  const saveEvent = (e) => {
    e.preventDefault();
    if (editing) {
      const updatedEvents = events.map((event) =>
        event.id === editEventId ? newEvent : event
      );
      setEvents(updatedEvents);
    } else {
      const newEventId = Math.max(...events.map((event) => event.id)) + 1;
      setEvents([...events, { ...newEvent, id: newEventId }]);
    }
    // Reset the form after saving the event
    setNewEvent({
      name: "",
      date: "",
      description: "",
    });
    setEditing(false);
    setShowModal(false);
  };

  // Delete an event
  const deleteEvent = (eventId) => {
    const filteredEvents = events.filter((event) => event.id !== eventId);
    setEvents(filteredEvents);
  };

  return (
    <div className={`bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-screen p-8 ${showModal ? 'backdrop-blur-sm' : ''}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Manage Events</h1>
        <a
          href="/admin-portal"
          className="text-red-600 font-semibold hover:underline"
        >
          Back to Admin Portal
        </a>
      </div>

      {/* Event List */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Events</h2>
        <button
          onClick={() => {
            setEditing(false); // Ensure we are not editing
            setNewEvent({
              name: "",
              date: "",
              description: "",
            }); // Reset fields to empty for new event
            setShowModal(true);
          }}
          className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md mb-4 hover:bg-green-800 transition-all"
        >
          <FaPlus className="mr-2" />
          Add New Event
        </button>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
                <p className="text-gray-600">Date: {event.date}</p>
                <p className="text-gray-600">Description: {event.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => startEditing(event.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaEdit className="text-xl" />
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Event Form Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {editing ? "Edit Event" : "Add New Event"}
            </h3>
            <form onSubmit={saveEvent} className="space-y-4">
              <label className="block">
                Event Name:
                <input
                  type="text"
                  name="name"
                  value={newEvent.name}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter event name"
                  required
                />
              </label>
              <label className="block">
                Event Date:
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  required
                />
              </label>
              <label className="block">
                Description:
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                  placeholder="Enter event description"
                  required
                />
              </label>

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-blue-800 transition-all"
                >
                  Save Event
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

export default ManageEvents;
