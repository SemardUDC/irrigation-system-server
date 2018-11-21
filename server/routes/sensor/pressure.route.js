const express = require('express');
const sensorCtr = require('../../controllers/sensor.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(sensorCtr.getPressureRecords));
router.get('/:identification', asyncHandler(sensorCtr.getPressureRecords));

module.exports = router;