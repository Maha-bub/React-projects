<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access, Content-Type, Authorization, X-Requested-With,Access-Control-Allow-Headers");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// database connection

$db=new mysqli("localhost","root","","user_info");

?>