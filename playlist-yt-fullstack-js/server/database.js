const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "1q2w3e4r@#$",
  host: "localhost",
  database: "namegator",
  port: 5432
});

client.connect();

exports.execute = function (query, values) {
  return new Promise((resolve, reject) => {
    client.query(query, values, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
}
