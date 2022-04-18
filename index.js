var ashish = require('./second');
var os = require('os');
const fs = require('fs');

console.log(ashish.role);
// console.log(os.networkInterfaces());
console.log(os.freemem());

fs.writeFile('test.txt', "This content is written from write file package", () => {
    console.log("Written to the file");
});

console.log("Written finished");