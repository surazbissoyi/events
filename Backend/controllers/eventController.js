const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async () => {
    return await Event.find();
};

// Create a new event
exports.createEvent = async (eventData) => {
    const newEvent = new Event(eventData);
    return await newEvent.save();
};

// Get an event by ID
exports.getEventById = async (id) => {
    return await Event.findById(id);
};

// Update an event by ID
exports.updateEvent = async (id, updatedData) => {
    return await Event.findByIdAndUpdate(id, updatedData, { new: true });
};

// Delete an event by ID
exports.deleteEvent = async (id) => {
    return await Event.findByIdAndDelete(id);
};
