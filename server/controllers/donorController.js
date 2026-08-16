const Donor = require('../models/Donor');

exports.registerDonor = async (req, res) => {
  try {
    const { phone } = req.body;
    const existingDonor = await Donor.findOne({ phone });
    if (existingDonor) {
      return res.status(400).json({ message: 'This phone number is already registered!' });
    }

    const newDonor = new Donor(req.body);
    await newDonor.save();
    res.status(201).json({ message: 'Donor registered successfully!', donor: newDonor });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};