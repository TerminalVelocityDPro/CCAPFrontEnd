<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ccapDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    print_r("Connection failed: ".$conn->connect_error);
}else{
    print_r("Connected successfully");
}

//to create a database
//$sql = "CREATE DATABASE ccapDB";
// const eFirstName = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(escapeHTML(post_body.firstNameAns))));
//         const eLastName = JSON.stringify(crypto.publicEncrypt(publicKey,Buffer.from(escapeHTML(post_body.lastNameAns)) ));
//         const eID = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(escapeHTML(post_body.idAns))));
//         const eStress = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.stressAns)), 10)));
//         const eStruggle = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.struggleAns)), 10)));
//         const eCovid = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.covidAns)), 10)));
//         const eFamily = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.familyAns)), 10)));
//         const eFriend = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.friendAns)),10)));
//         const eSchool = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.schoolAns)),10)));
//         const eInterestProtect =JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.interestProtectAns)),10))) ;
//         const eHouseholdClean = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.householdCleanAns)), 10)));
//         const eStats = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.statsAns)), 10)));
//         const eCSI = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.csiAns)), 10)));
// const ePeer = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.peerAns)), 10)));
// const eSocialHelp = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.socialHelpAns)), 10)));
// const eTechSupport = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.techSupportAns)),10)));
// const eTutor = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.tutorAns)), 10)));
// const eDistance = JSON.stringify(crypto.publicEncrypt(publicKey, Buffer.from(bcrypt.hashSync(escapeHTML(post_body.distanceFocusAns)), 10)));
$sql = "CREATE TABLE myUsers (
    eFirstName VARCHAR(30) NOT NULL,
    eLastName VARCHAR(30) NOT NULL,
    eID VARCHAR(30) NOT NULL,
    eStress VARCHAR(30) NOT NULL,
    eStruggle VARCHAR(30) NOT NULL,
    eCovid VARCHAR(30) NOT NULL,
    eFamily VARCHAR(30) NOT NULL,
    eFriend VARCHAR(30) NOT NULL,
    eSchool VARCHAR(30) NOT NULL,
    eInterestProtect VARCHAR(30) NOT NULL,
    eHouseholdClean VARCHAR(30) NOT NULL,
    eStats VARCHAR(30) NOT NULL,
    eCSI VARCHAR(30) NOT NULL,
    eTrans VARCHAR(30) NOT NULL,
    ePeer VARCHAR(30) NOT NULL,
    eSocialHelp VARCHAR(30) NOT NULL,
    eTechSupport VARCHAR(30) NOT NULL,
    eTutor VARCHAR(30) NOT NULL,
    eDistance VARCHAR(30) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
)";


if($conn->query($sql) === TRUE){
    echo "New Database created";
}else{
    echo "Error creating database: ".$conn->error;
}



?>