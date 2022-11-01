  

 
 <?php
define('DIR', '../');
require_once DIR .'config.php';

$control = new Controller(); 
$admin = new Admin();


//create
if(isset($_POST['add']))
{

  
  

  $a=$_POST['a'];

  $targetDir = "photo/upload";
  $image=$targetDir.basename($_FILES["image"]["name"]); // @image = "upload/c.jpg"
  move_uploaded_file($_FILES['image']["tmp_name"], $image);



 $stmt=$admin -> cud("INSERT INTO `gallery` (`cname`,`image`) VALUES ('$a','$image')","saved");

  $admin -> redirect('../admin/viewgal');
 }



//delete
if(isset($_GET['id']))
{
  
  $id=$_GET['id'];
  $stmt=$admin -> cud("DELETE FROM `gallery` WHERE `gid`='$id'","deleted");
  $admin -> redirect('../admin/viewgal');
}

// //update


if(isset($_POST['update']))
{

  
  $a=$_POST['a'];

  $id=$_POST['id'];




  $targetDir = "photo/upload";
  $image=$targetDir.basename($_FILES["image"]["name"]); // @image = "upload/c.jpg"
  move_uploaded_file($_FILES['image']["tmp_name"], $image);


 $stmt=$admin -> cud("UPDATE `gallery` SET `cname`='$a',`image`='$image' WHERE `gid`='$id'","updated");

 $admin -> redirect('../admin/viewgal');
 } 




?>

