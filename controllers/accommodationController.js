const Accommodation = require('../models/Accommodation');

exports.getAll = async (req, res) => {
    const data = await Accommodation.find();
    res.json(data);
};

exports.create = async (req, res) => {
    const newItem = new Accommodation(req.body);
    await newItem.save();
    res.status(201).json(newItem);
};

exports.getById = async (req, res) => {
    const item = await Accommodation.findById(req.params.id);
    res.json(item);
};

exports.update = async (req, res) => {
    const updated = await Accommodation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.delete = async (req, res) => {
    await Accommodation.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
};
