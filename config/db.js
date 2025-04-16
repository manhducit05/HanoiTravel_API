// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Đã kết nối MongoDB');
    } catch (error) {
        console.error('❌ Kết nối MongoDB thất bại', error);
        process.exit(1);
    }
};

module.exports = connectDB;
