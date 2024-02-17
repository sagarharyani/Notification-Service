const NotificationService = require('../services/notificationService');

exports.sendNotification = async (req, res) => {
  try {
    // Extracting userId, message, and channels from the request body
    const { userId, message, channels } = req.body;

    await NotificationService.sendNotification(userId, message, channels);

    // Sending a success response back to the client
    res.status(200).json({ success: true, message: 'Notification sent successfully' });

  } catch (error) {
    // Sending an error response back to the client
    console.error('Error sending notification:', error);

    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
