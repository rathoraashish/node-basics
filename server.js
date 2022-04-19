const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

app.use('/', require('./routes'))

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})