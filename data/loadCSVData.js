const fs = require('fs');
const csv = require('csv-parser');
const pool = require('./db'); // Assuming db.js has PostgreSQL connection setup

const loadCSVData = async () => {
  const users = [];
  fs.createReadStream('users.csv')
    .pipe(csv())
    .on('data', (row) => {
      users.push(row);
    })
    .on('end', async () => {
      console.log('CSV file successfully processed');
      for (const user of users) {
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
    });
};

loadCSVData();
