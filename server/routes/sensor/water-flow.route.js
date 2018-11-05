const express = require('express');
const sensorCtrl = require('../../controllers/sensor.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);

    const waterFlowRecords = await sensorCtrl.getWaterFlowRecords(time, value, count);
    res.send({ waterFlowRecords });
}));

router.get('/:identification', asyncHandler(async (req, res) => {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const waterFlowRecords = await sensorCtrl.getWaterFlowRecords(time, value, count, identification);
    res.send({ waterFlowRecords });
}));

module.exports = router;