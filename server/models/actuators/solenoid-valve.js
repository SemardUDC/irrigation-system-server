const mongoose = require('mongoose');

const SolenoidValveSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    open: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

SolenoidValveSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

module.exports = mongoose.model('solenoid-valves', SolenoidValveSchema);