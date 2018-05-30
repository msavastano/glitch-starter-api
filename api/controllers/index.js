/**
 * @file this file defines api calls
 */

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.use('/v1/', require('./user/index'));

module.exports = router;
