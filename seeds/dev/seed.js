exports.seed = (knex, Promise) => {
  const usersInsert = knex('users').insert([
    {
      name: 'Addy',
      uuid: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Anias',
      uuid: 'bede4ede-aad3-11e7-abc4-cec278b6b50a',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
  return Promise.all([usersInsert]);
};
