const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant');
const Location = require('../models/location');

exports.handleLike = async (req, res) => {
    const { type, refId } = req.params;
    const { action } = req.query; // like | dislike | unlike | undislike

    try {
        if (!mongoose.Types.ObjectId.isValid(refId)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }

        let Model;
        if (type === 'restaurant') Model = Restaurant;
        else if (type === 'location') Model = Location;
        else return res.status(400).json({ message: 'Invalid type' });

        const item = await Model.findById(refId);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        if (action === 'like') {
            item.likeCount = Math.max(0, (item.likeCount || 0) + 1);
        } else if (action === 'dislike') {
            item.dislikeCount = Math.max(0, (item.dislikeCount || 0) + 1);
        } else if (action === 'unlike') {
            item.likeCount = Math.max(0, (item.likeCount || 0) - 1);
        } else if (action === 'undislike') {
            item.dislikeCount = Math.max(0, (item.dislikeCount || 0) - 1);
        } else {
            return res.status(400).json({ message: 'Invalid action' });
        }

        await item.save();
        res.json({
            message: `Action ${action} performed`,
            likes: item.likeCount,
            dislikes: item.dislikeCount
        });

    } catch (err) {
        console.error('❌ Like error:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};
