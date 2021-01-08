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
    // $all = array(
    //   "All ID" => $allID,
    //   "All Stress" => $allStress,
    //   "All Struggle" => $allStruggle,
    //   "All COVID" => $allCovid,
    //   "All Family" => $allFamily,
    //   "All Friend" => $allFriend,
    //   "All School" => $allSchool,
    //   "All Interest Protect" => $allInterestProtect,
    //   "All Household Clean" => $allHouseholdClean,
    //   "ALL Stats" => $allStats, 
    //   "All CSI" => $allCSI,
    //   "All Trans" => $allTrans, 
    //   "All Peer" => $allPeer,
    //   "All Social Help" => $allSocialHelp,
    //   "All Tech Support" => $allTechSupport,
    //   "All Tutor" => $allTutor,
    //   "All Distance" => $allDistance
    // );
      //echo json_encode($row['eFirstName'].'<br>');
  }
} catch(PDOException $e) {
  //echo "Error: " . $e->getMessage();
}

$conn = null;


$count = sizeof($allID);
$stress1Count = 0;
$stress1Percent = 0;
$stress2Count = 0;
$stress2Percent = 0;
$stress3Count = 0;
$stress3Percent = 0;
$stress4Count = 0;
$stress4Percent = 0;
$stress5Count = 0;
$stress5Percent = 0;
$stress6Count = 0;
$stress6Percent = 0;
$stress7Count = 0;
$stress7Percent = 0;
$stress8Count = 0;
$stress8Percent = 0;
$stress9Count = 0;
$stress9Percent = 0;
$stress10Count = 0;
$stress10Percent = 0;

foreach($allStress as $stress){
  if($stress == 1){
    $stress1Count++;
  }
  if($stress == 2){
    $stress2Count++;
  }
  if($stress == 3){
    $stress3Count++;
  }
  if($stress == 4){
    $stress4Count++;
  }
  if($stress == 5){
    $stress5Count++;
  }
  if($stress == 6){
    $stress6Count++;
  }
  if($stress == 7){
    $stress7Count++;
  }
  if($stress == 8){
    $stress8Count++;
  }
  if($stress == 9){
    $stress9Count++;
  }
  if($stress == 10){
    $stress10Count++;
  }
}

$stress1Percent = ($stress1Count/$count)*100;
$stress2Percent = ($stress2Count/$count)*100;
$stress3Percent = ($stress3Count/$count)*100;
$stress4Percent = ($stress4Count/$count)*100;
$stress5Percent = ($stress5Count/$count)*100;
$stress6Percent = ($stress6Count/$count)*100;
$stress7Percent = ($stress7Count/$count)*100;
$stress8Percent = ($stress8Count/$count)*100;
$stress9Percent = ($stress9Count/$count)*100;
$stress10Percent = ($stress10Count/$count)*100;

$struggleIsCovid = 0;
$struggleIsFamily = 0;
$struggleIsFriendship = 0;
$struggleIsRemote = 0;
$struggleIsOverall = 0;

foreach($allStruggle as $struggle){
  if($struggle == 0){
    $struggleIsCovid++;
  }
  if($struggle == 1){
    $struggleIsFamily++;
  }
  if($struggle == 2){
    $struggleIsFriendship++;
  }
  if($struggle == 3){
    $struggleIsRemote++;
  }
  if($struggle == 4){
    $struggleIsOverall++;
  }
}

//covid
$covid0123Count = 0;
$covid123Count = 0;
$covid023Count = 0;
$covid013Count = 0;
$covid012Count = 0;
$covid23Count = 0;
$covid13Count = 0;
$covid12Count = 0;
$covid03Count= 0;
$covid02Count = 0;
$covid01Count = 0;
$covid0Count = 0;
$covid1Count = 0;
$covid2Count = 0;
$covid3Count = 0;

foreach($allCovid as $covid){
  if($covid == "0123"){ //prolly test this one day
    $covid0123Count++;
  }
  if($covid == "123"){
    $covid123Count++;
  }
  if($covid == "023"){
    $covid023Count++;
  }
  if($covid == "013"){
    $covid013Count++;
  }
  if($covid == "012"){
    $covid012Count++;
  }
  if($covid == "23"){
    $covid23Count++;
  }
  if($covid == "13"){
    $covid13Count++;
  }
  if($covid == "12"){
    $covid12Count++;
  }
  if($covid == "03"){
    $covid03Count++;
  }
  if($covid == "02"){
    $covid02Count++;
  }
  if($covid == "01"){
    $covid01Count++;
  }
  if($covid == "0"){
    $covid0Count++;
  }
  if($covid == "1"){
    $covid1Count++;
  }
  if($covid == "2"){
    $covid2Count++;
  }
  if($covid == "3"){
    $covid3Count++;
  }
}

