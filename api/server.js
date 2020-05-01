const express = require("express");

const VideoGames = require("../videogames/vgModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  VideoGames.getAll()
    .then(vg => {
      res.status(200).json(vg);
    })
    .catch(error => {
      res.status(500).json({ message: "oops, nope" });
    });
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;

  VideoGames.remove(id)
    .then(vg => {
      if (vg) {
        res.status(201).json({ message: "deleted!" });
      } else {
        res.status(404);
      }
    })
    .catch(error => {
      res.status(500);
    });
});

module.exports = server;