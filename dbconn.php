<?php
$conn= new mysqli('localhost', 'root', '', 'aaheli');

if($conn->connect_error) {
    die('Connection Error (' . $conn->connect_errno . ')'
    . $conn->connect_error);
}
?>
