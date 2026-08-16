const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');
const bcrypt = require('bcrypt');

// ১. Register Route (BecomeDonor কম্পোনেন্টের জন্য)
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, username, password, phone, bloodGroup, gender, dob, lastDonationDate, address } = req.body;

    // চেক করা ইউজারনেম আগে থেকেই আছে কি না
    const existingDonor = await Donor.findOne({ username });
    if (existingDonor) {
      return res.status(400).json({ message: 'Username already exists!' });
    }

    // পাসওয়ার্ড হ্যাশ করা
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // নতুন ডোনার তৈরি
    const newDonor = new Donor({
      firstName,
      lastName,
      username,
      password: hashedPassword, // হ্যাশ করা পাসওয়ার্ড সেভ হবে
      phone,
      bloodGroup,
      gender,
      dob,
      lastDonationDate,
      address
    });

    await newDonor.save();
    res.status(201).json({ message: 'Donor registered successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ২. Login Route (Login কম্পোনেন্টের জন্য)
// লক্ষ্য রাখুন: আপনার Login.jsx এ ইউআরএল দেওয়া আছে /api/auth/login অথবা /api/donors/login
// আপনার রাউট অনুযায়ী এটি পরিবর্তন করে নিতে পারেন। নিচে /login দেওয়া হলো।
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // ইউজারনেম দিয়ে ডেটাবেস থেকে ডোনার খোঁজা
    const donor = await Donor.findOne({ username });
    if (!donor) {
      return res.status(400).json({ message: 'Invalid username or password!' });
    }

    // পাসওয়ার্ড ম্যাচ করা (bcrypt দিয়ে চেক করা)
    const isMatch = await bcrypt.compare(password, donor.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password!' });
    }

    // সফল লগইন
    res.status(200).json({ message: 'Login successful!', donor });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;