// Sensors
const WaterFlow = require('../models/sensors/water-flow.model');
const PhMeter = require('../models/sensors/ph-meter.model');
const Pressure = require('../models/sensors/pressure.model');
const Ultrasonic = require('../models/sensors/ultrasonic.model');

// Actuators
const SolenoidValve = require('../models/actuators/solenoid-valve');

// All controllers must receive a message object.

// Sensor controllers.
function waterFlowController(topic, message, packet) {
    message.date = Date.now();
    const waterFlow = new WaterFlow(message);
    console.log(`WaterFlow called - Message received from topic: ${topic}`);
    return waterFlow.save();
}

function phMeterController(topic, message, packet) {
    message.date = Date.now();
    const phMeter = new PhMeter(message);
    console.log(`phMeter called - Message received from topic: ${topic}`);
    return phMeter.save();
}

function ultrasonicController(topic, message, packet) {
    message.date = Date.now();
    const ultrasonic = new Ultrasonic(message);
    console.log(`Ultrasonic called - Message received from topic: ${topic}`);
    return ultrasonic.save();
}

function pressureController(topic, message, packet) {
    message.date = Date.now();
    const pressure = new Pressure(message);
    console.log(`Pressure called - Message received from topic: ${topic}`);
    return pressure.save();
}

// Actuator controllers.
function solenoidValveController(topic, message, packet) {
    message.date = Date.now();
    const solenoidValve = new SolenoidValve(message);
    console.log(`Solenoid Valve called - Message received from topic: ${topic}`);
    return solenoidValve.save();
}

// ESP Client State controller.
function stateReportController(topic, message, packet) {
    console.log(`State report called - Message received from topic: ${topic}`);
}

module.exports = {
    waterFlowController, 
    phMeterController, 
    ultrasonicController, 
    pressureController, 
    solenoidValveController, 
    stateReportController
}