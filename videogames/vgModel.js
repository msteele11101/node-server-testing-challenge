const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll,
  remove
};

function insert({ gametitle, devteam }) {
  return db("videogames").insert({ gametitle, devteam });
}

function getAll() {
  return db("videogames");
}

function remove(id) {
  return db("videogames")
    .where({ id })
    .del();
}