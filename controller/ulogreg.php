<?php


define('DIR','../');
require_once DIR . 'config.php';
$control = new Controller();
$admin = new Admin();

if(isset($_POST['register'])){

    
    $a = $_POST['a'];
    $b = $_POST['b'];
  
    $email = $_POST['c'] ;
    $password = $_POST['d'] ;
   



    $stmt = $admin -> cud("INSERT INTO `user` ( `name`, `phone`, `email`, `password`) VALUES ('".$a."','".$b."','".$email."','".$password."')","saved");
    $admin -> redirect('../user/ulogreg');

    
}









//login
 if(isset($_POST['login']))
{

  
  $a=$_POST['a'];
  $b=$_POST['b'];
   

   $stmt=$admin->ret("SELECT * from `admin` WHERE `email`='$a' AND `password`='$b'");
   $row = $stmt->fetch(PDO::FETCH_ASSOC);
   $num = $stmt->rowCount();
        if($num>0 ){
            $id=$row['a_id'];
            $_SESSION['a_id']=$id;
             $admin->redirect('../admin/index');
      }else{


   $stmtc=$admin->ret("SELECT * from `user` WHERE `email`='$a' AND `password`='$b'");
   $rowc = $stmtc->fetch(PDO::FETCH_ASSOC);
   $numc = $stmtc->rowCount();
        if($numc>0){
            $idd=$rowc['u_id'];
            $_SESSION['u_id']=$idd;
             $admin->redirect('../user/index');
      }else{


  

       echo"<script>
            alert('You have entered wrong E-mail or password please try again');
            window.location.href='../user/profile.php';
          </script>";

    }
}
}


?>