const nodemailer = require('nodemailer');
const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const escapeHTML = require('escape-html');
const app = express();
// const path = require("path");
const router = express.Router();
const Datastore = require('nedb');
const {response} = require('express');
// const { getHeapCodeStatistics } = require("v8");
const helmet = require('helmet');
const crypto = require('crypto');
const fs = require('fs');
const RateLimit = require('express-rate-limit');
const options = {
  inflate: true,
  limit: 10000000000, //yay it's working

};
app.use(bodyParser.json(options));
app.enable('trust proxy');
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
  delayMs: 0, // disabled
});

// only apply to requests that begin with /user/
app.use(apiLimiter);
//app.use(express.static(__dirname + '/public/Imgs'));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//app.use(helmet());
//app.use(helmet.dnsPrefetchControl());
//app.use(helmet.expectCt());

//app.use(
//  helmet.contentSecurityPolicy({
//    directives: {
//      defaultSrc: ["'self'", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"],
//      //defaultSrc: [`*`],
//      scriptSrc: ["'self'", `'unsafe-inline'`, "d3js.org/d3.v4.min.js", "unpkg.com/axios/dist/axios.min.js", "https://code.jquery.com/jquery-3.5.1.slim.min.js", "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"],
//      styleSrc:["'self'", `'unsafe-inline'`, "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"],
//      imgSrc: ["'self'", "data:"],
//      upgradeInsecureRequests: [],
//    },
//  })
//);


//app.use(
// helmet.contentSecurityPolicy({
//   directives: {
//      defaultSrc: ["'self'", `'unsafe-inline'`, "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"],
//      scriptSrc: ["'self'", `'unsafe-inline'`, "d3js.org/d3.v4.min.js", "unpkg.com/axios/dist/axios.min.js", "https://code.jquery.com/jquery-3.5.1.slim.min.js", "https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js", "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js"],
//      styleSrc:["'self'", `'unsafe-inline'`, "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"],
//      imgSrc: ["'self'", "data:"],
//      upgradeInsecureRequests: [],
//    },
//  })
//);


app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);



//app.use(helmet.contentSecurityPolicy());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());


