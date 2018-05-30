const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;
const expect = require('chai').expect;
const Ajv = require('ajv');
const fs = require('fs');
const yaml = require('js-yaml');
const swaggerSpec = yaml.safeLoad(fs.readFileSync('./public/swagger.yaml'));
const util = require('./util');
const ajv = new Ajv({
  removeAdditional: 'all',
});
ajv.addSchema(swaggerSpec, 'swaggerJson');

describe('swagger validation util', () => {
  it('it should return payload', () => {
    const schema = '#/definitions/GetUserQueryParams';
    const payload = {uuid: '0000-uuid'};
    const ret = util.validateSwaggerSchema(ajv, schema, payload);
    assert.equal(ret, payload);
  });

  it('it should return thrown error', () => {
    expect(util.validateSwaggerSchema).to.throw(Error);
  });
});