//family
$family0123Count = 0;
$family123Count = 0;
$family023Count = 0;
$family013Count = 0;
$family012Count = 0;
$family23Count = 0;
$family13Count = 0;
$family12Count = 0;
$family03Count= 0;
$family02Count = 0;
$family01Count = 0;
$family0Count = 0;
$family1Count = 0;
$family2Count = 0;
$family3Count = 0;

foreach($allFamily as $family){
  if($family == "0123"){ //prolly test this one day
    $family0123Count++;
  }
  if($family == "123"){
    $family123Count++;
  }
  if($family == "023"){
    $family023Count++;
  }
  if($family == "013"){
    $family013Count++;
  }
  if($family == "012"){
    $family012Count++;
  }
  if($family == "23"){
    $family23Count++;
  }
  if($family == "13"){
    $family13Count++;
  }
  if($family == "12"){
    $family12Count++;
  }
  if($family == "03"){
    $family03Count++;
  }
  if($family == "02"){
    $family02Count++;
  }
  if($family == "01"){
    $family01Count++;
  }
  if($family == "0"){
    $family0Count++;
  }
  if($family == "1"){
    $family1Count++;
  }
  if($family == "2"){
    $family2Count++;
  }
  if($family == "3"){
    $family3Count++;
  }
}

//friend
$friend0123Count = 0;
$friend123Count = 0;
$friend023Count = 0;
$friend013Count = 0;
$friend012Count = 0;
$friend23Count = 0;
$friend13Count = 0;
$friend12Count = 0;
$friend03Count= 0;
$friend02Count = 0;
$friend01Count = 0;
$friend0Count = 0;
$friend1Count = 0;
$friend2Count = 0;
$friend3Count = 0;

foreach($allFriend as $friend){
  if($friend == "0123"){ //prolly test this one day
    $friend0123Count++;
  }
  if($friend == "123"){
    $friend123Count++;
  }
  if($friend == "023"){
    $friend023Count++;
  }
  if($friend == "013"){
    $friend013Count++;
  }
  if($friend == "012"){
    $friend012Count++;
  }
  if($friend == "23"){
    $friend23Count++;
  }
  if($friend == "13"){
    $friend13Count++;
  }
  if($friend == "12"){
    $friend12Count++;
  }
  if($friend == "03"){
    $friend03Count++;
  }
  if($friend == "02"){
    $friend02Count++;
  }
  if($friend == "01"){
    $friend01Count++;
  }
  if($friend == "0"){
    $friend0Count++;
  }
  if($friend == "1"){
    $friend1Count++;
  }
  if($friend == "2"){
    $friend2Count++;
  }
  if($friend == "3"){
    $friend3Count++;
  }
}

//school
$school0123Count = 0;
$school123Count = 0;
$school023Count = 0;
$school013Count = 0;
$school012Count = 0;
$school23Count = 0;
$school13Count = 0;
$school12Count = 0;
$school03Count= 0;
$school02Count = 0;
$school01Count = 0;
$school0Count = 0;
$school1Count = 0;
$school2Count = 0;
$school3Count = 0;

foreach($allSchool as $school){
  if($school == "0123"){ //prolly test this one day
    $school0123Count++;
  }
  if($school == "123"){
    $school123Count++;
  }
  if($school == "023"){
    $school023Count++;
  }
  if($school == "013"){
    $school013Count++;
  }
  if($school == "012"){
    $school012Count++;
  }
  if($school == "23"){
    $school23Count++;
  }
  if($school == "13"){
    $school13Count++;
  }
  if($school == "12"){
    $school12Count++;
  }
  if($school == "03"){
    $school03Count++;
  }
  if($school == "02"){
    $school02Count++;
  }
  if($school == "01"){
    $school01Count++;
  }
  if($school == "0"){
    $school0Count++;
  }
  if($school == "1"){
    $school1Count++;
  }
  if($school == "2"){
    $school2Count++;
  }
  if($school == "3"){
    $school3Count++;
  }
}


$interestYesCount = 0;
$interestNoCount = 0;

foreach($allInterestProtect as $interest){
  if($interest == "Yes"){
    $interestYesCount++;
  }
  if($interest == "No"){
    $interestNoCount++;
  }
}

$householdYesCount = 0;
$householdNoCount = 0;

foreach($allHouseholdClean as $house){
  if($house == "Yes"){
    $householdYesCount++;
  }
  if($house == "No"){
    $householdNoCount++;
  }
}

$statsYesCount = 0;
$statsNoCount = 0;

foreach($allStats as $stats){
  if($stats == "Yes"){
    $statsYesCount++;
  }
  if($stats == "No"){
    $statsNoCount++;
  }
}

