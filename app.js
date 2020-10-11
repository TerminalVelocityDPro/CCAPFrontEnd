const nodemailer = require('nodemailer');
const express = require('express');
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const escapeHTML = require('escape-html');
const app = express();
const path = require('path');
const router = express.Router();
const Datastore = require('nedb');
const { response } = require('express');
const { getHeapCodeStatistics } = require('v8');
const crypt = require('crypto');


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
database.find({$not: {stress: '1'}}, (err,docs) => {
  if(err){
    response.end();
    return;
  }
  console.log("Stress hashes :" + docs);
  var stressLevel = docs[0].var4;
  //console.log(bcrypt.compareSync('10', stressLevel));
  console.log(docs[0].var4);
  console.log(bcrypt.compareSync('10', stressLevel));
  console.log(docs[0].var4);

});







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
	var post_body = (req.body);
    res.send(post_body);
    //console.log(typeof post_body);
    //database.insert(json);
	//console.log(escapeHTML(post_body.stress));
	//console.log(escapeHTML(post_body.id));
	var saltRounds = 10;
	var eFirstName = escapeHTML(post_body.firstName);
	//var eFirstNameHash = bcrypt.hashSync(eFirstName, 10);
	var eLastName = escapeHTML(post_body.lastName);
	//var eLastNameHash = bcrypt.hashSync(eLastName, 10);
	var eID = escapeHTML(post_body.id);
	//var eIDHash = bcrypt.hashSync(eID.toString(), 10);
	var eStress = escapeHTML(post_body.stress);
	var eStressHash = bcrypt.hashSync(eStress.toString(), 10);
	var encryptingKey = crypt.createCipher('aes-128-cbc', 'password_key');
	var eFirstName = encryptingKey.update(eFirstName, 'utf8', 'hex');
	eFirstName += encryptingKey.final('hex');

	console.log("Encrypted");
	console.log(eFirstName);

	var deKey = crypt.createDecipher('aes-128-cbc', 'password_key');
	var decrypted_str = deKey.update(eFirstName, 'hex', 'utf8');
	decrypted_str += deKey.final('utf8');
	console.log("Decrypted");
	console.log(decrypted_str);


	var userData = {
			var1: eFirstName,
			var2: eLastName,
			var3: eID,
			var4: eStressHash
	};
	console.log(userData);
	console.log("Stress");
	console.log(userData.var3);
	console.log(bcrypt.compareSync("10", userData.var4));
	database.insert(userData);
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