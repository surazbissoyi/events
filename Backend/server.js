const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const eventRoutes = require('./routes/eventRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use('/api/events', eventRoutes);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello');
});

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
