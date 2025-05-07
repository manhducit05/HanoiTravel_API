const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.get('/:type/:refId', ratingController.getRatings); // refId: ID of restaurant/hotel/agency
router.post('/:type/:refId', ratingController.addRating);

module.exports = router;
