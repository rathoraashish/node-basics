const { readFile } = require("fs");

console.log("Start executing the first task");

readFile(__dirname + "/" + "test.txt", 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data);
})

console.log("First task completed");