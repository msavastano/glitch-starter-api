/**
 * @file this file defines
 */

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/user', require('./user'));

// router.post('/user', require('./userCreate'));

module.exports = router;
