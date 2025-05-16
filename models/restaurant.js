const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String }, // Việt, Nhật, Hàn, Âu...
  description: { type: String },
  address: { type: String },
  imageUrl: { type: String },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number },
  },
  comments: [
    {
      user: String,
      comment: String
    }
  ],
  likeCount: { type: Number, default: 0 },
  dislikeCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
