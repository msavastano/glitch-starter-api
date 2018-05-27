const describe = require('mocha').describe;
const it = require('mocha').it;
const rewire = require('rewire');
const assert = require('chai').assert
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get user from DB', () => {
  it('it should return user model', () => {
    const user = rewire('./user.js');
    const getUser = user.__get__('getUser');
    const testUser = getUser('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
    return testUser
      .then((u) => {
        assert.equal(u.name, 'Addy');
      });
  });
  
  it('it should return error', () => {
    const user = rewire('./user.js');
    const getUser = user.__get__('getUser');
    const testUser = getUser('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12');
    return testUser
      .then((u) => {
        assert.property(u, 'error');
        assert.equal(u.error, 'User not found');
      });
  });
});

describe('test api enpdts', () => {
  it('it should return 200 status', (done) => { 
    chai.request('https://api-essentials.glitch.me')
      .get('/v1/user?uuid=a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11')
      .end((err, res) => {
        console.log('HELLLLLLOOOOOOOO');
        assert.equal(res.body.name, 'Addy');
        assert.equal(res.status, 200);
        done();
      });
  });
  
  it('it should return 404 status', (done) => { 
    chai.request('https://api-essentials.glitch.me')
      .get('/v1/user?uuid=a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a1')
      .end((err, res) => {
        assert.property(res.body, 'error');
        assert.equal(res.status, 404);
        done();
      });
  });
  
  it('it should return 404 status', (done) => { 
    chai.request('https://api-essentials.glitch.me')
      .get('/v1/user?uid=a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a1')
      .end((err, res) => {
        assert.equal(res.status, 400);
        assert.equal(res.body[0].message, 'should have required property \'uuid\'');
        done();
      });
  });
});

