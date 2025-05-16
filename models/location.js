const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: {
        type: String,
        enum: ['văn hóa', 'lịch sử', 'thiên nhiên', 'giải trí'],
        required: true
    },
    description: { type: String },
    address: { type: String },
    imageUrl: { type: String }, // ảnh chính
    images: [String],           // nhiều ảnh bổ sung
    coordinates: {
        lat: { type: Number },
        lng: { type: Number },
    },
    likeCount: { type: Number, default: 0 },
    dislikeCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Location', locationSchema);
