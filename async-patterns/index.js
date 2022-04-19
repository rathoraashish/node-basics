const { readFile } = require('fs');

readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
})