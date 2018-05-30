
exports.up = (knex, Promise) => {
  const addUuid = knex.schema.table('users', (t) => {
    t.uuid('uuid').notNull().defaultTo('00000000-0000-0000-0000-000000000000');
  });

  return Promise.all([addUuid]);
};

exports.down = (knex, Promise) => {
  const dropVerify = knex.schema.table('users', (t) => {
    t.dropColumn('uuid');
  });

  return Promise.all([dropVerify]);
};
