//start executing the opertaing system process
console.log("first thread executed");
setTimeout(() => {
    console.log("second thread executed");
}, 0)
console.log("third thread executed");

//close executing the operating system process