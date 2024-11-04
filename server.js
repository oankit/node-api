// server.js
const express = require('express');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/apiRoutes');

dotenv.config(); // Load environment variables

console.log('DB Password:', process.env.DB_PASSWORD);
console.log('Password Type:', typeof process.env.DB_PASSWORD); // Should output 'string'

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
