const express = require('express');
const router = express.Router();
const travelAgencyController = require('../controllers/travelAgencyController');

router.get('/', travelAgencyController.getAllAgencies);
router.post('/', travelAgencyController.createAgency);
router.get('/:id', travelAgencyController.getAgencyById);
router.put('/:id', travelAgencyController.updateAgency);
router.delete('/:id', travelAgencyController.deleteAgency);

module.exports = router;
