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
    $firstNameBool = 0;
    $lastNameBool = 0;
    $idBool = 0;

    if(preg_match("/^[a-zA-Z.-]{1,10}/", $array['firstNameAns'])){
         print_r("THE FIRST NAME IS FINE");
         $firstNameBool = 1;
     }else{
         print_r("THIS FIRST NAME IS GARBAGE");
    }

    if(preg_match("/^[a-zA-Z.-]{1,10}/", $array['lastNameAns'])){
        print_r("THE LAST NAME IS FINE");
        $lastNameBool = 1;
    }else{
        print_r("THIS LAST NAME IS GARBAGE");
    }

    if(preg_match("/^[0-9]{9}/", $array['idAns'])){
        print_r("THE ID IS FINE");
        $idBool = 1;
    }else{
        print_r("THIS ID IS GARBAGE");
    }

    if($firstNameBool == 1 && $lastNameBool == 1 && $idBool == 1){
    $eFirstName = htmlspecialchars($array['firstNameAns'], ENT_QUOTES);
    $eLastName = htmlspecialchars($array['lastNameAns'], ENT_QUOTES);
    $eID = htmlspecialchars($array['idAns'], ENT_QUOTES);
    $eStress = htmlspecialchars($array['stressAns'], ENT_QUOTES);
    $eStruggle = htmlspecialchars($array['struggleAns'], ENT_QUOTES);
    $eCOVID = htmlspecialchars($array['covidAns'], ENT_QUOTES);
    $eFamily = htmlspecialchars($array['familyAns'], ENT_QUOTES);
    $eFriend = htmlspecialchars($array['friendAns'], ENT_QUOTES);
    $eSchool = htmlspecialchars($array['schoolAns'], ENT_QUOTES);
    $eInterestProtect = htmlspecialchars($array['interestProtectAns'], ENT_QUOTES);
    $eHouseholdClean = htmlspecialchars($array['householdCleanAns'], ENT_QUOTES);
    $eStats = htmlspecialchars($array['statsAns'], ENT_QUOTES);
    $eCSI = htmlspecialchars($array['csiAns'], ENT_QUOTES);
    $eTrans = htmlspecialchars($array['transAns'], ENT_QUOTES);
    $ePeer = htmlspecialchars($array['peerAns'], ENT_QUOTES);
    $eSocialHelp = htmlspecialchars($array['socialHelpAns'], ENT_QUOTES);
    $eTechSupport = htmlspecialchars($array['techSupportAns'], ENT_QUOTES);
    $eTutor = htmlspecialchars($array['tutorAns'], ENT_QUOTES);
    $eDistance = htmlspecialchars($array['distanceFocusAns'], ENT_QUOTES);
    $stmt->execute();
    }
}

?>