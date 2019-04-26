const express = require('express');
const stateCtr = require('../controllers/state.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/sensors', asyncHandler(stateCtr.getStateOfSensors));
router.get('/actuators', asyncHandler(stateCtr.getStateOfActuators));
router.get('/', asyncHandler(stateCtr.getStateOfSystem));

module.exports = router;