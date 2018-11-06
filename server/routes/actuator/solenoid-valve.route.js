const express = require('express');
const asyncHandler = require('express-async-handler');
const actuatorCtrl = require('../../controllers/actuator.controller');

const router = express.Router();

router.get('/', asyncHandler(actuatorCtrl.getSolenoidValveRecords));
router.get('/:identification', asyncHandler(actuatorCtrl.getSolenoidValveRecords));

module.exports = router;