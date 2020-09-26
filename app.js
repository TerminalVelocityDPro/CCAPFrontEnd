const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();
const Datastore = require('nedb');
const { response } = require('express');
const { getHeapCodeStatistics } = require('v8');


const database = new Datastore('database.db');
database.loadDatabase();

//Function that gets data and shows it on html 
async function getData(){
  const response = await fetch('/api');
  const data = await response.json;

  for (item of data){
    const root = document.createAttribute('div');
    const stress = document.createAttribute('div');

    stress.textContent = `Stress Level: ${item.stress}`;

    root.append(stress);
    document.body.append(root);
  }
}

//Querying Database based on stress levels
database.find({stress: "10"}, (err,docs) => {
  if(err){
    response.end();
    return;
  }
  console.log("Stress 10 :" + docs);
});
database.find({stress: {$in: ["7","8","9"]}}, (err,docs) => {
    if(err){
      response.end();
      return;
    }
    console.log("Stress 7 to 9 :" + docs);
  });
database.find({stress: {$in: ["4","5","6"]}}, (err,docs) => {
    if(err){
      response.end();
      return;
    }
    console.log("Stress 4 to 6 :" + docs);
  });
database.find({stress: {$in: ["1","2","3"]}}, (err,docs) => {
  if(err){
    response.end();
    return;
  }
    console.log("Stress 1 to 3 :" + docs);
  });

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
app.use(express.json({limit: '1 mb'}));

  

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


app.use('/', router);

app.post('/', function(req, res){
  console.log('I got a request!');
	var post_body = req.body;
  res.send(post_body);
  database.insert(post_body);
	console.log(post_body);
	console.log(post_body.stress);
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