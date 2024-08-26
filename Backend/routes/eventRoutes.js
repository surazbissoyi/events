const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to get all events
router.get('/', async (req, res) => {
    try {
        const events = await eventController.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error });
    }
});

// Route to create a new event
router.post('/', async (req, res) => {
    try {
        const newEvent = await eventController.createEvent(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
});

// Route to get an event by ID
router.get('/:id', async (req, res) => {
    try {
        const event = await eventController.getEventById(req.params.id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error });
    }
});

// Route to update an event by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedEvent = await eventController.updateEvent(req.params.id, req.body);
        if (updatedEvent) {
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
});

// Route to delete an event by ID
router.delete('/:id', async (req, res) => {
    try {
        const result = await eventController.deleteEvent(req.params.id);
        if (result) {
            res.status(204).end(); // No content to return
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
});

module.exports = router;
