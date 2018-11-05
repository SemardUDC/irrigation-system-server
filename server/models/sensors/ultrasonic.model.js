const mongoose = require('mongoose');

const UltrasonicSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Expressed in cm. Represents how far the water is.
    // The higher distance the lower the water left in
    // the tank.
    distance: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('ultrasonics', UltrasonicSchema);