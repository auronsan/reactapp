const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '', // Your email id
        pass: '' // Your password
    }
});

app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    /**bodyParser.json(options)
     * Parses the text as JSON and exposes the resulting object on req.body.
     */
    app.use(bodyParser.json());



app.get('/', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
  })

  app.post('/', function (req, res) {
console.log(req.body);

var text = req.body.message + ' \n\n' + req.body.name + '\n ' + req.body.email;

var mailOptions = {
    from: req.body.email, // sender address
    to: 'auronsanjr@gmail.com', // list of receivers
    subject: 'anshor-dev Mail', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ name : req.body.name, status : "success" }));
      })
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })