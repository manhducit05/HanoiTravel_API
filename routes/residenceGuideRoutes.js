// routes/residenceGuideRoutes.js
const express = require('express');
const router = express.Router();
const residenceGuideController = require('../controllers/residenceGuideController');

router.get('/', residenceGuideController.getAllGuides);
router.post('/', residenceGuideController.createGuide);

module.exports = router;
