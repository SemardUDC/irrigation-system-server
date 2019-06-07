const mongoose = require('mongoose');
const Common = require('../common');

const PumpMotorSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    activated: {
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

PumpMotorSchema.statics.findLastRecordForEachId = Common.findLastRecordForEachId;

module.exports = mongoose.model('pump-motors', PumpMotorSchema);