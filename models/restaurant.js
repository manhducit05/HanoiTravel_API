const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cuisine: { type: String }, // Ví dụ: Việt, Nhật, Hàn, Âu
    description: { type: String },
    address: { type: String },
    imageUrl: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    coordinates: {
        lat: { type: Number },
        lng: { type: Number },
    },
    reviews: [
        {
            user: String,
            comment: String,
            stars: Number,
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
