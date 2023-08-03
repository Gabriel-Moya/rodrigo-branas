const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  password: '1q2w3e4r@#$',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
});

module.exports = db;
