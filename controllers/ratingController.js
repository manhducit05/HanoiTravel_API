const Rating = require('../models/Rating');

exports.getRatings = async (req, res) => {
    const ratings = await Rating.find({ type: req.params.type, refId: req.params.refId });
    res.json(ratings);
};

exports.addRating = async (req, res) => {
    const { score, comment } = req.body;
    const newRating = new Rating({
        type: req.params.type,
        refId: req.params.refId,
        score,
        comment
    });
    await newRating.save();
    res.status(201).json(newRating);
};
