const express = require('express');
const waterFlowRoutes = require('./water-flow.route');
const ultrasonicRoutes = require('./ultrasonic.route');

const router = express.Router();

router.use('/water-flow', waterFlowRoutes);
router.use('/ultrasonic', ultrasonicRoutes);

module.exports = router;