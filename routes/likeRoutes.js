const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// POST /api/likes/:type/:refId?action=like|dislike
router.post('/:type/:refId', likeController.handleLike);

module.exports = router;
