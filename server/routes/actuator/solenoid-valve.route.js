const express = require('express');
const asyncHandler = require('express-async-handler');
const actuatorCtrl = require('../../controllers/actuator.controller');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);

    const solenoidValveRecords = await actuatorCtrl.getSolenoidValveRecords(time, value, count);
    res.send({solenoidValveRecords});
}));

router.get('/:identification', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const solenoidValveRecords = await actuatorCtrl.getSolenoidValveRecords(time, value, count, identification);
    res.send({solenoidValveRecords});
}));

module.exports = router;