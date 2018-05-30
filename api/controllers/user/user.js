const User = require('../../../models/user');
const uuidV4 = require('uuid/v4');
const bunyan = require('bunyan');
const logi = bunyan.createLogger({
  name: 'api:user',
  stream: process.stdout,
  level: 'info',
});
const util = require('../../util');
const getUser = (uuid) => {
  const filter = { where: { uuid: uuid } };
  return User.query(filter).fetch()
    .then((result) => {
      if (result !== null) {
        logi.info('User fetched');
        logi.info(result);
        return result.attributes
      }
      logi.info(result + ' User not found');
      return { error: 'User not found' };
    });  
}

module.exports = (req, res) => {
  return Promise.resolve()
    .then(() => {
      logi.info('validating input');
      return util.validateSwaggerSchema(req.app.get('ajv'), '#/definitions/GetUserQueryParams', req.query);
    })
    .then((query) => {
      logi.info('user validated input');
      logi.info(query);
      return getUser(query.uuid)
    })
    .then((ret) => {
      logi.info('user validated output');
      logi.info(ret);
      return util.validateSwaggerSchema(req.app.get('ajv'), '#/definitions/GetUserResponse', ret);
    })
    .then((r) => {
      logi.info('sending model or error');
      logi.info(r);
      let status = 200;
      if (r.error) {
        status = 404;
      }
      res.status(status).send(r);
    })
    .catch((err) => {
      logi.info('input validation failed');
      logi.info(err.message);
      res.status(400).send(err.message);
    });
};
