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


//echo "Connected successfully";




//to close the connection, use $conn->close();



//to create table with five columns: "id", "firstname", "lastname", "email", and "reg date"
//$sql = "CREATE TABLE myGuests (
//    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//    firstname VARCHAR(30) NOT NULL,
//    lastname VARCHAR(30) NOT NULL,
//   email VARCHAR(50),
//   reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//)";
//to create a database
//$sql = "CREATE DATABASE myDB";


//how to insert data into sql database and table
//INSERT INTO table_name (column1, column2, column3, ...)
//VALUES (value1, value2, value3, ...)
//$sql = "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('John', 'Doe', 'john@example.com')";
//for inserting multiple
//$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
//VALUES ('Mary', 'Moe', 'mary@example.com')";

//if($conn->query($sql) === TRUE){
    //how to get the id of the last inserted record
//    $last_id = $conn->insert_id;
//    echo "new record created successfully. Last inserted ID is: ".$last_id;
//}else{
//    echo "Error creating database: ".$conn->error;
//}

//for checking if multiple insert worked
//if($conn->multi_query($sql) === TRUE){
//    echo "New records created successfully";
//}else{
//    echo "Error: ".$sql."<br>".$conn->error;
//}


//$conn->close();


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $rawData = file_get_contents("php://input");
    //print_r($rawData);
    $array = json_decode($rawData, true);
    print_r($array);
    //print_r($array['firstNameAns']);

    $stmt = $conn->prepare("INSERT INTO MyUsers (eFirstName, eLastName, eID, eStress, eStruggle, eCOVID, eFamily, eFriend, eSchool, eInterestProtect, eHouseholdClean, eStats, eCSI, eTrans, ePeer, eSocialHelp, eTechSupport, eTutor, eDistance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    print_r($stmt);
    $stmt->bind_param("ssissssssssssssssss", $eFirstName, $eLastName, $eID, $eStress, $eStruggle, $eCOVID, $eFamily, $eFriend, $eSchool, $eInterestProtect, $eHouseholdClean, $eStats, $eCSI, $eTrans, $ePeer, $eSocialHelp, $eTechSupport, $eTutor, $eDistance);
    //$stmt->bind_param('sss',$eFirstName, $eLastName, $eID);
    $eFirstName = $array['firstNameAns'];
    $eLastName = $array['lastNameAns'];
    $eID = $array['idAns'];
    $eStress = $array['stressAns'];
    $eStruggle = $array['struggleAns'];
    $eCOVID = $array['covidAns'];
    $eFamily = $array['familyAns'];
    $eFriend = $array['friendAns'];
    $eSchool = $array['schoolAns'];
    $eInterestProtect = $array['interestProtectAns'];
    $eHouseholdClean = $array['householdCleanAns'];
    $eStats = $array['statsAns'];
    $eCSI = $array['csiAns'];
    $eTrans = $array['transAns'];
    $ePeer = $array['peerAns'];
    $eSocialHelp = $array['socialHelpAns'];
    $eTechSupport = $array['techSupportAns'];
    $eTutor = $array['tutorAns'];
    $eDistance = $array['distanceFocusAns'];
    $stmt->execute();
}

?>