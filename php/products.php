<?php

include('connect.php');

$sql = "SELECT * FROM product";

$result = $conn->query($sql);

$productlist = array();

//kyselyn jokainen rivi haetaan taulukkona ja lisätään productlist taulukkoon
while($row = $result->fetch_assoc()) {
    array_push($productlist, $row);
}

$response = array();

$response['success'] = true;
$response['results'] = $productlist;
$response['totalCount'] = count( $response['results'] );

echo json_encode($response);

?>