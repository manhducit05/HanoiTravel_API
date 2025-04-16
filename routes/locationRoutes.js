const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    createLocation,
    getLocationsByType,
    getLocationById,
    updateLocation,
    deleteLocation,
} = require('../controllers/locationController');

router.get('/', getAllLocations);
router.post('/', createLocation);
router.get('/type/:type', getLocationsByType);
router.get('/:id', getLocationById);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;