$csiYesCount = 0;
$csiNoCount = 0;

foreach($allCSI as $csi){
  if($csi == "Yes"){
    $csiYesCount++;
  }
  if($csi == "No"){
    $csiNoCount++;
  }
}

$peerYesCount = 0;
$peerNoCount = 0;

foreach($allPeer as $peer){
  if($peer == "Yes"){
    $peerYesCount++;
  }
  if($peer == "No"){
    $peerNoCount++;
  }
}

$socialYesCount = 0;
$socialNoCount = 0;

foreach($allSocialHelp as $social){
  if($social == "Yes"){
    $socialYesCount++;
  }
  if($social == "No"){
    $socialNoCount++;
  }
}

$techYesCount = 0;
$techNoCount = 0;

foreach($allTechSupport as $tech){
  if($tech == "Yes"){
    $techYesCount++;
  }
  if($tech == "No"){
    $techNoCount++;
  }
}

$tutorYesCount = 0;
$tutorNoCount = 0;

foreach($allTutor as $tutor){
  if($tutor == "Yes"){
    $tutorYesCount++;
  }
  if($tutor == "No"){
    $tutorNoCount++;
  }
}

$distanceYesCount = 0;
$distanceNoCount = 0;

foreach($allDistance as $distance){
  if($distance == "Yes"){
    $distanceYesCount++;
  }
  if($distance == "No"){
    $distanceNoCount++;
  }
}

$transYesCount = 0;
$transNoCount = 0;

foreach($allTrans as $trans){
  if($trans == "Yes"){
    $transYesCount++;
  }
  if($trans == "No"){
    $transNoCount++;
  }
}


