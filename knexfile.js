// Update with your config settings.

module.exports = {

  dev: {
    client: 'sqlite3',
    connection: {
      filename: './.data/sqlite.db'
    },
    seeds: {
      directory: './seeds/dev'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './.data/sqlite.db'
    },
    seeds: {
      directory: './seeds/test'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
