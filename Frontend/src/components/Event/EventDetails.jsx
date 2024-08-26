import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null); // Add state for error handling
  const [loading, setLoading] = useState(true); // Add state for loading

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log(`Fetching event with ID: ${id}`);
        const response = await fetch(`https://eventsbackend.vercel.app/api/events/${id}`);
        if (!response.ok) {
          throw new Error('Event not found');
        }
        const data = await response.json();
        console.log('Event data:', data);
        setEvent(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-6">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <div className="mb-4">
          <p className="text-lg font-semibold"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p className="text-lg font-semibold"><strong>Time:</strong> {event.time}</p>
          <p className="text-lg font-semibold"><strong>Location:</strong> {event.location}</p>
          <p className="text-lg font-semibold"><strong>Category:</strong> {event.category}</p>
          <p className="text-lg font-semibold"><strong>Capacity:</strong> {event.capacity}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
