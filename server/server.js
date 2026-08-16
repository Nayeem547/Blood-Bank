const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const dns = require('dns');

// Force Node.js to use Google DNS for MongoDB SRV lookup
dns.setServers(['8.8.8.8', '1.1.1.1']);

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Import
const donorRoutes = require('./routes/donorRoutes');
const authRoutes = require('./routes/authRoutes');

// Routes Use
app.use('/api/donors', donorRoutes);
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Blood Bank API is running...');
});

// Port
const PORT = process.env.PORT || 5000;

// Check MongoDB URI
console.log('MongoDB URI loaded:', !!process.env.MONGO_URI);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🔥 MongoDB Connected Successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  });