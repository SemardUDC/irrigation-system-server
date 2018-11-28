const mongoose = require('mongoose');

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
});

WaterFlowSchema.set('toObject', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('water-flows', WaterFlowSchema);