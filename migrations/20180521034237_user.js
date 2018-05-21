exports.up = (knex, Promise) => {
  const itemsTable = knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name');
    table.timestamps();
  });

  return Promise.all([itemsTable]);
};

exports.down = (knex, Promise) => {
  const one = knex.schema.dropTable('users');
  return Promise.all([one]);
};