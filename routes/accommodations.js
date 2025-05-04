const express = require('express');
const router = express.Router();
const accommodationController = require('../controllers/accommodationController');

router.get('/', accommodationController.getAll);
router.post('/', accommodationController.create);
router.get('/:id', accommodationController.getById);
router.put('/:id', accommodationController.update);
router.delete('/:id', accommodationController.delete);

module.exports = router;
