const fs = require("fs");

function fileReadWithCallback() {
    fs.readFile(__dirname + "/" + "example.json", 'utf8', (err, data) => {
        console.log("This is for example:", data);
    });

    console.log("File read succesfully")
}

async function fileReadWithPromise() {
    const data = await fs.promises.readFile(__dirname + "/" + "example.json", 'utf8');

    console.log("This is for example:", data);
    console.log("File read succesfully")
}

fileReadWithCallback()
fileReadWithPromise();