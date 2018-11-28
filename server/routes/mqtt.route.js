const controllersObject = require('../controllers/mqtt.controller');

const sensorPrefix = 'irrigation-system/sensor/';
const actuatorPrefix = 'irrigation-system/actuator/';
const statePrefix = 'irrigation-system/';

const topics = {
    phMeter: sensorPrefix + 'ph-meter',
    waterFlow: sensorPrefix + 'water-flow',
    ultrasonic: sensorPrefix + 'ultrasonic',
    pressure: sensorPrefix + 'pressure',
    solenoidValve: actuatorPrefix + 'solenoid-valve/get',
    stateReport: statePrefix + 'state'
};

// Creates an array containing the topics subscribe from topics object.
const topicsDescription = Object.keys(topics).map(key => topics[key]);

const mqttRoutes = {
    [topics.phMeter]: {
        topic: topics.phMeter,
        controller: controllersObject.phMeterController
    },
    [topics.pressure]: {
        topic: topics.pressure,
        controller: controllersObject.pressureController,
    },
    [topics.stateReport]: {
        topic: topics.stateReport,
        controller: controllersObject.stateReportController
    },
    [topics.solenoidValve]: {
        topic: topics.solenoidValve,
        controller: controllersObject.solenoidValveController
    },
    [topics.ultrasonic]: {
        topic: topics.ultrasonic,
        controller: controllersObject.ultrasonicController
    },
    [topics.waterFlow]: {
        topic: topics.waterFlow,
        controller: controllersObject.waterFlowController
    }
}

module.exports = { mqttTopics: topicsDescription, mqttRoutes };