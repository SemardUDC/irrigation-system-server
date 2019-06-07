const express = require('express');
const asyncHandler = require('express-async-handler');
const PumpMotorController = require('../../controllers/actuator.controller');

const router = express.Router();

router.get('/', asyncHandler(PumpMotorController.getPumpMotorRecords));
router.get('/:identification', asyncHandler(PumpMotorController.getPumpMotorRecords));

router.post('/', asyncHandler(PumpMotorController.manipulatePumpMotor));
router.post('/:identification', asyncHandler(PumpMotorController.manipulatePumpMotor));

module.exports = router;