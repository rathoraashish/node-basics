const http = require("http");

const server = http.createServer((req, res) => {
    console.log(":::)))", req.body, req.params);

    res.end("This is the response for your request");
});

server.listen(5000, () => {
    console.log("Server is listening on port:5000.....");
});