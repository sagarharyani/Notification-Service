const amqp = require('amqplib');

class NotificationService {
  static async sendNotification(userId, message, channels) {
    const queue = 'notification_queue';

    // Establishing a connection to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost');
    
    // Creating a channel for communication over the connection
    const channel = await connection.createChannel();
    
    // Asserting the existence of the queue
    await channel.assertQueue(queue);
    
    // Sending the notification data to the queue in JSON format
    channel.sendToQueue(queue, Buffer.from(JSON.stringify({ userId, message, channels })));
    
    console.log(`Notification for user ${userId} pushed to the queue`);

    await channel.close();
    
    await connection.close();
  }
}

module.exports = NotificationService;

