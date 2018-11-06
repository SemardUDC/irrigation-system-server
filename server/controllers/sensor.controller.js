const WaterFlow = require('../models/sensors/water-flow.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');
const { createQueryCondition } = require('../utils/models');

async function getWaterFlowRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    return await WaterFlow.find(queryCondition).limit(count).sort({ date: 'desc' });
}

async function getUltrasonicRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const ultrasonicRecords = await Ultrasonic.find(queryCondition).limit(count).sort({ date: 'desc' });
    res.send({ ultrasonicRecords });
}

module.exports = {
    getWaterFlowRecords,
    getUltrasonicRecords
}