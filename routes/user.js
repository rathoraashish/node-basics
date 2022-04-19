const router = require('express').Router();
const axios = require('axios').default;
const fs = require("fs");

router.get('/', function(req, res) {
    fs.readFile(__dirname + "/" + "example.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

router.post('/', async function(req, res) {
    const data = req.body;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    res.json({ message: "Data found", name: data.name, data: response.data });
})

module.exports = router;