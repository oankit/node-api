const fs = require('fs');
require('dotenv').config({ path: '../.env' });
const pool = require('../config/db'); // Assuming db.js has PostgreSQL connection setup;

const loadJSONData = async () => {
  const data = JSON.parse(fs.readFileSync('users.json', 'utf8'));
  for (const user of data) {
    try {
      await pool.query(
        'INSERT INTO users (id, name, email) VALUES ($1, $2, $3)',
        [user.id, user.name, user.email]
      );
    } catch (err) {
      console.error('Error inserting data:', err);
    }
  }
  console.log('Data loading complete');
};

loadJSONData();
