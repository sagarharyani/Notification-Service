const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const notificationRouter = require('./routes/notification');

// Using the bodyParser middleware to parse JSON-encoded request bodies
app.use(bodyParser.json());

// Mounting the notificationRouter to handle requests with path starting with '/notification'
app.use('/notification', notificationRouter);

const port = 3000;
// Starting the server and listening for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Notification service listening at http://localhost:${port}`);
});

