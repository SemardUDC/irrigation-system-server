const WaterFlow = require('../models/sensors/water-flow.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');
const {createQueryCondition} = require('../utils/models');

async function getWaterFlowRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    return await WaterFlow.find(queryCondition).limit(count).sort({ date: 'desc' });
}

async function getUltrasonicRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    return await Ultrasonic.find(queryCondition).limit(count).sort({ date: 'desc' });
}

module.exports = {
    getWaterFlowRecords,
    getUltrasonicRecords
}