// var publicKeyString = "3082010b0282010100d2a309b160402c711bab2324f0a09eb9265078315fdc501da4f94518b9cbc5072bb487a348896b1a09a955851048b3e1e846592c7152cd6011d6d76b7923fd8e55120b5b121c3de2b569793bc442e42af05883c545473a93acfaa353627ac0200fa247cbc8ddc5496e6ed1d82b247912008a0b237d9ab017b6b9c409a6b49a797ccd66b105a112c83682fee6bfe4423d2baa633db758b052839eaa6b864035c6ee8008af9d856504a636ab7cb2176fe29733fba02f79a7f9843b2d166cb83dca58a4ac6df00926f59fe96ccc00d2ec05ec5e1f2b9e8e3d0b6e464abf16ccc4eee8c19377882e20bf4eaeb7a4167d083400da91c6a3a2d39021731b537e2c110f020401010101";
// var privateKeyString = "3082052d305706092a864886f70d01050d304a302906092a864886f70d01050c301c0408e61d90ef9de0d35302020800300c06082a864886f70d02090500301d0609608648016503040116041037d58ad5d5ee1e91401c108a4627704e048204d03561e9aab76e5cc19d390d1c50597f4ddf1b21d437cc36c56c05a428133c56e5bb4d26fccfb4e7d78fc9d392b5ead3b60b6b4c5f8c23f2ba24c86c137233c273f693da4fcfc4193cd635e00c9f51387c44b63fa612238e1c7a4a7ce0c8fa6ade3844609ed917ac458eb175917c9d392509412cb1eb22856fc9596a53ed48082b6e50a853ffd1346ce2c8f928b2639e0101a890a3f4ae324143b804997377daae0bcf064ea451c4ecd85fead1d77e89993e01e94e17b1460457d51d7509a10308d07ca905903d3be7340ba4c618018994d585a71f34506069ba6fbc3e8bd1539812a8944062225b48ad64ccc5724415c16fcc5f8e3e14b9c81f5ed9b6a9a08799f30ffd12757cf006969bfdddb9c078a34121ed9043bbd59c643193cc22c7a1cc2ed18b438cac8b4b05072ca2cfa288378e3c4b304b44a906a2600aa5c277a5197c6f9cdacb36f72a668db187cd7ed8f5fd971fc5200a7b24a84ebcbd65c29621954e29e9b3b5b1bc186a43babf857ec70915ae23aa82f1d81e2b6437160616ff4facb9a6e7a3b8e2b8a29d6ff15318082fe2ba5906287079c51cf73cb8a2e5b365b4be19b92eabc85deed8bdd71872a0e43ab8c042b3d4fc053f0db05d83b9331acc8ce2e1469f7573f9987dcb4ca971eb52373807591344399ae5d4f98929b611b68057f15ad1dd1a4142d21bf04a64cf5f4e0bd25ceded28ac06729b86fb9164a197d08af0511f9d1b3b262b6d8a3873980a9f8207af6152aa73550bf2e0ffc3f6b5f34c9d488764815d2748ee9bc14113c928af193da63b2d3089ec30452ebc1494cc826acefba805f3676235f4d6d6fac5694ce6aa7b26ef511724aff388d0ee139b4e1868b4665cee632d050a316f9f8f569b0e8daf0d57f5a888084f1f7b744b55d6f6f6b6549d2cc1b3ccb0ebb267c763347a23ea8d1f048dbe0d61cdbdf38ddced5c7e7415a8b3ee0df96d2b9e8781b7af254cd4e1345450f154ee6ea8cdc70634222082444eeb4fa55e6df1bbce694091bb6a2c9dd201e0386e3573a563506e32fd593b824a0dfcbb4ad5b46c704a52c6e535fda8bb7475436d99f44d561e1c8d0f3f830d2da2efefe774a2de026df91e6d867fa9485979b60cc0f3de19b78f5dcc8d8f9ed2d48d7daec596360c2c79e612c3ab987aa65592c2935f2a7ece8b72e75d6e15182ff4e1dd83151fe0d1581cd806d7d0ead79c456fb21c1d38e9260c53b6f554b036560e95a69e0afe6b61f3a974b137d6abb9f2b81f04a4ec5af1ad29b3cfb920362f37b062e1947e8333f701833867bad0a59da92b55b4f35a87c648bead147d84ae485c718f17d416763f072604f52b499d1904ad55c59c27b704001f684b346953d275cfb1d2d1474f54d35278545f57ca0e49c7802f798a9c721485c532b1a693d4144d57054dab554cbc5b4046b969d88e50f0b078c35e3606788a3019fd627739597d9309daa19770c2415839d96f4ea8124b4fc8131ac0eb494282e087ed8921a6fdccf12882a5a537c9944188ae7fa8088a814e12997af1f0dddd7f256182da3dc81993a1110387d361c57e995edc91fc09e5b7b81b571124892ccf8b0d12439e6162fee0fa983f20396d6ca99b0b4c661c9bbd39a697e97faa3728ee3ad7bff931547a7daa4b8dd9ba7d6b9ae1ce3dd4d43e39ba8ad20cfa364a6b6a88a8ebd25d007b2d3120be28806474e3af8d80789a8e62613754cafdbde79f1fe289a0774fd3";

// var publicKey = Buffer.from(publicKeyString, 'hex');
// var privateKey = Buffer.from(privateKeyString, 'hex');

// console.log(publicKey);
// console.log(privateKey);


// Calling generateKeyPair() method
// with its parameters
// var publicKeyHold;
// var privateKeyHold;

// crypto.generateKeyPair('rsa', {
//  modulusLength: 2048,    // options
//  publicKeyEncoding: {
//	  type: 'spki',
//      format: 'pem'
//  },
//  privateKeyEncoding: {
//	  type: 'pkcs8',
//      format: 'pem',
//      cipher: 'aes-256-cbc',
//      passphrase: 'ccapprotection'
//  }
// }, (err, publicKey, privateKey) => { // Callback function
//       if(!err)
//       {
// Prints new asymmetric key pair
//         console.log("Public Key is : ", publicKey);
//         fs.writeFileSync("public_key", publicKey);
//         console.log();
//         console.log("Private Key is: ", privateKey);
//         fs.writeFileSync("private_key", privateKey);
//       }
//       else
//       {
// Prints error
//         console.log("Errr is: ", err);
//       }
// });


const database = new Datastore('database.db');
database.loadDatabase();

// Function that gets data and shows it on html
// async function getData(){
//  const response = await fetch("/api");
//  const data = await response.json;

//  for (item of data){
//    const root = document.createAttribute("div");
//    const stress = document.createAttribute("div");

//    stress.textContent = `Stress Level: ${item.stress}`;

