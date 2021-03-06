const mongoose = require('mongoose');
const Common = require('../common');

const PhMeterSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ph: {
        type: Number,
        required: true,
        min: [0, 'Minimum Ph limit exceeded'],
        max: [14, 'Maximum Ph value exceeded']
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

PhMeterSchema.statics.findLastRecordForEachId = Common.findLastRecordForEachId; 

module.exports = mongoose.model('ph-meters', PhMeterSchema);