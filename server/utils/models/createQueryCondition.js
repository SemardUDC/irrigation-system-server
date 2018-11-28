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

module.exports = createQueryCondition;