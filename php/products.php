<?php
$response = array();
include('connect.php');


$sql = "SELECT * FROM product";

$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    array_push($response, $row);
}

$productlist = array();

$productlist['success'] = true;
$productlist['results'] = $response;

$productlist['totalCount'] = count( $productlist['results'] );

echo json_encode($productlist);

?>