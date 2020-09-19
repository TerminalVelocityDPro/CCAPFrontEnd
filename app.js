const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();
const Datastore = require('nedb');

const database = new Datastore('database.db');
database.loadDatabase();

const transporter = nodemailer.createTransport({
	name: "ethereal.email",
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'elody81@ethereal.email',
        pass: 'pvCK7C9PvyG4ePWFHm'
    }
});

var mailOptions = {
  from: 'elody81@ethereal.email',
  to: 'elody81@ethereal.email',
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

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


app.post('/api', (req,res) => {
  console.log(req);
})

app.use('/', router);

app.post('/', function(req, res){
	var post_body = req.body;
	res.send(post_body);
	console.log(post_body);
	console.log(post_body.stress);
	database.insert(post_body);
	//console.log(JSON.stringify(post_body));
	//res.end(JSON.stringify(response));
	//console.log("Got a POST request for the homepage");
	//res.send('Hello POST');
});

app.get('/about',function(req,res){
  res.sendFile('/public/about_us.html',{ root: __dirname });
});


app.listen(3000, () => console.log('listening at 3000'));



/*function sayHello(name){
    console.log("Hello " + name);
}

sayHello("Daniel");*/