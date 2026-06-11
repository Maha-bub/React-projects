<?php
include_once("dbconfig.php");

$data=json_decode(file_get_contents('php://input'),true);

// user data store to variables
$name=$data['firstname'];
$gender=$data['gender'];
$district=$data['district'];
$address=$data['address'];

$db->query("INSERT INTO users (id, name,address,gender, district) VALUES(NULL,'$name','$address','$gender','$district')");

if($db->affected_rows>0){
    echo json_encode(["message"=>"User created successfully"]);
}else{
    echo json_encode(["message"=>"Something wrong!!!"]);
}



?>