Flow Explanation:

Notification Creation:
When a client wants to send a notification, it sends a request to the Notification Service, specifying the user ID, message, and desired channels.
The Notification Service receives the request and formats it into a message, then pushes it to the message queue.

Queue Handling:
The message queue (RabbitMQ) stores incoming notification requests in a queue.

Notification Processing:
The Worker, a separate process, continuously listens for messages from the queue.
When a message is received, the Worker consumes it.

Channel Handling:
The Worker extracts the user ID, message, and channels from the consumed message.
It dispatches the notification data to the appropriate channel handlers based on the specified channels.
Channel handlers perform the necessary actions to send notifications through their respective channels.

Notification Delivery:
Each channel handler executes the logic to send notifications via the specified channels (e.g., Push notification handler sends notifications to mobile devices, Email handler sends emails, etc.).

Logging and Database Update:
As notifications are processed, the system logs relevant information such as delivery status and timestamps.
Notification data may also be stored in the database for further analysis, tracking, and reporting purposes.

Below is the diagram for reference: 


![Drawing](https://github.com/sagarharyani/Notification-Service/assets/103858157/e4c7f125-e73b-4462-acb0-d721175bf5ac)
