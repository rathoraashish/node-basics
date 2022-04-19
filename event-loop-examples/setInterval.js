//start executing the opertaing system process
console.log("first thread executed");
setInterval(() => {
    console.log("second thread executed");
}, 10000)
console.log("third thread executed");

//close executing the operating system process