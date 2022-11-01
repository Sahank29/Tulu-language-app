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
  $image=$_POST['image'];

  $udate=date("y-m-d");

 $targetDir = "photo/b_image";
  $image=$targetDir.basename($_FILES["image"]["name"]); // @image = "b_image/c.jpg"
  move_uploaded_file($_FILES['image']["tmp_name"], $image);


 $stmt=$admin -> cud("INSERT INTO `blog` (`b_title`,`b_des`,`image`,`udate`) VALUES ('$a','$b','$image','$udate')","saved");

  $admin -> redirect('../admin/viewblog');
 }

 //delete
if(isset($_GET['id']))
{
  
  $id=$_GET['id'];
  $stmt=$admin -> cud("DELETE FROM `blog` WHERE `b_id`='$id'","deleted");
  $admin -> redirect('../admin/viewblog');
}

// //update


if(isset($_POST['update']))
{

  
  $a=$_POST['a'];
  $b=$_POST['b'];
  $image=$_POST['image'];
  
  $id=$_POST['id'];


$targetDir = "photo/b_image";
  $image=$targetDir.basename($_FILES["image"]["name"]); // @image = "b_image/c.jpg"
  move_uploaded_file($_FILES['image']["tmp_name"], $image);

 $stmt=$admin -> cud("UPDATE `blog` SET `b_title`='$a',`b_des`='$b',`image`='$image' WHERE `b_id`='$id'","updated");

 $admin -> redirect('../admin/viewblog');
 } 

?>