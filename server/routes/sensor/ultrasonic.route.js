const express = require('express');
const asyncHandler = require('express-async-handler');
const sensorCtrl = require('../../controllers/sensor.controller');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);

    const ultrasonicRecords = await sensorCtrl.getUltrasonicRecords(time, value, count);
    res.send({ultrasonicRecords});
}));

router.get('/:identification', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const ultrasonicRecords = await sensorCtrl.getUltrasonicRecords(time, value, count, identification);
    res.send({ultrasonicRecords});
}));

module.exports = router;