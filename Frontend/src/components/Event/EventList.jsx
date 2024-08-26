import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://eventsbackend.vercel.app/api/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message); // Set error message in case of failure
        console.error('Fetch error:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Events</h1>
      {error && (
        <p className="text-red-600 bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
          Error: {error}
        </p>
      )}
      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Link to={`/events/${event._id}`} className="block p-4 hover:bg-gray-100 transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <p className="text-gray-500 mt-1 text-sm">
                  <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No events available</p>
      )}
    </div>
  );
};

export default EventList;
