<?php
include_once('dbconfig.php');

$sql=$db->query("SELECT * from users");


$records=[];

while($data=$sql->fetch_assoc()){
    $records[]=$data;
};

echo json_encode($records);



?>