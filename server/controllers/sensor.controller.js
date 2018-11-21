const WaterFlow = require('../models/sensors/water-flow.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');
const Pressure = require('../models/sensors/pressure.model');
const PhMeter = require('../models/sensors/ph-meter.model');
const { createQueryCondition } = require('../utils/models');


async function getWaterFlowRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const waterFlowRecords = await WaterFlow.find(queryCondition).limit(count).sort({ date: 'desc' });

    res.send({ waterFlowRecords });
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

async function getPressureRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const pressureRecords = await Pressure.find(queryCondition).limit(count).sort({ date: 'desc' });

    res.send({ pressureRecords });
}

async function getPhMeterRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const phMeterRecords = await PhMeter.find(queryCondition).limit(count).sort({ date: 'desc' });

    res.send({ phMeterRecords });
}

module.exports = {
    getWaterFlowRecords,
    getUltrasonicRecords,
    getPhMeterRecords,
    getPressureRecords
}