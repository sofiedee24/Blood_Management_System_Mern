// server.js
const express = require('express');
const app = express();

// Set a port (you can use 5000 or whatever you like)
const PORT = process.env.PORT || 5000;

// Middleware (optional, but useful for JSON requests)
app.use(express.json());

// Simple route to test server
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server and log a message
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
