const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor'); // আপনার ডোনার মডেল
const bcrypt = require('bcrypt');

// Login Route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // ১. ইউজারনেম দিয়ে ডেটাবেস থেকে ডোনার খোঁজা
    const donor = await Donor.findOne({ username });
    if (!donor) {
      return res.status(400).json({ message: 'Invalid username or password!' });
    }

    // ২. পাসওয়ার্ড ম্যাচ করা (bcrypt দিয়ে)
    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password!' });
    }

    // ৩. সফল লগইন
    res.status(200).json({ 
      message: 'Login successful!', 
      donor: {
        id: donor._id,
        username: donor.username,
        firstName: donor.firstName,
        lastName: donor.lastName
      } 
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;