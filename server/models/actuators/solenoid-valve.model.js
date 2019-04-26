const mongoose = require('mongoose');
const Common = require('../common');

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
}, {
    toObject: {
        transform: Common.toObjectTransformation
    }
});

SolenoidValveSchema.statics.findLastRecordForEachId = Common.findLastRecordForEachId;

module.exports = mongoose.model('solenoid-valves', SolenoidValveSchema);