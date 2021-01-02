<?php

include_once("db.php");


try {
  
  $stmt = $conn->prepare("SELECT id, eFirstName, eLastName FROM myusers");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->fetchAll();
  foreach($result as $row){
      echo $row['eFirstName'].'<br>';
  }

  
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;

?>