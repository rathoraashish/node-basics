const nodemailer = require("nodemailer");
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("mail sent")
    sendGreetingMail();
});
router.post('/', (req, res) => {
    const vv = req.body.message;
    res.status(201).send(`Mail send post and message ${vv}`);
    console.log(vv);
    // sendGreetingMail();
});

function sendGreetingMail() {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: '17tec2cs002@vgu.ac.in',
            pass: '87654321'
        }
    });

    let mailDetails = {
        from: '17tec2cs002@vgu.ac.in',
        to: 'tanujsahu09@gmail.com',
        subject: 'Greetings from Dotsquares',
        text: 'Node.js testing mail for SIT',
        html: `<h1>Have a great day &#128513;!!</h1>`, // html body
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if (err) {
            console.log('Error Occurs', err);
            return "Error Occurs";
        } else {
            console.log('Email sent successfully', data);
            return "Email sent successfully";
        }
    });
}

module.exports = router;