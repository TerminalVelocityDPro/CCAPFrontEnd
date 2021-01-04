<?php

include_once("db.php");

$allID = [];
$allStress = [];

//https://stackoverflow.com/questions/23740548/how-do-i-pass-variables-and-data-from-php-to-javascript


try {
  
  $stmt = $conn->prepare("SELECT id, eStress, eStruggle, eCovid, eFamily, eFriend, eSchool, eInterestProtect, eHouseholdClean, eStats, eCSI, eTrans, ePeer, eSocialHelp, eTechSupport, eTutor, eDistance FROM myusers");
  $stmt->execute();

  $result = $stmt->fetchAll();
  foreach($result as $row){
    array_push($allID, $row['id']);
    array_push($allStress, $row['eStress']);
      //echo json_encode($row['eFirstName'].'<br>');
  }

} catch(PDOException $e) {
  //echo "Error: " . $e->getMessage();
}

$conn = null;

//print_r($allStress)
//echo $allID;



//echo json_encode(42);

?>