// writeToFile("Number of users with stress level of 1: " + stressOneCount);
// appendToFile("Number of users with stress level of 2: " + stressTwoCount);
// appendToFile("Number of users with stress level of 3: " + stressThreeCount);
// appendToFile("Number of users with stress level of 4: " + stressFourCount);
// appendToFile("Number of users with stress level of 5: " + stressFiveCount);
// appendToFile("Number of users with stress level of 6: " + stressSixCount);
// appendToFile("Number of users with stress level of 7: " + stressSevenCount);
// appendToFile("Number of users with stress level of 8:" + stressEightCount);
// appendToFile("Number of users with stress level of 9: " + stressNineCount);
// appendToFile("Number of users with stress levle of 10: " + stressTenCount);
// appendToFile("Number of users whose main source of struggles is COVID-19: " + struggleZeroCount);
// appendToFile("Number of users whose main source of struggles is Family Issues: " + struggleOneCount);
// appendToFile("Number of users whose main source of struggles is Friendship Problems: " + struggleTwoCount);
// appendToFile("Number of users whose main source of struggles is Remote Learning: " + struggleThreeCount);
// appendToFile("Number of users whose main source of struggles is Overall Social-Emotional Wellness: " + struggleFourCount);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from fear for a family member/friend, and from a parent/caregiver who has lost a job: " + covid0123Count);
// appendToFile("Number of users who are experiencing stress from worrying about dying, from fear for a family member/friend, and whose parent/caregiver had lost a job: " + covid123Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from fear for a family member/friend, and from a parent/caregiver losing a job: " + covid023Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from a parent/caregiver losing a job: " + covid013Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from worry about dying, from fear for a family member/friend: " + covid012Count);
// appendToFile("Number of users who are experiencing stress from fear for a family member/friend, from a parent/caregiver losing a job: " + covid23Count);
// appendToFile("Number of users who are experiencing stress from worry about dying, from a parent/caregiver losing a job: " + covid13Count);
// appendToFile("Number of users who are experiencing stress from worry about dying, from fear for a family member/friend: " + covid12Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from a parent/caregiver losing a job: " + covid03Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting COVID-19, from fear for a family member/friend: " + covid02Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting it and from worry about dying: " + covid01Count);
// appendToFile("Number of users who are experiencing stress from fear of contracting it: " + covid0Count);
// appendToFile("Number of users who are experiencing stress from worry about dying: " + covid1Count);
// appendToFile("Number of users who are experiencing stress from fear for a family member/friend: " + covid2Count);
// appendToFile("Number of users who are experiencing stress from a parent/caregiver losing a job: " + covid3Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, moving, illness/death, and financial issues: " + family0123Count);
// appendToFile("Number of users who are experiencing stress from moving, illness/death, financial issues: " + family123Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, illness/death, financial issues: " + family023Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, moving, financial issues: " + family013Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, moving, illness or death: " + family012Count);
// appendToFile("Number of users who are experiencing stress from illness/death, financial issues: " + family23Count);
// appendToFile("Number of users who are experiencing stress from moving, financial issues: " + family13Count);
// appendToFile("Number of users who are experiencing stress from moving, illness/death: " + family12Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, financial issues: " + family03Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, illness/death: " + family02Count);
// appendToFile("Number of users who are experiencing stress from separation/divorce, moving: " + family01Count);
// appendToFile("Number of users who are experiencing stress from separation or divorce: " + family0Count);
// appendToFile("Number of users who are experiencing stress from moving: " + family1Count);
// appendToFile("Number of users who are experiencing stress from illness/death: " + family2Count);
// appendToFile("Number of users who are experiencing stress from financial issues: " + family3Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, nervousness in relation to making new friends, staying in touch online: " + friend0123Count);
// appendToFile("Number of users who are experiencing stress from friend communication difficulties, nervousness in relation to making new friends, staying in touch online: " + friend123Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, nervousness in relation to making new friends, staying in touch online: " + friend023Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, staying in touch online: " + friend013Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties, and nervousness in relation to making new friends: " + friend012Count);
// appendToFile("Number of users who are experiencing stress from nervousness in relation to making new friends, staying in touch online: " + friend23Count);
// appendToFile("Number of users who are experiencing stress from friend communication difficulties, staying in touch online: " + friend13Count);
// appendToFile("Number of users who are experiencing stress from friend communication difficulties, nervousness in relation to making new friends: " + friend12Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, staying in touch online: " + friend03Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, nervousness in relation to making new friends: " + friend02Count);
// appendToFile("Number of users who are experiencing stress from friend conflict, friend communication difficulties: " + friend01Count);
// appendToFile("Number of users who are experiencing stress from conflict: " + friend0Count);
// appendToFile("Number of users who are experiencing stress from communication difficulties: " + friend1Count);
// appendToFile("Number of users who are experiencing stress from nervousness in relation to making new friends: " + friend2Count);
// appendToFile("Number of users who are experiencing stress from staying in touch online: " + friend3Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, class difficulty, home distractions : " + school0123Count);
// appendToFile("Number of users who are experiencing stress from lack of access to academic help, class difficulty, home distractions :  " + school123Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, class difficulty, home distractions : " + school023Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, home distractions : " + school013Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help, class difficulty: " + school012Count);
// appendToFile("Number of users who are experiencing stress from class difficulty, home distractions : " + school23Count);
// appendToFile("Number of users who are experiencing stress from lack of access to academic help, home distractions : " + school13Count);
// appendToFile("Number of users who are experiencing stress from lack of access to academic help, class difficulty:" + school12Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, home distractions : " + school03Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, class difficulty" + school02Count);
// appendToFile("Number of users who are experiencing stress from internet stability/lack of tech access, lack of access to academic help" + school01Count);
// appendToFile("Number of users who are experiencing stress from internet stability and lack of access to technology: " + school0Count);
// appendToFile("Number of users who are experiencing stress from lack accessibility to academic help: " + school1Count);
// appendToFile("Number of users who are experiencing stress from difficulty of classes: " + school2Count);
// appendToFile("Number of users who are experiencing stress from distractions at home: " + school3Count);
// appendToFile("Number of users reading about how to protect yourself from COVID-19: " + interestYesCount);
// appendToFile("Number of users not reading about how to protect yourself from COVID-19: " + interestNoCount);
// appendToFile("Number of users learning about how to keep your household clean and safe: " + householdYesCount);
// appendToFile("Number of users not learning about how to keep your household clean and safe: " + householdNoCount);
// appendToFile("Number of users reading about coronavirus statistics: " + statsYesCount);
// appendToFile("Number of users not reading about coronavirus statistics: " + statsNoCount);
// appendToFile("Number of users accessing CSI: " + csiYesCount);
// appendToFile("Number of users not accessing CSI: " + csiNoCount);
// appendToFile("Number of users accessing Peer Counseling: " + peerYesCount);
// appendToFile("Number of users not accessing Peer Counseling: " + peerNoCount);
// appendToFile("Number of users learning about the social help link: " + socialYesCount);
// appendToFile("Number of users not learning about the social help link: " + socialNoCount);
// appendToFile("Number of users accessing the CUSD Tech Support Link: " + techYesCount);
// appendToFile("Number of users not accessing the CUSD Tech Support Link: " + techNoCount);
// appendToFile("Number of users using the free online tutoring option: " + tutorYesCount);
// appendToFile("Number of users not using the free online tutoring option: " + tutorNoCount);
// appendToFile("Number of users learning about how to stay focused during distance learning: " + distanceYesCount);
// appendToFile("Number of users not learning about how to stay focused during distanc learning: " + distanceNoCount);
// appendToFile("Number of users looking at transition program contact: " + transYesCount);
// appendToFile("Number of users not looking at transition program contact: " + transNoCount);














// echo json_encode($all);
//echo $allID;



//echo json_encode(42);

?>