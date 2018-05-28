// server.js
// where your node app starts

const Ajv = require('ajv');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const bunyan = require('bunyan');

const logi = bunyan.createLogger({
  name: 'api:server',
  stream: process.stdout,
  level: 'info',
});

app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use('/coverage', express.static('coverage/lcov-report'));

app.use(require('./api/controllers/'));

// Setup swagger-ui endpoint
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');

const showExplorer = false;
const swaggerOptions = { validatorUrl: null };
const swaggerSpec = yaml.safeLoad(fs.readFileSync('./public/swagger.yaml'));
app.use(
  '/v1/swagger-ui',
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerSpec,
    showExplorer,
    swaggerOptions,
  ),
);

const ajv = new Ajv({
  removeAdditional: 'all'
});
ajv.addSchema(swaggerSpec, 'swaggerJson');
app.set('ajv', ajv);
  

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  logi.info(`Your app is listening on port ${listener.address().port}`);
});

module.exports = listener;
