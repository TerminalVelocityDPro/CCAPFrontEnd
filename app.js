const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'alva87@ethereal.email',
        pass: 'WYExSY4PkvS7XaBESh'
    }
});

var mailOptions = {
  from: 'alva87@ethereal.email',
  to: 'barnapa@yahoo.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.use(express.static('public'));


app.use('/', router);
app.listen(3000, () => console.log('listening at 3000'));



/*function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Daniel");*/