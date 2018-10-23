const WaterFlow = require('../models/mqtt/sensors/water-flow.model');
const PhMeter = require('../models/mqtt/sensors/ph-meter.model');
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
    console.log(`Ultrasonic called - Message received from topic: ${topic}`);
}

function pressureController(topic, message, packet) {
    console.log(`Pressure called - Message received from topic: ${topic}`);
}

// Actuator controllers.
function solenoidValveController(topic, message, packet) {
    console.log(`Solenoid Valve called - Message received from topic: ${topic}`);
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