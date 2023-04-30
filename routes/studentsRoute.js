const student = (route) => {
    if(route.indexOf('add') !== -1) {
        console.log('Student Add!');
    }
    if(route.indexOf('edit') !== -1) {
        console.log('Student Edit!');
    }
    if(route.indexOf('delete') !== -1) {
        console.log('Student Delete!');
    }
    if(route.indexOf('list') !== -1) {
        console.log('Student List!');
    }
}

module.exports = student;