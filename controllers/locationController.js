const { get } = require('mongoose');
const Location = require('../models/location');

// Lấy tất cả địa danh
const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi server khi lấy địa danh' });
    }
};

// Tạo mới địa danh
const createLocation = async (req, res) => {
    try {
        const newLocation = new Location(req.body);
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(400).json({ error: 'Tạo địa danh thất bại' });
    }
};

// Lọc theo loại
const getLocationsByType = async (req, res) => {
    try {
        const { type } = req.params;
        const results = await Location.find({ type });
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: 'Không lọc được loại địa danh' });
    }
};

// Lấy địa danh theo ID
const getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) return res.status(404).json({ error: 'Không tìm thấy' });
        res.json(location);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi tìm địa danh' });
    }
};

// Cập nhật
const updateLocation = async (req, res) => {
    try {
        const updated = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Cập nhật thất bại' });
    }
};

// Xoá
const deleteLocation = async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xoá địa danh' });
    } catch (err) {
        res.status(500).json({ error: 'Xoá thất bại' });
    }
};
const getTopLocations = async (req, res) => {
    try {
        const locations = await Location.find().sort({ likeCount: -1 });
        res.json(locations);
    } catch (err) {
        console.error('❌ Error fetching top locations:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};
const getLocationComments = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id).select('comments');
        if (!location) return res.status(404).json({ error: 'Không tìm thấy địa điểm' });
        res.json(location.comments);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy bình luận địa điểm' });
    }
};

module.exports = {
    getAllLocations,
    createLocation,
    getLocationsByType,
    getLocationById,
    updateLocation,
    deleteLocation,
    getLocationComments,
    getTopLocations
};
