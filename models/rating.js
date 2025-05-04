const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    type: String, // 'restaurant', 'hotel', 'agency'
    refId: mongoose.Types.ObjectId,
    score: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rating', ratingSchema);
