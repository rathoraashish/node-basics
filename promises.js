var promise = new Promise((resolve, reject) => {
    resolve(5);
});

promise.then(first).then(second).then(third).then((response) => {
    console.log(response);
})

function first(num) {
    return num + 2;
}

function second(num) {
    return num + 2;
}

function third(num) {
    return num + 3;
}