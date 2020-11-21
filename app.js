const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Datastore = require('nedb');
const database = new Datastore('database.db');
const fs = require('fs');
database.loadDatabase();

var stressOneCount = 0;
var stressTwoCount = 0;
var stressThreeCount = 0;
var stressFourCount = 0;
var stressFiveCount = 0;
var stressSixCount = 0;
var stressSevenCount = 0;
var stressEightCount = 0;
var stressNineCount = 0;
var stressTenCount = 0;
var struggleZeroCount = 0;
var struggleOneCount = 0;
var struggleTwoCount = 0;
var struggleThreeCount = 0;
var struggleFourCount = 0;

//covid
var covid0123Count = 0;
var covid123Count = 0;
var covid023Count = 0;
var covid013Count = 0;
var covid012Count = 0;
var covid23Count = 0;
var covid13Count = 0;
var covid12Count = 0;
var covid03Count= 0;
var covid02Count = 0;
var covid01Count = 0;
var covid0Count = 0;
var covid1Count = 0;
var covid2Count = 0;
var covid3Count = 0;

//family
var family0123Count = 0;
var family123Count = 0;
var family023Count = 0;
var family013Count = 0;
var family012Count = 0;
var family23Count = 0;
var family13Count = 0;
var family12Count = 0;
var family03Count= 0;
var family02Count = 0;
var family01Count = 0;
var family0Count = 0;
var family1Count = 0;
var family2Count = 0;
var family3Count = 0;


//friend
var friend0123Count = 0;
var friend123Count = 0;
var friend023Count = 0;
var friend013Count = 0;
var friend012Count = 0;
var friend23Count = 0;
var friend13Count = 0;
var friend12Count = 0;
var friend03Count= 0;
var friend02Count = 0;
var friend01Count = 0;
var friend0Count = 0;
var friend1Count = 0;
var friend2Count = 0;
var friend3Count = 0;

//school
var school0123Count = 0;
var school123Count = 0;
var school023Count = 0;
var school013Count = 0;
var school012Count = 0;
var school23Count = 0;
var school13Count = 0;
var school12Count = 0;
var school03Count= 0;
var school02Count = 0;
var school01Count = 0;
var school0Count = 0;
var school1Count = 0;
var school2Count = 0;
var school3Count = 0;


var interestYesCount = 0;
var interestNoCount = 0;
var householdYesCount = 0;
var householdNoCount = 0;
var statsYesCount = 0;
var statsNoCount = 0;
var csiYesCount = 0;
var csiNoCount = 0;
var peerYesCount = 0;
var peerNoCount = 0;
var socialYesCount = 0;
var socialNoCount = 0;
var techYesCount = 0;
var techNoCount = 0;
var tutorYesCount = 0;
var tutorNoCount = 0;
var distanceYesCount = 0;
var distanceNoCount = 0;
var transYesCount = 0;
var transNoCount = 0;



function appendToFile(content){
	content = "\n" + content;
	fs.appendFileSync('file.log', content, err => {
  	if (err) {
    		console.error(err)
    		return
 	}
  	//done!
	})
}
function writeToFile(content){
	
        fs.writeFileSync('file.log', content, err => {
        if (err) {
                console.error(err)
                return
        }
        //done!
        })
}










