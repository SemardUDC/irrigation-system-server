const express = require('express');
const waterFlowRoutes = require('./water-flow.route');
const ultrasonicRoutes = require('./ultrasonic.route');
const phMeterRoutes = require('./ph-meter.route');
const pressureRoutes = require('./pressure.route');

const router = express.Router();

router.use('/water-flow', waterFlowRoutes);
router.use('/ultrasonic', ultrasonicRoutes);
router.use('/ph-meter', phMeterRoutes);
router.use('/pressure', pressureRoutes);

module.exports = router;