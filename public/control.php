<?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "ccapDB";

include_once("db.php");


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $rawData = file_get_contents("php://input");
    //print_r($rawData);
    $array = json_decode($rawData, true);
    print_r($array);
    //print_r($array['firstNameAns']);
    //SELECT AES_DECRYPT(`eFirstName`, UNHEX(SHA2('ccap password', 512))) FROM `myusers`;
    try{
        
        echo "Connected successfully";
        $stmt = $conn->prepare("INSERT INTO MyUsers (eFirstName, eLastName, eID, eStress, eStruggle, eCOVID, eFamily, eFriend, eSchool, eInterestProtect, eHouseholdClean, eStats, eCSI, eTrans, ePeer, eSocialHelp, eTechSupport, eTutor, eDistance) 
        VALUES (AES_ENCRYPT(:eFirstName, :keyPhrase), AES_ENCRYPT(:eLastName, :keyPhrase), AES_ENCRYPT(:eID, :keyPhrase),
        :eStress,
        :eStruggle,
        :eCOVID,
        :eFamily,
        :eFriend,
        :eSchool,
        :eInterestProtect,
        :eHouseholdClean,
        :eStats,
        :eCSI,
        :eTrans,
        :ePeer,
        :eSocialHelp,
        :eTechSupport,
        :eTutor,
        :eDistance)");
        $stmt->bindParam(':keyPhrase', $keyPhrase);
        $stmt->bindParam(':eFirstName', $eFirstName);
        $stmt->bindParam(':eLastName', $eLastName);
        $stmt->bindParam(':eID', $eID);
        $stmt->bindParam(':eStress', $eStress);
        $stmt->bindParam(':eStruggle', $eStruggle);
        $stmt->bindParam(':eCOVID', $eCOVID);
        $stmt->bindParam(':eFamily', $eFamily);
        $stmt->bindParam(':eFriend', $eFriend);
        $stmt->bindParam(':eSchool', $eSchool);
        $stmt->bindParam(':eInterestProtect', $eInterestProtect);
        $stmt->bindParam(':eHouseholdClean', $eHouseholdClean);
        $stmt->bindParam(':eStats', $eStats);
        $stmt->bindParam(':eCSI', $eCSI);
        $stmt->bindParam(':eTrans', $eTrans);
        $stmt->bindParam(':ePeer', $ePeer);
        $stmt->bindParam(':eSocialHelp', $eSocialHelp);
        $stmt->bindParam(':eTechSupport', $eTechSupport);
        $stmt->bindParam(':eTutor', $eTutor);
        $stmt->bindParam(':eDistance', $eDistance);
        $firstNameBool = 0;
        $lastNameBool = 0;
        $idBool = 0;
    

    
        if($firstNameBool == 1 && $lastNameBool == 1 && $idBool == 1){
        $keyPhrase = $ekey;
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
    }catch(PDOException $e){
        echo "Connection failed: ". $e->getMessage();
    }
}

?>