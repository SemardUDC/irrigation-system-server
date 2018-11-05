const express = require('express');
const sensorCtrl = require('../../controllers/sensor.controller');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    try {
        const time = String(req.query.time);
        const value = Number(req.query.value);
        const count = Number(req.query.count);

        const waterFlowRecords = await sensorCtrl.getWaterFlowRecords(time, value, count);
        res.send({ waterFlowRecords });
    } catch (e) {
        console.log(`Error at ${req.path}: ${e.message}`);
        res.status(500).send({ error: e.message });
    }
}));

router.get('/:identification', async (req, res) => {
    try {
        const time = String(req.query.time);
        const value = Number(req.query.value);
        const count = Number(req.query.count);
        const identification = req.params.identification;

        const waterFlowRecords = await sensorCtrl.getWaterFlowRecords(time, value, count, identification);
        res.send({waterFlowRecords});
    } catch(e) {
        console.log(`Error at ${req.path}: ${e.message}`);
        res.status(500).send({ error: e.message });
    }
});

module.exports = router;