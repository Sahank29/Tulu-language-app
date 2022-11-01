

<?php
define('DIR', '../');
require_once DIR .'config.php';

$control = new Controller(); 
$admin = new Admin();


if(isset($_POST['add']))
{

  
  $a=$_POST['a'];
  $b=$_POST['b'];
  $c=$_POST['c'];
  $d=$_POST['d'];



  
  $e=$_POST['e'];



 $stmt=$admin -> cud("UPDATE `user` SET `name`='$a',`phone`='$b',`email`='$c',`password`='$d' WHERE `u_id`='$e'","updated");

 $admin -> redirect('../user/index');
 } 





 ?>