<?php
$server_name ="localhost";
$user_name ='root';
$user_pass = '';
$database_name ='amplify';

$con = mysqli_connect($server_name, $user_name, $user_pass, $database_name);

if (!$con) {
    die('connection failed'.mysql_error());
} 
// else {
//     echo('<script>alert("database Succesfully Connected");</script>');
// }

?>