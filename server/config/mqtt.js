const mqtt = require('async-mqtt');
const { mqttTopics, mqttRoutes } = require('../routes/mqtt.route');
const config = require('./config');


const options = {
    username: config.mqtt.username,
    password: config.mqtt.password
}

const client = mqtt.connect(config.mqtt.host, options);

client.on('connect', () => (console.log('Connected to the broker.')));
client.on('reconnect', () => (console.log('Reconnecting...')));
client.on('error', (error) => {
    throw new Error(`Error while connecting ${error.message}`);
});

client.subscribe(mqttTopics).then(() => {
    console.log(`Access granted to mqttTopics: \n\t${mqttTopics.join(`\n\t`).toString()}`)
}).catch((e) => { throw new Error(`Error connecting to topics: ${error.message}`) });

client.on('message', async (topic, payload, packet) => {
    if (mqttRoutes[topic]) {
        try {
            const message = JSON.parse(payload);
            const result = await mqttRoutes[topic].controller(topic, message, packet);
            if (!result) {
                throw new Error(`Message ${message} not saved.`)
            }
            console.log(`${new Date(Date.now()).toString()} | ${topic} - Message saved succesfully.`);
        } catch (e) {
            console.log(`Error on topic: ${topic}, ${e.message}`);
        }
    } else {
        console.log(`Topic: ${topic} subscribed but not handled.`);
    }
});

module.exports = client;