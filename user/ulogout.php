<?php

define('DIR','../');
require_once DIR . 'config.php';
$control = new Controller();
$admin = new Admin();

    if(isset($_SESSION['u_id'])){
        session_destroy();
        unset($_SESSION['u_id']);
         $admin -> redirect('../user/index');
    }  

?>
