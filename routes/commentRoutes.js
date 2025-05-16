const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// POST /api/comments/:type/:refId
router.post('/:type/:refId', commentController.addComment);

module.exports = router;
