const express = require('express');
const asyncHandler = require('express-async-handler');
const sensorCtrl = require('../../controllers/sensor.controller');

const router = express.Router();

router.get('/', asyncHandler(sensorCtrl.getUltrasonicRecords));
router.get('/:identification', asyncHandler(sensorCtrl.getUltrasonicRecords));

module.exports = router;