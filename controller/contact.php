 <?php
define('DIR', '../');
require_once DIR .'config.php';

$control = new Controller(); 
$admin = new Admin();


//create
if(isset($_POST['add']))
{

  
  

  $a=$_POST['r'];
  $b=$_POST['t'];
  $c=$_POST['y'];




 $stmt=$admin -> cud("INSERT INTO `feedback` (`name`,`e_mail`,`comment`) VALUES ('$a','$b','$c')","saved");

  $admin -> redirect('../user/index');
 }

//delete
if(isset($_GET['id']))
{
  
  $id=$_GET['id'];
  $stmt=$admin -> cud("DELETE FROM `feedback` WHERE `f_id`='$id'","deleted");
  $admin -> redirect('../admin/viewfeedback');
}

 ?>