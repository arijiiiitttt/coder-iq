// /server/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Essential for development: allows Angular (Port 4200) to talk to Express (Port 3000)

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// --- MIDDLEWARE ---
app.use(express.json()); // Allows Express to read JSON body from Angular POST requests
app.use(cors({ origin: 'http://localhost:4200' })); // IMPORTANT: Allow Angular access

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- ROUTES ---
const submitRouter = require('./routes/submitRoute');
app.use('/api', submitRouter); // All API routes start with /api

// Simple welcome route for testing
app.get('/', (req, res) => {
    res.send('PSI Project Backend is running!');
});

// --- START SERVER ---
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});