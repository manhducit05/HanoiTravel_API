// models/ResidenceGuide.js
const mongoose = require('mongoose');

const ResidenceGuideSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    link: String
});

module.exports = mongoose.model('ResidenceGuide', ResidenceGuideSchema);
