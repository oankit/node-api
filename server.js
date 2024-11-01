// server.js
const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/apiRoutes');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Base route to test server
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// API Routes
app.use('/api', apiRoutes);

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
