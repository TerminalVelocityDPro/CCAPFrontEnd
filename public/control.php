<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ccapDB";

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $rawData = file_get_contents("php://input");
    //print_r($rawData);
    $array = json_decode($rawData, true);
    print_r($array);
    //print_r($array['firstNameAns']);
    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
        $stmt = $conn->prepare("INSERT INTO MyUsers (eFirstName, eLastName, eID, eStress, eStruggle, eCOVID, eFamily, eFriend, eSchool, eInterestProtect, eHouseholdClean, eStats, eCSI, eTrans, ePeer, eSocialHelp, eTechSupport, eTutor, eDistance) 
        VALUES (AES_ENCRYPT(:eFirstName, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eLastName, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eID, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eStress, UNHEX(SHA2('ccap password', 512))),
        AES_ENCRYPT(:eStruggle, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eCOVID, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eFamily, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eFriend, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eSchool, UNHEX(SHA2('ccap password', 512))),
        AES_ENCRYPT(:eInterestProtect, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eHouseholdClean, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eStats, UNHEX(SHA2('ccap password', 512))),
        AES_ENCRYPT(:eCSI, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eTrans, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:ePeer, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eSocialHelp, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eTechSupport, UNHEX(SHA2('ccap password', 512))), 
        AES_ENCRYPT(:eTutor, UNHEX(SHA2('ccap password', 512))),
        AES_ENCRYPT(:eDistance, UNHEX(SHA2('ccap password', 512))))");
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
    }catch(PDOException $e){
        echo "Connection failed: ". $e->getMessage();
    }
}

?>