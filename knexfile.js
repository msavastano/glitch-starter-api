// Update with your config settings.

module.exports = {

  dev: {
    client: 'sqlite3',
    connection: {
      filename: './.data/sqlite.db',
    },
    seeds: {
      directory: './seeds/dev',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './.data/testSqlite.db',
    },
    seeds: {
      directory: './seeds/test',
    },
    migrations: {
      tableName: 'knex_migrations_test',
    },
    useNullAsDefault: true,
  },
};
