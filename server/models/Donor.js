const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  lastDonationDate: { type: String },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Donor', donorSchema);