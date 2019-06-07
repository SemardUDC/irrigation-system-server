const express = require('express');
const solenoidValveRoutes = require('./solenoid-valve.route');
const pumpMotorRoutes = require('./pump-motor.route');

const router = express.Router();

router.use('/solenoid-valve', solenoidValveRoutes);
router.use('/pump-motor', pumpMotorRoutes);

module.exports = router;