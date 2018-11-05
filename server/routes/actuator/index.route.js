const express = require('express');
const solenoidValveRoutes = require('./solenoid-valve.route');

const router = express.Router();

router.use('/solenoid-valve', solenoidValveRoutes);

module.exports = router;