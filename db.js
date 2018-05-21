let env = '';
if (process.env.NODE_ENV === 'test') {
  env = 'test';
} else if (process.env.NODE_ENV === 'dev') {
  env = 'dev';
} else {
  env = 'production';
}
console.log(env);
const config = require('./knexfile.js')[env];
console.log(config);
const db = require('knex')(config);

module.exports = db;