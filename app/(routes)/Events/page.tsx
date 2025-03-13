"use client";
import { useState } from "react";
import Link from "next/link";
import { MdLibraryAdd } from "react-icons/md";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  image: string;
}

const eventsData: Event[] = [
  { id: 1,
     title: "Diwali Festival", 
     date: "2025-11-12", 
     location: "Delhi", 
     description: "A grand celebration of lights.", 
     category: "Religious", 
     image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" 
    },
  { id: 2, 
    title: "Food Drive", 
    date: "2025-05-20", 
    location: "Mumbai", 
    description: "Charity event for feeding the needy.", 
    category: "Charity", 
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
   },
  { id: 3, 
    title: "Music Concert", 
    date: "2025-08-15", 
    location: "Bangalore", 
    description: "A social gathering with live music.", 
    category: "Social", 
    image: "https://plus.unsplash.com/premium_photo-1681487469745-91d1d8a5836b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" 
  },
  { id: 4, 
    title: "Video Concert", 
    date: "2025-08-15", 
    location: "Chennai", 
    description: "A social gathering with live movies.", 
    category: "Party Animal", 
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D" 
  },
];

const categories = ["All", "Religious", "Social", "Charity", "Party Animal", "Night Party"];

const EventListing = () => {
  const [events, setEvents] = useState<Event[]>(eventsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [newEvent, setNewEvent] = useState<Event>({
    id: 0,
    title: "",
    date: "",
    location: "",
    description: "",
    category: "",
    image: "",
  });

  // Filter Events Based on Category
  const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

  // Handle New Event Submission
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.location || !newEvent.description || !newEvent.category || !newEvent.image) return;

    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ id: 0, title: "", date: "", location: "", description: "", category: "", image: "" });
  };

  const [isAddPopup, setIsAddPopup] = useState(false);

  const toggleAddPopup = () => {
    setIsAddPopup(!isAddPopup);
  };

  const closeAddPopup = () => {
    setIsAddPopup(false);
  };

  return (
    <div className="w-full h-full  bg-cover bg-center mx-auto py-8 px-6"  >
      <h1 className="text-4xl font-extrabold uppercase mb-6 text-center border-t-4 border-b-4 border-gray-200 shadow-md shadow-blue-500 rounded-xl p-6">
        Event <span className="text-[#0289F5]">Listing</span>
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 md:px-10 py-2 rounded-lg font-bold transition-all duration-200 
            ${selectedCategory === category ? "bg-[#02212c] text-white" : "bg-[#85a0b6] hover:bg-[#0289F5]"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Add Event */}
      <div className="flex justify-end">
  <button 
    onClick={toggleAddPopup} 
    className="text-green-600 flex gap-4 bg-transparent rounded-2xl text-3xl px-4 py-2 hover:text-green-800 transition-all duration-200"
    aria-label="Add Event"
  >
    <MdLibraryAdd />
  </button>
</div>
      {/* Event List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="w-full p-2 bg-white shadow-lg rounded-lg overflow-visible relative transition-all duration-300 border-2 border-gray-300 hover:border-blue-800 hover:shadow-2xl group">
              <img src={event.image} alt={event.title} className="w-full h-48 rounded-lg object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-gray-700 text-sm">{event.date} - {event.location}</p>
                <p className="text-gray-600 text-sm mt-2">{event.description}</p>
                <span className="text-xs font-medium text-blue-500">{event.category}</span>
              </div>
              <Link href="/booking">
                <button className="absolute left-1/2 bottom-5 transform -translate-x-1/2 translate-y-[125%] w-1/2 py-1 rounded-full bg-[#264790] text-white text-sm font-medium transition-all duration-300 group-hover:translate-y-1/2 group-hover:opacity-100 hover:bg-blue-500">
                  Book Event
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events found.</p>
        )}
      </div>

      {/* Add New Event Form */}
      <div className="w-full mt-18 p-10  bg-gray-200 rounded-lg">
      <h1 className="text-4xl font-extrabold uppercase  bg-white mb-6 text-center border-t-4 border-b-4 border-gray-200 shadow-md shadow-emerald-400 rounded-xl p-6">
        Add <span className="text-[#0289F5]">Event</span>
      </h1>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full bg-white p-2 border-b-cyan-500  border-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          ></textarea>
          <select
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg text-sm dropdown-width"
          >
            <option value="">Select Category</option>
            {categories.slice(1).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg text-sm"
            style={{ appearance: "none" }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newEvent.image}
            onChange={e => setNewEvent({ ...newEvent, image: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Event
          </button>
        </form>
      </div>
      {isAddPopup && (
  <>
    {/* Background Overlay */}
    <div className="fixed inset-0 bg-gray-300 bg-opacity-30 z-40" onClick={closeAddPopup}></div>

    {/* Modal */}
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row max-w-4xl w-full my-10 overflow-auto relative">

        {/* Left Section */}
        <div className="w-full mt-18 p-10  bg-gray-200 rounded-lg">
      <h1 className="text-4xl font-extrabold uppercase  bg-white mb-6 text-center border-t-4 border-b-4 border-gray-200 shadow-md shadow-emerald-400 rounded-xl p-6">
        Add <span className="text-[#0289F5]">Event</span>
      </h1>
        <form onSubmit={handleAddEvent} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full bg-white p-2 border-b-cyan-500  border-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          />
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          ></textarea>
          <select
            value={newEvent.category}
            onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg text-sm dropdown-width"
          >
            <option value="">Select Category</option>
            {categories.slice(1).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg text-sm"
            style={{ appearance: "none" }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newEvent.image}
            onChange={e => setNewEvent({ ...newEvent, image: e.target.value })}
            className="w-full p-2 bg-white border-b-cyan-500  border-2 rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add Event
          </button>
        </form>
      </div>

        {/* Close Button */}
        <button
          onClick={closeAddPopup}
          className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  </>
)}

    </div>
  );
};

export default EventListing;
