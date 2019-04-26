const PhMeter = require('../models/sensors/ph-meter.model');
const Pressure = require('../models/sensors/pressure.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');
const WaterFlow = require('../models/sensors/water-flow.model');
const SolenoidValve = require('../models/actuators/solenoid-valve.model');

async function getStateOfSensors(req, res) {
    const lastReportedState = {
        phMeter: [],
        pressure: [],
        ultrasonic: [],
        waterFlow: []
    };

    const queryResults = await Promise.all([
        PhMeter.findLastRecordForEachId(), 
        Pressure.findLastRecordForEachId(),
        Ultrasonic.findLastRecordForEachId(),
        WaterFlow.findLastRecordForEachId()
    ]);

    lastReportedState.phMeter = queryResults[0];
    lastReportedState.pressure = queryResults[1];
    lastReportedState.ultrasonic = queryResults[2];
    lastReportedState.waterFlow = queryResults[3];

    res.send({ lastReportedState });
}

async function getStateOfActuators(req, res) {
    const lastReportedState = {
        solenoidValve: []
    };

    lastReportedState.solenoidValve = await SolenoidValve.findLastRecordForEachId();

    res.send({ lastReportedState });
}

async function getStateOfSystem(req, res) {
    const lastReportedState = {
        sensors: {
            phMeter: [],
            pressure: [],
            ultrasonic: [],
            waterFlow: []
        },
        actuators: {
            solenoidValve: []
        }
    };

    const queryResults = await Promise.all([
        PhMeter.findLastRecordForEachId(),
        Pressure.findLastRecordForEachId(),
        Ultrasonic.findLastRecordForEachId(),
        WaterFlow.findLastRecordForEachId(),
        SolenoidValve.findLastRecordForEachId()
    ]);

    lastReportedState.sensors.phMeter = queryResults[0];
    lastReportedState.sensors.pressure = queryResults[1];
    lastReportedState.sensors.ultrasonic = queryResults[2];
    lastReportedState.sensors.waterFlow = queryResults[3];
    lastReportedState.actuators.solenoidValve = queryResults[4];

    res.send({ lastReportedState });
}

module.exports =  {
    getStateOfActuators,
    getStateOfSensors,
    getStateOfSystem
};