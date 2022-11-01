 <?php
define('DIR', '../');
require_once DIR .'config.php';

$control = new Controller(); 
$admin = new Admin();


//create
if(isset($_POST['add']))
{

  
  

  $a=$_POST['a'];
  $b=$_POST['b'];
  $c=$_POST['c'];

  $udate=date("d-m-y");
    $id=$_POST['id'];




 $stmt=$admin -> cud("INSERT INTO `tutorial` (`title`,`description`,`link`,`udate`) VALUES ('$a','$b','$c','$udate')","saved");

  $admin -> redirect('../admin/viewtut');
 }


//update


if(isset($_POST['update']))
{

  
  $a=$_POST['a'];
  $b=$_POST['b'];
  $c=$_POST['c'];
   $id=$_POST['id'];
   

 $stmt=$admin -> cud("UPDATE `tutorial` SET `title`='$a',`description`='$b',`link`='$c' WHERE `t_id`='$id'","updated");

 $admin -> redirect('../admin/viewtut');
 } 

 //delete
if(isset($_GET['id']))
{
  
  $id=$_GET['id'];
  $stmt=$admin -> cud("DELETE FROM `tutorial` WHERE `t_id`='$id'","deleted");
  $admin -> redirect('../admin/viewtut');
}

 ?>