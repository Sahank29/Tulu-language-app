

 
 <?php
define('DIR', '../');
require_once DIR .'config.php';

$control = new Controller(); 
$admin = new Admin();


//create
if(isset($_POST['add']))
{

  
  

  $a=$_POST['a'];


 $stmt=$admin -> cud("INSERT INTO `category` (`cname`) VALUES ('$a')","saved");

  $admin -> redirect('../admin/viewcat');
 }



//delete
if(isset($_GET['id']))
{
  
  $id=$_GET['id'];
  $stmt=$admin -> cud("DELETE FROM `category` WHERE `cid`='$id'","deleted");
  $admin -> redirect('../admin/viewcat');
}

// //update


if(isset($_POST['update']))
{

  
  $a=$_POST['a'];

  $id=$_POST['id'];



 $stmt=$admin -> cud("UPDATE `category` SET `cname`='$a' WHERE `cid`='$id'","updated");

 $admin -> redirect('../admin/viewcat');
 } 




?>