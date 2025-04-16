const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['văn hóa', 'lịch sử', 'thiên nhiên', 'giải trí'], required: true },
    description: { type: String },
    imageUrl: { type: String },
    address: { type: String },
    coordinates: {
        lat: { type: Number },
        lng: { type: Number },
    }
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
