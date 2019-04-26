const express = require('express');
const sensorRoutes = require('./sensor/index.route');
const actuatorRoutes = require('./actuator/index.route');
const stateRoutes = require('./state.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/sensor', sensorRoutes);
router.use('/actuator', actuatorRoutes);
router.use('/state', stateRoutes);

module.exports = router;