database.find({$not: {stress: '1'}}, (err, docs) => {
  if (err) {
    response.end();
    return;
  }
  //console.log('Stress hashes :' + docs);
  //console.log(docs.length);
  for(i = 0; i < docs.length; i++){
	  const privateKey = fs.readFileSync('./private_key','utf8');
	  //console.log(docs[i].var1);
	  var stressDecrypt = JSON.parse(docs[i].var4); //done
	  var struggleDecrypt = JSON.parse(docs[i].var5); //done
	  var covidDecrypt = JSON.parse(docs[i].var6);
	  var familyDecrypt = JSON.parse(docs[i].var7);
	  var friendDecrypt = JSON.parse(docs[i].var8);
	  var schoolDecrypt = JSON.parse(docs[i].var9);
	  var interestDecrypt = JSON.parse(docs[i].var10);
	  var householdDecrypt = JSON.parse(docs[i].var11);
	  var statsDecrypt = JSON.parse(docs[i].var12);
	  var csiDecrypt = JSON.parse(docs[i].var13);
	  var peerDecrypt = JSON.parse(docs[i].var14);
	  var socialDecrypt = JSON.parse(docs[i].var15);
	  var techDecrypt = JSON.parse(docs[i].var16);
	  var tutorDecrypt = JSON.parse(docs[i].var17);
	  var distanceDecrypt = JSON.parse(docs[i].var18);
	  var transDecrypt = JSON.parse(docs[i].var19);

	  //appendToFile(Buffer.from(JSON.stringify(docs[i].var1)),"base64");
	  //var thingDecrypt = Buffer.from(JSON.stringify(docs[i].var1), "base64");
	  const decryptedStress = crypto.privateDecrypt(
	              {
	          key: privateKey,
	  	  passphrase: 'ccapprotection',
	     },
	     Buffer.from(stressDecrypt, "base64")
	  );
	  const decryptedStruggle = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(struggleDecrypt, "base64")
          );
	  const decryptedCovid = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(covidDecrypt, "base64")
          );
	  const decryptedFamily = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(familyDecrypt, "base64")
          );
	  const decryptedFriend = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(friendDecrypt, "base64")
          );
	  const decryptedSchool = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(schoolDecrypt, "base64")
          );
	  const decryptedInterest = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(interestDecrypt, "base64")
          );
	  const decryptedHousehold = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(householdDecrypt, "base64")
          );
	  const decryptedStats = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(statsDecrypt, "base64")
          );
	  const decryptedCSI = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(csiDecrypt, "base64")
          );
	  const decryptedPeer = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(peerDecrypt, "base64")
          );
	  const decryptedSocial = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(socialDecrypt, "base64")
          );
	  const decryptedTech = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(techDecrypt, "base64")
          );
	  const decryptedTutor = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(tutorDecrypt, "base64")
          );
	  const decryptedDistance = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(distanceDecrypt, "base64")
          );
	  const decryptedTrans = crypto.privateDecrypt(
                      {
                  key: privateKey,
                  passphrase: 'ccapprotection',
             },
             Buffer.from(transDecrypt, "base64")
          );


	  //appendToFile("decrypted data: ", decryptedStress.toString());
	if(bcrypt.compareSync('1', decryptedStress.toString())){
		stressOneCount++;
	}
	if(bcrypt.compareSync('2', decryptedStress.toString())){
		stressTwoCount++;
        }
	if(bcrypt.compareSync('3', decryptedStress.toString())){
		stressThreeCount++;
        }
	if(bcrypt.compareSync('4', decryptedStress.toString())){
		stressFourCount++;
        }
	if(bcrypt.compareSync('5', decryptedStress.toString())){
		stressFiveCount++;
        }
	if(bcrypt.compareSync('6', decryptedStress.toString())){
		stressSixCount++;
        }
	if(bcrypt.compareSync('7', decryptedStress.toString())){
		stressSevenCount++;
        }
	if(bcrypt.compareSync('8', decryptedStress.toString())){
		stressEightCount++;
        }
	if(bcrypt.compareSync('9', decryptedStress.toString())){
		stressNineCount++;
        }
	if(bcrypt.compareSync('10', decryptedStress.toString())){
		stressTenCount++;
        }
	if(bcrypt.compareSync('0', decryptedStruggle.toString())){
                struggleZeroCount++;
        }
	if(bcrypt.compareSync('1', decryptedStruggle.toString())){
                struggleOneCount++;
        }
	if(bcrypt.compareSync('2', decryptedStruggle.toString())){
                struggleTwoCount++;
        }
	if(bcrypt.compareSync('3', decryptedStruggle.toString())){
                struggleThreeCount++;
        }
	if(bcrypt.compareSync('4', decryptedStruggle.toString())){
                struggleFourCount++;
        }

	//covid
	if(bcrypt.compareSync('0', decryptedCovid.toString())){
                covid0Count++;
        }
        if(bcrypt.compareSync('1', decryptedCovid.toString())){
                covid1Count++;
        }
        if(bcrypt.compareSync('2', decryptedCovid.toString())){
                covid2Count++;
        }
        if(bcrypt.compareSync('3', decryptedCovid.toString())){
                covid3Count++;
        }
	if(bcrypt.compareSync('01', decryptedCovid.toString())){
                covid01Count++;
        }
        if(bcrypt.compareSync('02', decryptedCovid.toString())){
                covid02Count++;
        }
        if(bcrypt.compareSync('03', decryptedCovid.toString())){
                covid03Count++;
        }
        if(bcrypt.compareSync('12', decryptedCovid.toString())){
                covid12Count++;
        }
        if(bcrypt.compareSync('13', decryptedCovid.toString())){
                covid13Count++;
        }
	if(bcrypt.compareSync('23', decryptedCovid.toString())){
                covid23Count++;
        }
        if(bcrypt.compareSync('012', decryptedCovid.toString())){
                covid012Count++;
        }
        if(bcrypt.compareSync('013', decryptedCovid.toString())){
                covid013Count++;
        }
        if(bcrypt.compareSync('023', decryptedCovid.toString())){
                covid023Count++;
        }
        if(bcrypt.compareSync('123', decryptedCovid.toString())){
                covid123Count++;
        }
	if(bcrypt.compareSync('0123', decryptedCovid.toString())){
                covid0123Count++;
        }

	//family
	if(bcrypt.compareSync('0', decryptedFamily.toString())){
                family0Count++;
        }
        if(bcrypt.compareSync('1', decryptedFamily.toString())){
                family1Count++;
        }
        if(bcrypt.compareSync('2', decryptedFamily.toString())){
                family2Count++;
        }
        if(bcrypt.compareSync('3', decryptedFamily.toString())){
                family3Count++;
        }
        if(bcrypt.compareSync('01', decryptedFamily.toString())){
                family01Count++;
        }
        if(bcrypt.compareSync('02', decryptedFamily.toString())){
                family02Count++;
        }
        if(bcrypt.compareSync('03', decryptedFamily.toString())){
                family03Count++;
        }
        if(bcrypt.compareSync('12', decryptedFamily.toString())){
                family12Count++;
        }
        if(bcrypt.compareSync('13', decryptedFamily.toString())){
                family13Count++;
        }
        if(bcrypt.compareSync('23', decryptedFamily.toString())){
                family23Count++;
        }
        if(bcrypt.compareSync('012', decryptedFamily.toString())){
                family012Count++;
        }
        if(bcrypt.compareSync('013', decryptedFamily.toString())){
                family013Count++;
        }
        if(bcrypt.compareSync('023', decryptedFamily.toString())){
                family023Count++;
        }
        if(bcrypt.compareSync('123', decryptedFamily.toString())){
                family123Count++;
        }
        if(bcrypt.compareSync('0123', decryptedFamily.toString())){
                family0123Count++;
        }

	//friend
	if(bcrypt.compareSync('0', decryptedFriend.toString())){
                friend0Count++;
        }
        if(bcrypt.compareSync('1', decryptedFriend.toString())){
                friend1Count++;
        }
        if(bcrypt.compareSync('2', decryptedFriend.toString())){
                friend2Count++;
        }
        if(bcrypt.compareSync('3', decryptedFriend.toString())){
                friend3Count++;
        }
        if(bcrypt.compareSync('01', decryptedFriend.toString())){
                friend01Count++;
        }
        if(bcrypt.compareSync('02', decryptedFriend.toString())){
                friend02Count++;
        }
        if(bcrypt.compareSync('03', decryptedFriend.toString())){
                friend03Count++;
        }
        if(bcrypt.compareSync('12', decryptedFriend.toString())){
                friend12Count++;
        }
        if(bcrypt.compareSync('13', decryptedFriend.toString())){
                friend13Count++;
        }
        if(bcrypt.compareSync('23', decryptedFriend.toString())){
                friend23Count++;
        }
        if(bcrypt.compareSync('012', decryptedFriend.toString())){
                friend012Count++;
        }
        if(bcrypt.compareSync('013', decryptedFriend.toString())){
                friend013Count++;
        }
        if(bcrypt.compareSync('023', decryptedFriend.toString())){
                friend023Count++;
        }
        if(bcrypt.compareSync('123', decryptedFriend.toString())){
                friend123Count++;
        }
        if(bcrypt.compareSync('0123', decryptedFriend.toString())){
                friend0123Count++;
        }

	//school
	if(bcrypt.compareSync('0', decryptedSchool.toString())){
                school0Count++;
        }
        if(bcrypt.compareSync('1', decryptedSchool.toString())){
                school1Count++;
        }
        if(bcrypt.compareSync('2', decryptedSchool.toString())){
                school2Count++;
        }
        if(bcrypt.compareSync('3', decryptedSchool.toString())){
                school3Count++;
        }
        if(bcrypt.compareSync('01', decryptedSchool.toString())){
                school01Count++;
        }
        if(bcrypt.compareSync('02', decryptedSchool.toString())){
                school02Count++;
        }
        if(bcrypt.compareSync('03', decryptedSchool.toString())){
                school03Count++;
        }
        if(bcrypt.compareSync('12', decryptedSchool.toString())){
                school12Count++;
        }
        if(bcrypt.compareSync('13', decryptedSchool.toString())){
                school13Count++;
        }
        if(bcrypt.compareSync('23', decryptedSchool.toString())){
                school23Count++;
        }
        if(bcrypt.compareSync('012', decryptedSchool.toString())){
                school012Count++;
        }
        if(bcrypt.compareSync('013', decryptedSchool.toString())){
                school013Count++;
        }
        if(bcrypt.compareSync('023', decryptedSchool.toString())){
                school023Count++;
        }
        if(bcrypt.compareSync('123', decryptedSchool.toString())){
                school123Count++;
        }
        if(bcrypt.compareSync('0123', decryptedSchool.toString())){
                school0123Count++;
        }



	if(bcrypt.compareSync('Yes', decryptedInterest.toString())){
                interestYesCount++;
        }
	if(bcrypt.compareSync('No', decryptedInterest.toString())){
                interestNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedHousehold.toString())){
                householdYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedHousehold.toString())){
                householdNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedStats.toString())){
                statsYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedStats.toString())){
                statsNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedCSI.toString())){
                csiYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedCSI.toString())){
                csiNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedPeer.toString())){
                peerYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedPeer.toString())){
                peerNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedSocial.toString())){
                socialYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedSocial.toString())){
                socialNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedTech.toString())){
                techYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedTech.toString())){
                techNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedTutor.toString())){
                tutorYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedTutor.toString())){
                tutorNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedDistance.toString())){
                distanceYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedDistance.toString())){
                distanceNoCount++;
        }
	if(bcrypt.compareSync('Yes', decryptedTrans.toString())){
                transYesCount++;
        }
        if(bcrypt.compareSync('No', decryptedTrans.toString())){
                transNoCount++;
        }


  }



  // appendToFile(bcrypt.compareSync('10', stressLevel));
