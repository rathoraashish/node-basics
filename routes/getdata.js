const con = require("../dbconfig");
const router = require('express').Router();
const axios = require('axios').default;

router.get('/', function(req, res) {
    con.query("call getData()", (err, data) => {
        if (err) {
            console.log(err);
            return res.send("No data found")
        }
        return res.json({ data })
    })
})

router.post('/', function(req, res) {
    let body = req.body;
    con.query(`update ps_users set user_nicename='${body.name}' where ID=${body.id}`, (err, data) => {
        if (err) {
            console.log(err);
            return res.send("No data found");
        }
        con.query(`select * from ps_users where ID=${body.id}`, (err, userdata) => {
                if (err) {
                    console.log(err);
                    return res.send("unable to display data");
                }
                return res.json({ userdata })
            })
            // return res.json({ data })
    })
})

module.exports = router;