//    root.append(stress);
//    document.body.append(root);
//  }
// }


// Querying Database based on stress levels
//database.find({$not: {stress: '1'}}, (err, docs) => {
//  if (err) {
//    response.end();
//    return;
//  }
//  console.log('Stress hashes :' + docs);
//  const stressLevel = docs[0].var4;
  // console.log(bcrypt.compareSync('10', stressLevel));
//  console.log(docs[0].var4);
//  console.log(bcrypt.compareSync('10', stressLevel));
//  console.log(docs[0].var4);
  //
  // const decryptedFirst = crypto.privateDecrypt(
  //		{
  //			key: privateKey,
  //			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  //			oaepHash: "sha256",
  //		},
  //		encryptedFirst
  //	);

  //	console.log("decrypted data: ", decryptedFirst.toString());
  //
//});


//database.find({stress: '10'}, (err, docs) => {
//  if (err) {
//    response.end();
//    return;
//  }
//  console.log('Stress 10 :' + docs);
//});
//database.find({stress: {$in: ['7', '8', '9']}}, (err, docs) => {
//  if (err) {
//    response.end();
//    return;
//  }
//  console.log('Stress 7 to 9 :' + docs);
//});
//database.find({stress: {$in: ['4', '5', '6']}}, (err, docs) => {
//  if (err) {
//    response.end();
//    return;
//  }
//  console.log('Stress 4 to 6 :' + docs);
//});
//database.find({stress: {$in: ['1', '2', '3']}}, (err, docs) => {
//  if (err) {
//    response.end();
//    return;
//  }
//  console.log('Stress 1 to 3 :' + docs);
//});

const transporter = nodemailer.createTransport({
  name: 'ethereal.email',
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'elody81@ethereal.email',
    pass: 'pvCK7C9PvyG4ePWFHm',
  },
});

