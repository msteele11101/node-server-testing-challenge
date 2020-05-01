exports.up = function(knex) {
    return knex.schema.createTable("videogames", tbl => {
      tbl.increments();
      tbl.string("gametitle", 128).notNullable();
      tbl.string("devteam", 128).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("videogames");
  };
