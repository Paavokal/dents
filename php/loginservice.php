<?php
$response = array();
include('connect.php');

$username=$_POST['username'];
$password=$_POST['password'];

$sql = "SELECT * FROM user WHERE username='".$username."' AND password='".$password."'";
$result = $conn->query($sql);


if($result->num_rows>0) {
    $response = array('success'=> true, 'data'=> 'kirjautuminen onnistui');
}
else {
    $response = array('success'=> false, 'data'=> 'kirjautuminen ei onnistunut');
}
echo json_encode($response);

?>