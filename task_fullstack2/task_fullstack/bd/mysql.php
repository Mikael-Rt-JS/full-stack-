<?php
include './admin.php';

$sql=new mysqli($servername,$username,$password,$database);
$sql->set_charset("utf8");
if($sql->connect_error){
  die(" Problems: ".$sql->connect_error);
}

?>