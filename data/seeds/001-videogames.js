
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("videogames")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("videogames").insert([
        { gametitle: "Doom", devteam: "Bethesda" },
        { gametitle: "CS:GO", devteam: "Valve" },
        { gametitle: "Valorant", devteam: "Riot" },
        { gametitle: "Rust", devteam: "Facepunch" },
        { gametitle: "Mordahu", devteam: "Triternion" },
        { gametitle: "Last Oasis", devteam: "Donkey Punch" }
      ]);
    });
};