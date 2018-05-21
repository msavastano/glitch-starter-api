
exports.up = (knex, Promise) => {
  const petsTable = knex.schema.createTable('pets', (table) => {
    table.increments();
    table.string('type');
    table.timestamps();
  });

  return Promise.all([petsTable]);
};

exports.down = (knex, Promise) => {
  const one = knex.schema.dropTable('pets');
  return Promise.all([one]);
};