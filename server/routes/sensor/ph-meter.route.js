const express = require('express');
const sensorCtr = require('../../controllers/sensor.controller');

const router = express.Router();

router.get('/', sensorCtr.getPhMeterRecords);
router.get('/:identification', sensorCtr.getPhMeterRecords);

module.exports = router;