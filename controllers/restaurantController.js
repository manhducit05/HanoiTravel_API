const Restaurant = require('../models/restaurant');

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách nhà hàng' });
    }
};

const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = new Restaurant(req.body);
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (err) {
        res.status(400).json({ error: 'Tạo nhà hàng thất bại' });
    }
};

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Không tìm thấy nhà hàng' });
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi server' });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const updated = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Cập nhật thất bại' });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xoá nhà hàng' });
    } catch (err) {
        res.status(500).json({ error: 'Xoá thất bại' });
    }
};

const getRestaurantComments = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id).select('comments');
        if (!restaurant) return res.status(404).json({ error: 'Không tìm thấy nhà hàng' });
        res.json(restaurant.comments);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy bình luận nhà hàng' });
    }
};

const getTopRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find().sort({ likeCount: -1 });
        res.json(restaurants);
    } catch (err) {
        console.error('❌ Error fetching top restaurants:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllRestaurants,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    getRestaurantComments,
    getTopRestaurants
};
