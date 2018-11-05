const express = require('express');
const router = express.Router();
const sensorCtrl = require('../controllers/sensor.controller');
const asyncHandler = require('express-async-handler');

module.exports = router;

router.get('/water-flow', asyncHandler(async (req, res) => {
    try {
        const time = String(req.query.time);
        const value = Number(req.query.value);
        const count = Number(req.query.count);
        
        const waterFlowRecords = await sensorCtrl.getWaterFlowRecords(time, value, count);
        res.send({waterFlowRecords});
    } catch (e) {
        console.log(`Error at ${req.path}: ${e.message}`);
        res.status(500).send({ error: e.message });
    }
}));