const SolenoidValve = require('../models/actuators/solenoid-valve');
const { createQueryCondition } = require('../utils/models');

async function getSolenoidValveRecords(time, value, count, identification = undefined) {
    const queryCondition = createQueryCondition(time, value, identification);
    return await SolenoidValve.find(queryCondition).limit(count).sort({ date: 'desc' });
}

module.exports = {
    getSolenoidValveRecords
}