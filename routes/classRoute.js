const classes = (route) => {
    if(route.indexOf('add') !== -1) {
        console.log('Class Add!');
    }
    if(route.indexOf('edit') !== -1) {
        console.log('Class Edit!');
    }
    if(route.indexOf('delete') !== -1) {
        console.log('Class Delete!');
    }
    if(route.indexOf('list') !== -1) {
        console.log('Class List!');
    }
}

module.exports = classes;