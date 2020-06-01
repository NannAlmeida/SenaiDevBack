
exports.up = function(knex) {
  return knex.schema.createTable('subjects', (table) => {
      table.increments().notNullable();
      table.string('name', 50).notNullable();
      table.string('playlistId', 100).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('subjects');
};
