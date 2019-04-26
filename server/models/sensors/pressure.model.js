const mongoose = require('mongoose');
const Common = require('../common');

const PressureSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    kpa: {
        type: Number,
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

PressureSchema.statics.findLastRecordForEachId = Common.findLastRecordForEachId;

module.exports = mongoose.model('pressures', PressureSchema);