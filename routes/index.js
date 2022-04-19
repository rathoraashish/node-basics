const express = require('express');
const router = express.Router();

router.use('/sendmail', require('./sendmail'));
router.use('/user', require('./user'));
router.use('/getdata', require('./getdata'));

module.exports = router;