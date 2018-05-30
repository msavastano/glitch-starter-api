const knex = require('../../db');
const beforeEach = require('mocha').beforeEach;
const afterEach = require('mocha').afterEach;

beforeEach((done) => {
  knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => knex.seed.run()
          .then(() => {
            done();
          }));
    });
});

afterEach((done) => {
  knex.migrate.rollback()
    .then(() => {
      done();
    });
});

