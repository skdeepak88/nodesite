var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'skdeepak88@gmail.com',
            pass: '*******'
        }
    });

    var mailOptions = {
        from: 'Deepak SK <skdeepak88@gmail.com>',
        to: 'skdeepak88@gmail.com',
        subject: 'Website Submission',
        text: 'You have a new mesage with the following details...Name:' + req.body.name + ' Email:' + req.body.email + 'Message: ' + req.body.message,
        html: '<p>You have a new message with the following details...</p><ul><li>Name:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>',
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error) {
            console.log(error);
            res.redirect('/')
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect('/')
        }
    });
});

module.exports = router;
