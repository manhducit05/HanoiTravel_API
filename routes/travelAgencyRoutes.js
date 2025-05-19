const express = require('express');
const router = express.Router();
const travelAgencyController = require('../controllers/travelAgencyController');

router.get('/', travelAgencyController.getAllAgencies);
router.post('/', travelAgencyController.createAgency);
router.get('/:id', travelAgencyController.getAgencyById);
router.put('/:id', travelAgencyController.updateAgency);
router.delete('/:id', travelAgencyController.deleteAgency);
router.post('/:id/like', travelAgencyController.likeAgency);
router.post('/:id/dislike', travelAgencyController.dislikeAgency);
router.post('/:id/comment', travelAgencyController.commentAgency);
router.get('/:id/comments', travelAgencyController.getAgencyComments);
router.get('/top-liked', travelAgencyController.getTopLikedAgencies);

module.exports = router;
