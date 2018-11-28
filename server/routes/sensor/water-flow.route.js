const express = require('express');
const sensorCtrl = require('../../controllers/sensor.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(sensorCtrl.getWaterFlowRecords));
router.get('/:identification', asyncHandler(sensorCtrl.getWaterFlowRecords));

module.exports = router;