const express = require('express');
const sensorCtr = require('../../controllers/sensor.controller');

const router = express.Router();

router.get('/', sensorCtr.getPressureRecords);
router.get('/:identification', sensorCtr.getPressureRecords);

module.exports = router;