const WaterFlow = require('../models/sensors/water-flow.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');
const moment = require('moment');

function createQueryCondition(time, value, identification = undefined) {
    let dateSelected = undefined;
    let queryCondition = (identification) ? { identification } : {};

    if (time === 'today') {
        dateSelected = moment(Date.now());
    } else if (time === 'day') {
        if (!value) {
            throw new Error(`Uncompleted query parameters, received time but no value.`);
        }
        dateSelected = moment(value, 'YYYYMMDD');
        if (!dateSelected.isValid()) {
            throw new Error(`Invalid query 'value' when parsing to a date: ${value}`);
        }
    }

    if (dateSelected) {
        queryCondition.date = {
            $gte: dateSelected.startOf('day').valueOf(), $lte: dateSelected.endOf('day').valueOf()
        }
    }

    return queryCondition;
}

async function getWaterFlowRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    const waterRecords = await WaterFlow.find(queryCondition).limit(count).sort({ date: 'desc' });
    if (!waterRecords) {
        throw new Error('No water-flow record was found.');
    }
    return waterRecords;
}

async function getUltrasonicRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    const ultrasonicRecords = await Ultrasonic.find(queryCondition).limit(count).sort({ date: 'desc' });
    if (!ultrasonicRecords) {
        throw new Error('No ultrasonic record was found.');
    }
    return ultrasonicRecords;
}

module.exports = {
    getWaterFlowRecords,
    getUltrasonicRecords
}