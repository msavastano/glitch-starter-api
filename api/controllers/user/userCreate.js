const User = require('../../../models/user');
const uuidV4 = require('uuid/v4');
const bunyan = require('bunyan');
const logi = bunyan.createLogger({
  name: 'api:userCreate',
  stream: process.stdout,
  level: 'info',
});

let uuid = null;
const createUser = (req) => {
  uuid = uuidV4();
  return new User({
    uuid,
    name: req.body.name,
    created_at: new Date(),
    updated_at: new Date(),
  })
  .save(null, {method: 'insert'})
  .then((model) => {
    logi.info('User created');
  });
};

module.exports = (req, res) => {
  createUser(req);
  res.status(200).send(uuid);
};
