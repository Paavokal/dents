<?php

//yhteys = $conn
include('connect.php');

//POSTin parametreissa tulee käyttäjänimi ja salasana
$username=$_POST['username'];
$password=$_POST['password'];

//Luodaan SQL-kysely, jossa tarkistetaan käyttäjänimi ja salasana
$sql = "SELECT * FROM user WHERE username='".$username."' AND password='".$password."'";
$result = $conn->query($sql);

$response = array();

//Jos kyselystä saadaan yli 0 riviä, kirjautuminen onnistui
if($result->num_rows>0) {
    $response = array('success'=> true, 'data'=> 'kirjautuminen onnistui');
}
else {
    $response = array('success'=> false, 'data'=> 'kirjautuminen ei onnistunut');
}
// response taulukko koodataan json-muotoon
echo json_encode($response);

?>