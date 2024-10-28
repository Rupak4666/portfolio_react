require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI; 
console.log('MongoDB URI:', mongoUri); // Debugging line

mongoose.connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use('/api/users', userRoutes);

// Welcome Route
app.get('/', (req, res) => {
    res.send('Welcome to my portfolio');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
