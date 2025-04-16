// controllers/residenceGuideController.js
const ResidenceGuide = require('../models/residenceGuide');

exports.getAllGuides = async (req, res) => {
    try {
        const guides = await ResidenceGuide.find();
        res.json(guides);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách hướng dẫn' });
    }
};

exports.createGuide = async (req, res) => {
    try {
        const newGuide = new ResidenceGuide(req.body);
        await newGuide.save();
        res.status(201).json(newGuide);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi tạo hướng dẫn' });
    }
};
