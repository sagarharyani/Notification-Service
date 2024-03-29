const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Defining a router to handle POST requests for sending notifications
router.post('/', notificationController.sendNotification);

module.exports = router;
