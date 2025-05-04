// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const aiRoutes = require('./routes/aiRoutes');
const locationRoutes = require('./routes/locationRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const travelAgencyRoutes = require('./routes/travelAgencyRoutes');
const residenceGuide = require('./routes/residenceGuideRoutes')
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối DB
connectDB();

// Routes
app.use('/api/chat', aiRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/travel-agencies', travelAgencyRoutes);
app.use('/api/residenceGuide', residenceGuide);
app.use('/api/accommodations', );
app.use('/api/translate', );
app.use('/api/ratings', );


// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
