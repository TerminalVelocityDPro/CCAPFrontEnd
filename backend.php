<?php

include_once("db.php");

$allID = [];
$allStress = [];
$allStruggle = [];
$allCovid = [];
$allFamily = [];
$allFriend = [];
$allSchool = [];
$allInterestProtect = [];
$allHouseholdClean = [];
$allStats = [];
$allCSI = [];
$allTrans = [];
$allPeer = [];
$allSocialHelp = [];
$allTechSupport = [];
$allTutor = [];
$allDistance = [];



try {  
  $stmt = $conn->prepare("SELECT id, eStress, eStruggle, eCovid, eFamily, eFriend, eSchool, eInterestProtect, eHouseholdClean, eStats, eCSI, eTrans, ePeer, eSocialHelp, eTechSupport, eTutor, eDistance FROM myusers");
  $stmt->execute();
  $result = $stmt->fetchAll();
  foreach($result as $row){
    array_push($allID, $row['id']);
    array_push($allStress, $row['eStress']);
    array_push($allStruggle, $row['eStruggle']);
    array_push($allCovid, $row['eCovid']);
    array_push($allFamily, $row['eFamily']);
    array_push($allFriend, $row['eFriend']);
    array_push($allSchool, $row['eSchool']);
    array_push($allInterestProtect, $row['eInterestProtect']);
    array_push($allHouseholdClean, $row['eHouseholdClean']);
    array_push($allStats, $row['eStats']);
    array_push($allCSI, $row['eCSI']);
    array_push($allTrans, $row['eTrans']);
    array_push($allPeer, $row['ePeer']);
    array_push($allSocialHelp, $row['eSocialHelp']);
    array_push($allTechSupport, $row['eTechSupport']);
    array_push($allTutor, $row['eTutor']);
    array_push($allDistance, $row['eDistance']);
    $all = array(
      "All ID" => $allID,
      "All Stress" => $allStress,
      "All Struggle" => $allStruggle,
      "All COVID" => $allCovid,
      "All Family" => $allFamily,
      "All Friend" => $allFriend,
      "All School" => $allSchool,
      "All Interest Protect" => $allInterestProtect,
      "All Household Clean" => $allHouseholdClean,
      "ALL Stats" => $allStats, 
      "All CSI" => $allCSI,
      "All Trans" => $allTrans, 
      "All Peer" => $allPeer,
      "All Social Help" => $allSocialHelp,
      "All Tech Support" => $allTechSupport,
      "All Tutor" => $allTutor,
      "All Distance" => $allDistance
    );
      //echo json_encode($row['eFirstName'].'<br>');
  }
} catch(PDOException $e) {
  //echo "Error: " . $e->getMessage();
}

$conn = null;


echo json_encode($all);
//echo $allID;



//echo json_encode(42);

?>