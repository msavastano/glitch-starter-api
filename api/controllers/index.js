/**
 * @file this file defines api calls
 */

const express = require('express');

const router = express.Router();

router.use('/v1/', require('./user/index'));

module.exports = router;
