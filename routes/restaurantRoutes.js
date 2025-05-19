const express = require('express');
const router = express.Router();
const {
    getAllRestaurants,
    createRestaurant,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    getRestaurantComments,
    getTopRestaurants
} = require('../controllers/restaurantController');

router.get('/', getAllRestaurants);
router.post('/', createRestaurant);
router.get('/:id', getRestaurantById);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);
router.get('/:id/comments', getRestaurantComments);
router.get('/top-liked', getTopRestaurants);
module.exports = router;
