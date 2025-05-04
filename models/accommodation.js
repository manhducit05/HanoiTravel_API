const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    images: [String],
    description: String,
    rating: Number
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
