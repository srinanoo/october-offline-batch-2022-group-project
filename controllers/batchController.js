const addBatch = (req, res, err) => {
    console.log("Batch should be added");
}
const editBatch = (req, res, err) => {
    console.log("Batch should be edited");
}
const deletBatch = (req, res, err) => {
    console.log("Batch should be deleted");
}
const listBatch = (req, res, err) => {
    console.log("Batch should be listed");
}

module.exports = {
    addBatch,
    editBatch,
    deletBatch,
    listBatch
}