const mailOptions = {
  from: 'elody81@ethereal.email',
  to: 'elody81@ethereal.email',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>',
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
app.use(express.static('public'));
//sapp.use(express.json({limit: '5 mb'}));
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use('/', router);
//app.use(bodyParser.json({ limit: '1000000000000mb' }));
//app.use(bodyParser.urlencoded({ extended: true, limit: '1000000000000mb' }));

//Joi Schema Validation for inputted data
app.post('/', function(req, res) {
  const schema = Joi.object().keys({
    firstNameAns: Joi.string()
      .alphanum()
      .min(1)
      .max(10)
      .required(),

    lastNameAns: Joi.string()
      .alphanum()
      .min(1)
      .max(10)
      .required(),

    idAns: Joi.number()
      .integer()
      .min(0)
      .max(1000000000)
      .required(),
    
    stressAns: Joi.number()
      .integer()
      .min(0)
      .max(10)
      .required(),

    struggleAns: Joi.number()
      .integer()
      .min(0)
      .max(3)
      .required(),

    covidAns: Joi.string()
      .alphanum()
      .required(),

    familyAns: Joi.string()
      .alphanum()
      .required(),

    schoolAns: Joi.string()
      .alphanum()
      .required(),

    friendAns:  Joi.string()
    .alphanum()
    .required(),

    schoolAns:  Joi.string()
    .alphanum()
    .required(),

    interestProtectAns:  Joi.string()
    .alphanum()
    .required(),

    householdCleanAns:  Joi.string()
    .alphanum()
    .required(),

    statsAns:  Joi.string()
    .alphanum()
    .required(),

    interestProtectAns:  Joi.string()
    .alphanum()
    .required(),

    householdCleanAns: Joi.string()
    .alphanum()
    .required(),

    csiAns:  Joi.string()
    .alphanum()
    .required(),

    transAns:  Joi.string()
    .alphanum()
    .required(),

    peerAns:  Joi.string()
    .alphanum()
    .required(),

    socialHelpAns:  Joi.string()
    .alphanum()
    .required(),

    techSupportAns:  Joi.string()
    .alphanum()
    .required(),

    tutorAns:  Joi.string()
    .alphanum()
    .required(),

    distanceFocusAns:  Joi.string()
    .alphanum()
    .required()

  })
    .with('firstName',['lastName','id']);

  /*Validation of Schema Inputs
  try{
    const value = await schmea.validateAsync(req.body);
  }
  catch(error){
    console.log(error);
  }
  const {error,value} = schema.validate(req.body);
  */
  

  if(typeof(error) != "undefined"){
	  console.log("RIP");
  }else{
	  console.log('I got a useable request!');
	  const post_body = (req.body);
	    res.send(post_body);
	    console.log(post_body);
        const publicKey = fs.readFileSync('./public_key', 'utf8');
        var eFirstName = crypto.publicEncrypt(publicKey, Buffer.from(escapeHTML(post_body.firstNameAns)));
        var eLastName = crypto.publicEncrypt(publicKey,Buffer.from(escapeHTML(post_body.lastNameAns)) );
        var eID = crypto.publicEncrypt(publicKey, Buffer.from(escapeHTML(post_body.idAns)));
        var eStress = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.stressAns)), 10));
        var eStruggle = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.struggleAns)), 10));
        var eCovid = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.covidAns)), 10));
        var eFamily = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.familyAns)), 10));
        var eFriend = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.friendAns)),10));
        var eSchool = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.schoolAns)),10));
        var eInterestProtect =crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.interestProtectAns)),10)) ;
        var eHouseholdClean = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.householdCleanAns)), 10));
        var eStats = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.statsAns)), 10));
        var eCSI = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.csiAns)), 10));
        var ePeer = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.peerAns)), 10));
        var eSocialHelp = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.socialHelpAns)), 10));
        var eTechSupport = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.techSupportAns)),10));
        var eTutor = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.tutorAns)), 10));

        var eDistance = crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.distanceFocusAns)), 10));
	console.log("raw encrypted: " + eFirstName);
	console.log("type: " + typeof(eFirstName));
	eFirstName = JSON.stringify(eFirstName);
	eLastName = JSON.stringify(eLastName);
	eID = JSON.stringify(eID);
	eStress = JSON.stringify(eStress);
	eStruggle = JSON.stringify(eStruggle);
	eCovid = JSON.stringify(eCovid);
	eFamily = JSON.stringify(eFamily);
	eFriend = JSON.stringify(eFriend);
	eSchool = JSON.stringify(eSchool);
	eInterestProtect = JSON.stringify(eInterestProtect);
	eHouseholdClean = JSON.stringify(eHouseholdClean);
	eStats = JSON.stringify(eStats);
	eCSI = JSON.stringify(eCSI);
	ePeer = JSON.stringify(ePeer);
	eSocialHelp = JSON.stringify(eSocialHelp);
	eTechSupport = JSON.stringify(eTechSupport);
	eTutor = JSON.stringify(eTutor);
	eDistance = JSON.stringify(eDistance);

        const userData = {
	      var1: eFirstName,
	      var2: eLastName,
	      var3: eID,
	      var4: eStress,
          	var5: eStruggle,
          var6: eCovid,
          var7: eFamily,
          var8: eFriend,
          var9: eSchool,
          var10: eInterestProtect,
          var11: eHouseholdClean,
          var12: eStats,
          var13: eCSI,
          var14: ePeer,
          var15: eSocialHelp,
          var16: eTechSupport,
          var17: eTutor,
          var18: eDistance
	    };


	console.log("Encrypted data " + eFirstName);
	eFirstName = JSON.parse(eFirstName);

	    const privateKey = fs.readFileSync('./private_key','utf8');

		const decryptedFirst = crypto.privateDecrypt(
		            {
		        key: privateKey,
				passphrase: 'ccapprotection',
		   },
		   Buffer.from(eFirstName, "base64")
		);

console.log("decrypted data: ", decryptedFirst.toString());







	    //const eFirstName = escapeHTML(post_body.firstName);
	    //const eLastName = escapeHTML(post_body.lastName);
	    //const eID = escapeHTML(post_body.id);
	    //const eStress = escapeHTML(post_body.stress);
	    //const eStressHash = bcrypt.hashSync(eStress.toString(), 10);
	    //console.log('First name is ' + eFirstName);

	    //const encryptedFirst = crypto.publicEncrypt(publicKey, Buffer.from(eFirstName));
	    //const encryptedLast = crypto.publicEncrypt(publicKey, Buffer.from(eLastName));
	    //const encryptedID = crypto.publicEncrypt(publicKey, Buffer.from(eID));
	    //const encryptedStressHash = crypto.publicEncrypt(publicKey, Buffer.from(eStressHash));

	    console.log(userData);
	    //console.log('Stress');
	    //console.log(userData.var3);
	    database.insert(userData);
  }
});

app.get('/about', function(req, res) {
  res.sendFile('/public/about_us.html', {root: __dirname});
});
app.listen(3000, () => console.log('listening at 3000'));
