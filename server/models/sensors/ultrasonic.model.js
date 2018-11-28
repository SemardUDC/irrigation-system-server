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

UltrasonicSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('ultrasonics', UltrasonicSchema);