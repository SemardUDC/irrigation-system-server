'use-strict'

module.exports = {
    findLastRecordForEachId: async function() {
        const ids = await this.distinct('identification');
        const limit = 1;
        console.log(`Identifications found ${ids} for ${this.collection.name}`);
        if (typeof ids[0] === 'number')
            console.log('First found is number');
        
        let lastRecords = {};
        let record = null;
        // Without the 'const' or 'let' in 'id', the results were mismatched
        // with the ids being different.
        for(const id of ids) {
            
            record = await this.find({identification: id}).sort({date: 'desc'}).limit(limit);
            console.log(`Record found for: ${id} in ${this.collection.name} details: ${record}`);
            lastRecords[id] = record;
        }
    
        return lastRecords;
    },
    toObjectTransformation: function(doc, ret) {
        delete ret._id;
        delete ret.__v;
    }
};