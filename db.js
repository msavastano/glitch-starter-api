let env = '';
/* istanbul ignore next */
if (process.env.NODE_ENV === 'test') {
  env = 'test';
} else if (process.env.NODE_ENV === 'dev') {
  env = 'dev';
} else {
  env = 'production';
}
const config = require('./knexfile.js')[env];
const db = require('knex')(config);

module.exports = db;
