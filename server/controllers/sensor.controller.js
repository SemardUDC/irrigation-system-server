const WaterFlow = require('../models/sensors/water-flow.model');
const moment = require('moment');

async function getWaterFlowRecords(time, value, count, identification = undefined) {
    let dateSelected = undefined;
    let dateQueryCondition = (identification) ? { identification } : {};

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
        dateQueryCondition.date = {
            $gte: dateSelected.startOf('day').valueOf(), $lte: dateSelected.endOf('day').valueOf()
        }
    }
    const waterRecords = await WaterFlow.find(dateQueryCondition).limit(count).sort({ date: 'desc' });
    if (!waterRecords) {
        throw new Error('No water-flow record was found.');
    }
    return waterRecords;
}

module.exports = {
    getWaterFlowRecords
}