require('dotenv').config({ path: '.env', debug: true });


const { Pool } = require('pg');

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// Export the pool object to be used throughout the app
module.exports = pool;
