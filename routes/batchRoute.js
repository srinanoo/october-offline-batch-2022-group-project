const batchController = require('../controller/batchController');

const batch = (route) => {
    if(route.indexOf('add') !== -1) {
        batchController.addBatch();
    }
    if(route.indexOf('edit') !== -1) {
        batchController.editBatch();
    }
    if(route.indexOf('delete') !== -1) {
        batchController.deleteBatch();
    }
    if(route.indexOf('list') !== -1) {
        batchController.listBatch();
    }
}

module.exports = batch;