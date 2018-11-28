
/**
 * Receives an array of records an arrange them exatracting the
 * identification field and put them under a field corresponding
 * to the same identification extracted.
 * @param {Array of records containing a field called identification} records 
 */
function arrangeByIdentification(records) {
    const arrangedRecords = {};
    let idAux;

    for(record of records) {
        idAux = record.identification;
        delete record.identification;
        
        if (arrangedRecords[idAux]) {            
            arrangedRecords[idAux].push(record);
        } else {
            arrangedRecords[idAux] = [record];
        }
    }

    return arrangedRecords;
}


module.exports = arrangeByIdentification;