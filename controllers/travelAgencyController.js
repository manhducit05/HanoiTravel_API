const TravelAgency = require('../models/travelAgency');

// Lấy tất cả công ty lữ hành
exports.getAllAgencies = async (req, res) => {
    try {
        const agencies = await TravelAgency.find();
        res.json(agencies);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách công ty lữ hành' });
    }
};

// Thêm công ty lữ hành mới
exports.createAgency = async (req, res) => {
    try {
        const newAgency = new TravelAgency(req.body);
        await newAgency.save();
        res.status(201).json(newAgency);
    } catch (error) {
        res.status(400).json({ error: 'Lỗi khi thêm công ty lữ hành' });
    }
};

// Lấy thông tin công ty lữ hành theo ID
exports.getAgencyById = async (req, res) => {
    try {
        const agency = await TravelAgency.findById(req.params.id);
        if (!agency) return res.status(404).json({ error: 'Không tìm thấy công ty lữ hành' });
        res.json(agency);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy thông tin công ty lữ hành' });
    }
};

// Cập nhật thông tin công ty lữ hành
exports.updateAgency = async (req, res) => {
    try {
        const updatedAgency = await TravelAgency.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAgency);
    } catch (error) {
        res.status(400).json({ error: 'Lỗi khi cập nhật công ty lữ hành' });
    }
};

// Xóa công ty lữ hành
exports.deleteAgency = async (req, res) => {
    try {
        await TravelAgency.findByIdAndDelete(req.params.id);
        res.json({ message: 'Đã xóa công ty lữ hành' });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi xóa công ty lữ hành' });
    }
};
// Like agency
exports.likeAgency = async (req, res) => {
    try {
        const agency = await TravelAgency.findByIdAndUpdate(
            req.params.id,
            { $inc: { likeCount: 1 } },
            { new: true }
        );
        res.json(agency);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi like công ty lữ hành' });
    }
};

// Dislike agency
exports.dislikeAgency = async (req, res) => {
    try {
        const agency = await TravelAgency.findByIdAndUpdate(
            req.params.id,
            { $inc: { dislikeCount: 1 } },
            { new: true }
        );
        res.json(agency);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi dislike công ty lữ hành' });
    }
};
// Thêm bình luận
exports.commentAgency = async (req, res) => {
    const { user, comment } = req.body;
    try {
        const agency = await TravelAgency.findByIdAndUpdate(
            req.params.id,
            { $push: { comments: { user, comment } } },
            { new: true }
        );
        res.json(agency);
    } catch (error) {
        res.status(400).json({ error: 'Lỗi khi thêm bình luận' });
    }
};
// Lấy danh sách bình luận
exports.getAgencyComments = async (req, res) => {
    try {
        const agency = await TravelAgency.findById(req.params.id).select('comments');
        if (!agency) {
            return res.status(404).json({ error: 'Không tìm thấy công ty lữ hành' });
        }
        res.json(agency.comments);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy bình luận' });
    }
};
// Lấy danh sách công ty lữ hành được thích nhiều nhất
exports.getTopLikedAgencies = async (req, res) => {
    try {
        const agencies = await TravelAgency.find().sort({ likeCount: -1 });
        res.json(agencies);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách công ty được thích nhiều nhất' });
    }
};

