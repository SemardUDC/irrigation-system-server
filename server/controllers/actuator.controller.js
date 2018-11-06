const SolenoidValve = require('../models/actuators/solenoid-valve');
const { createQueryCondition } = require('../utils/models');

async function getSolenoidValveRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const solenoidValveRecords = await SolenoidValve.find(queryCondition).limit(count).sort({ date: 'desc' });

    res.send({ solenoidValveRecords });
}

module.exports = {
    getSolenoidValveRecords
}