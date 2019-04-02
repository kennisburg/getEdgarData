
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickers', function(table) {
    table.string('ticker').notNullable();
    table.string('name').notNullable();
    table.string('exchange').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickers')
};