//  appendToFile(docs[0].var4);
//  appendToFile(bcrypt.compareSync('10', stressLevel));
//  appendToFile(docs[0].var4);
  //
  // const decryptedFirst = crypto.privateDecrypt(
  //		{
  //			key: privateKey,
  //			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  //			oaepHash: "sha256",
  //		},
  //		encryptedFirst
  //	);

  //	appendToFile("decrypted data: ", decryptedFirst.toString());
  //
  






  writeToFile("Number of users with stress level of 1: " + stressOneCount);
  appendToFile("Number of users with stress level of 2: " + stressTwoCount);
  appendToFile("Number of users with stress level of 3: " + stressThreeCount);
  appendToFile("Number of users with stress level of 4: " + stressFourCount);
  appendToFile("Number of users with stress level of 5: " + stressFiveCount);
  appendToFile("Number of users with stress level of 6: " + stressSixCount);
  appendToFile("Number of users with stress level of 7: " + stressSevenCount);
  appendToFile("Number of users with stress level of 8:" + stressEightCount);
  appendToFile("Number of users with stress level of 9: " + stressNineCount);
  appendToFile("Number of users with stress levle of 10: " + stressTenCount);
  appendToFile("Number of users whose main source of struggles is COVID-19: " + struggleZeroCount);
  appendToFile("Number of users whose main source of struggles is Family Issues: " + struggleOneCount);
  appendToFile("Number of users whose main source of struggles is Friendship Problems: " + struggleTwoCount);
  appendToFile("Number of users whose main source of struggles is Remote Learning: " + struggleThreeCount);
  appendToFile("Number of users whose main source of struggles is Overall Social-Emotional Wellness: " + struggleFourCount);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from fear for a family member/friend, and from a parent/caregiver who has lost a job: " + covid0123Count);
  appendToFile("Number of users who are experiencing stress from worrying about dying, from fear for a family member/friend, and whose parent/caregiver had lost a job: " + covid123Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from fear for a family member/friend, and from a parent/caregiver losing a job: " + covid023Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from a parent/caregiver losing a job: " + covid013Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from fear for a family member/friend: " + covid012Count);
  appendToFile("Number of users who are experiencing stress from fear for a family member/friend, from a parent/caregiver losing a job: " + covid23Count);
  appendToFile("Number of users who are experiencing stress from worry about dying, from a parent/caregiver losing a job: " + covid13Count);
  appendToFile("Number of users who are experiencing stress from worry about dying, from fear for a family member/friend: " + covid12Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from a parent/caregiver losing a job: " + covid03Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from fear for a family member/friend: " + covid02Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting it and from worry about dying: " + covid01Count);
  appendToFile("Number of users who are experiencing stress from fear of contracting it: " + covid0Count);
  appendToFile("Number of users who are experiencing stress from worry about dying: " + covid1Count);
  appendToFile("Number of users who are experiencing stress from fear for a family member/friend: " + covid2Count);
  appendToFile("Number of users who are experiencing stress from a parent/caregiver losing a job: " + covid3Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, moving, illness/death, and financial issues: " + family0123Count);
  appendToFile("Number of users who are experiencing stress from moving, illness/death, financial issues: " + family123Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, illness/death, financial issues: " + family023Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, moving, financial issues: " + family013Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, moving, illness or death: " + family012Count);
  appendToFile("Number of users who are experiencing stress from illness/death, financial issues: " + family23Count);
  appendToFile("Number of users who are experiencing stress from moving, financial issues: " + family13Count);
  appendToFile("Number of users who are experiencing stress from moving, illness/death: " + family12Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, financial issues: " + family03Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, illness/death: " + family02Count);
  appendToFile("Number of users who are experiencing stress from separation/divorce, moving: " + family01Count);
  appendToFile("Number of users who are experiencing stress from separation or divorce: " + family0Count);
  appendToFile("Number of users who are experiencing stress from moving: " + family1Count);
  appendToFile("Number of users who are experiencing stress from illness/death: " + family2Count);
  appendToFile("Number of users who are experiencing stress from financial issues: " + family3Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, nervousness in relation to making new friends, staying in touch online: " + friend0123Count);
  appendToFile("Number of users who are experiencing stress from friend communication difficulties, nervousness in relation to making new friends, staying in touch online: " + friend123Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, nervousness in relation to making new friends, staying in touch online: " + friend023Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, staying in touch online: " + friend013Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, and nervousness in relation to making new friends: " + friend012Count);
  appendToFile("Number of users who are experiencing stress from nervousness in relation to making new friends, staying in touch online: " + friend23Count);
  appendToFile("Number of users who are experiencing stress from friend communication difficulties, staying in touch online: " + friend13Count);
  appendToFile("Number of users who are experiencing stress from friend communication difficulties, nervousness in relation to making new friends: " + friend12Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, staying in touch online: " + friend03Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, nervousness in relation to making new friends: " + friend02Count);
  appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties: " + friend01Count);
  appendToFile("Number of users who are experiencing stress from conflict: " + friend0Count);
  appendToFile("Number of users who are experiencing stress from communication difficulties: " + friend1Count);
  appendToFile("Number of users who are experiencing stress from nervousness in relation to making new friends: " + friend2Count);
  appendToFile("Number of users who are experiencing stress from staying in touch online: " + friend3Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, class difficulty, home distractions : " + school0123Count);
  appendToFile("Number of users who are experiencing stress from lack of access to academic help, class difficulty, home distractions :  " + school123Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, class difficulty, home distractions : " + school023Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, home distractions : " + school013Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, class difficulty: " + school012Count);
  appendToFile("Number of users who are experiencing stress from class difficulty, home distractions : " + school23Count);
  appendToFile("Number of users who are experiencing stress from lack of access to academic help, home distractions : " + school13Count);
  appendToFile("Number of users who are experiencing stress from lack of access to academic help, class difficulty:" + school12Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, home distractions : " + school03Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, class difficulty" + school02Count);
  appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help" + school01Count);
  appendToFile("Number of users who are experiencing stress from internet stability and lack of access to technology: " + school0Count);
  appendToFile("Number of users who are experiencing stress from lack accessibility to academic help: " + school1Count);
  appendToFile("Number of users who are experiencing stress from difficulty of classes: " + school2Count);
  appendToFile("Number of users who are experiencing stress from distractions at home: " + school3Count);
  appendToFile("Number of users reading about how to protect yourself from COVID-19: " + interestYesCount);
  appendToFile("Number of users not reading about how to protect yourself from COVID-19: " + interestNoCount);
  appendToFile("Number of users learning about how to keep your household clean and safe: " + householdYesCount);
  appendToFile("Number of users not learning about how to keep your household clean and safe: " + householdNoCount);
  appendToFile("Number of users reading about coronavirus statistics: " + statsYesCount);
  appendToFile("Number of users not reading about coronavirus statistics: " + statsNoCount);
  appendToFile("Number of users accessing CSI: " + csiYesCount);
  appendToFile("Number of users not accessing CSI: " + csiNoCount);
  appendToFile("Number of users accessing Peer Counseling: " + peerYesCount);
  appendToFile("Number of users not accessing Peer Counseling: " + peerNoCount);
  appendToFile("Number of users learning about the social help link: " + socialYesCount);
  appendToFile("Number of users not learning about the social help link: " + socialNoCount);
  appendToFile("Number of users accessing the CUSD Tech Support Link: " + techYesCount);
  appendToFile("Number of users not accessing the CUSD Tech Support Link: " + techNoCount);
  appendToFile("Number of users using the free online tutoring option: " + tutorYesCount);
  appendToFile("Number of users not using the free online tutoring option: " + tutorNoCount);
  appendToFile("Number of users learning about how to stay focused during distance learning: " + distanceYesCount);
  appendToFile("Number of users not learning about how to stay focused during distanc learning: " + distanceNoCount);
  appendToFile("Number of users looking at transition program contact: " + transYesCount);
  appendToFile("Number of users not looking at transition program contact: " + transNoCount);



});




//const decryptedFirst = crypto.privateDecrypt(
//            {
//        key: privateKey,
//		passphrase: 'ccapprotection',
//   },
   //Buffer.from("PIZZA", "base64")
//);


















