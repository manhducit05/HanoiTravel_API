const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    createLocation,
    getLocationsByType,
    getLocationById,
    updateLocation,
    deleteLocation,
    getTopLocations
} = require('../controllers/locationController');

router.get('/', getAllLocations);
router.post('/', createLocation);
router.get('/type/:type', getLocationsByType);
router.get('/:id', getLocationById);
router.put('/:id', updateLocation);
router.delete('/:id', deleteLocation);
router.get('/top-liked', getTopLocations);
module.exports = router;
