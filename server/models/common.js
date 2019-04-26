module.exports = {
    findLastRecordForEachId: async function() {
        const ids = await this.distinct('identification');
        const limit = 1;
        console.log('Identifications found', ids);
    
        let lastRecords = {};
        let record = null;
        for(id of ids) {
            record = await this.find({identification: id}).sort({date: 'desc'}).limit(limit);
            lastRecords[id] = record;
        }
    
        return lastRecords;
    },
    toObjectTransformation: function(doc, ret) {
        delete ret._id;
        delete ret.__v;
    }
};