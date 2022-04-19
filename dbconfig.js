var mysql2 = require('mysql2');

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pansari"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("call getData()", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    // });
});

module.exports = con;