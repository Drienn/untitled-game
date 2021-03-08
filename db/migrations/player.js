exports.up = (knex) => knex.schema.createTable('player', (table) => {
  table.increments();
  table.string('email').unique();
  table.string('name');
});

exports.down = (knex) => knex.schema.dropTable('player');
