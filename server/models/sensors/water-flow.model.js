const mongoose = require('mongoose');
const Common = require('../common');

const WaterFlowSchema = new mongoose.Schema({
    identification: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Content in mL
    content: {
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

WaterFlowSchema.statics.findLastRecordForEachId = Common.findLastRecordForEachId;

module.exports = mongoose.model('water-flows', WaterFlowSchema);