const express = require('express');
const fs = require("fs");
const mydata = require("./second");
const cors = require('cors');
const axios = require('axios').default;

const app = express();

app.use(cors());
app.use(express.json())

app.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "example.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

app.post('/postUsers', async function(req, res) {
    const data = req.body;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    res.json({ message: "Data found", name: data.name, data: response.data });
})

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})