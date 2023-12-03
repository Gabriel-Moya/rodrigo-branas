const database = require("./database");

exports.getItemsByType = function (type) {
  return database.execute("SELECT * FROM namegator.item WHERE type = $1", [type]);
}

exports.getItems = function () {
  return database.execute("SELECT * FROM namegator.item");
}

exports.saveItem = function (item) {
  return database.execute("INSERT INTO namegator.item (type, description) VALUES ($1, $2) returning *", [item.type, item.description]);
}

exports.deleteItem = function (id) {
  return database.execute("DELETE FROM namegator.item WHERE id = $1", [id]);
}
