const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');

router.post('/text', translateController.translateText);
router.post('/speak', translateController.textToSpeech);

module.exports = router;
