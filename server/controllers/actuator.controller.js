const SolenoidValve = require('../models/actuators/solenoid-valve.model');
const PumpMotor = require('../models/actuators/pump-motor.model');
const mqttClient = require('../config/mqtt');
const { createQueryCondition, arrangeByIdentification } = require('../utils/models');

async function getSolenoidValveRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const solenoidValveRecords = arrangeByIdentification(await SolenoidValve.find(queryCondition).limit(count).sort({ date: 'desc' }));

    res.send({ solenoidValveRecords });
}

async function manipulateSolenoidValve(req, res) {
    const identification =  (req.params.identification) ? Number(req.params.identification) : '*';
    const action = String(req.body.action);

    if (!['open', 'close'].includes(action)) {
        return res.status(400).send({ message: `Action field must be 'open' or 'close'` });
    } else if (identification != '*' && typeof (identification) != 'number') {
        return res.status(400).send({ message: `Identification field invalid, must be a number or '*' symbol.` });
    }

    const message = {
        identification,
        action
    };

    const messageJSON = JSON.stringify(message);

    try {
        await mqttClient.publish('irrigation-system/actuator/solenoid-valve/set', messageJSON);
        return res.send({ solenoidValve: { ...message, response: 'Message sent successfully to mqtt topic.' } });
    } catch (e) {
        return res.status(400).send({ message: `An error ocurred while publishing the message ${err}` });
    }
}

async function getPumpMotorRecords(req, res) {
    const time = String(req.query.time);
    const value = Number(req.query.value);
    const count = Number(req.query.count);
    const identification = req.params.identification;

    const queryCondition = createQueryCondition(time, value, identification);
    const pumpMotorRecords = arrangeByIdentification(await PumpMotor.find(queryCondition).limit(count).sort({ date: 'desc' }));

    res.send({ pumpMotorRecords });
}

async function manipulatePumpMotor(req, res) {
    const identification = (req.params.identification) ? Number(req.params.identification) : '*';
    const action = req.body.action;
    console.log('Identification is: ', identification);
    console.log('Action is: ', action);
    if (!['activate', 'deactivate'].includes(action)) {
        return res.status(400).send(`Action passed is invalid. Must be 'activate' or 'deactivate', was: ${action}`);
    }

    const message = {
        identification,
        action
    }

    const messageJSON = JSON.stringify(message);

    try {
        await mqttClient.publish('irrigation-system/actuator/pump-motor/set', messageJSON);
        return res.send({ pumpMotor: { ...message, response: 'Message sent successfully to mqtt topic' } });
    } catch (e) {
        res.status(400).send({ message: `An error ocurred while publishing the message ${err}` });
    }
}

module.exports = {
    getSolenoidValveRecords,
    manipulateSolenoidValve,
    getPumpMotorRecords,
    manipulatePumpMotor
}