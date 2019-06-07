
/**
 * Receives an array of records and it arranges them by extracting
 * the identification field and putting the remaining attributes under
 * a field corresponding to the same identification extracted.
 * @param {Array of records containing a field called identification} records 
 */
function arrangeByIdentification(records) {
    const arrangedRecords = {};
    let idAux;

    for(const record of records) {
        idAux = record.identification;
        record.identification = undefined;
        
        if (arrangedRecords[idAux]) {            
            arrangedRecords[idAux].push(record);
        } else {
            arrangedRecords[idAux] = [record];
        }
    }

    return arrangedRecords;
}


module.exports = arrangeByIdentification;