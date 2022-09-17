<?php

//Yhteyden asetukset
$servername = "localhost";
$username = "user2";
$password = "salasana";
$dbname = "dents";

// Luodaan yhteys
$conn = new mysqli($servername, $username, $password, $dbname);

// Tarkastetaan yhteys
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>