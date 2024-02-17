const amqp = require('amqplib');
const ChannelHandlers = require('./handlers');

// Connecting to RabbitMQ server and consuming messages from the queue
async function consumeMessages() {
  const queue = 'notification_queue';
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  // Asserting the existence of the queue
  await channel.assertQueue(queue);

  // Consuming messages from the queue
  channel.consume(queue, async (msg) => {
    // Extracting message content (notification data)
    const { userId, message, channels } = JSON.parse(msg.content.toString());

    console.log(`Received notification for user ${userId}`);

    for (const channel of channels) {
      if (ChannelHandlers[channel]) {
        await ChannelHandlers[channel].send(userId, message);
      } else {
        console.error(`Channel handler not found for ${channel}`);
      }
    }

    channel.ack(msg);
  });
}
