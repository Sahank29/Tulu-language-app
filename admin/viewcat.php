<?php
define('DIR', '../');
require_once DIR . 'config.php';

$control = new Controller(); 
$admin = new Admin();


if(!isset($_SESSION["a_id"])) {
       header("location:../user/ulogreg.php");
}



?>

<!doctype html>
<html lang="en">

<head>
	<title>Dashboard | Tulu language App | Admin</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<!-- VENDOR CSS -->
	<link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="assets/vendor/linearicons/style.css">
	<link rel="stylesheet" href="assets/vendor/chartist/css/chartist-custom.css">
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="assets/css/main.css">
	<!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
	<link rel="stylesheet" href="assets/css/demo.css">
	<!-- GOOGLE FONTS -->
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<!-- ICONS -->
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
</head>

<body>
	<!-- WRAPPER -->
	<div id="wrapper">
		

		<?php include "header.php"; ?> 

		<?php include "sidebar.php"; ?> 
		
		<!-- MAIN -->
		<div class="main">
			<!-- MAIN CONTENT -->
			<div class="main-content">
				<div class="container-fluid">
					<!-- OVERVIEW -->
					<div class="panel panel-headline">
						
						<div class="panel">
								<div class="panel-heading">
									<h3 class="panel-title">View Category</h3>
								</div>
								<div class="panel-body">
									<table class="table table-hover table-dark">
 <tbody>
    <tr>
        <th><h4>Category ID</h4></th>
       <th><h4>Category</h4></th>
       
       <th><h4>&ensp;Edit</h4></th>
       <th><h4>&ensp;Delete</h4></th>
 </tr>
    <?php


    $stmt=$admin -> ret("SELECT * FROM `category`");

    //LIMIT 4
    while($row=$stmt->fetch(PDO::FETCH_ASSOC))
    // foreach ($stmt as $row)
    {
    ?>
    <tr>
       <td><?= $row['cid']; ?></td>
       <td><?= $row['cname']; ?></td>
     

      <td>




            <a href="updatecat.php?id=<?= $row['cid']; ?>" class="btn btn-primary" onclick="return confirm('Are you sure want to Edit?')"><b><i>Edit</i></b></a> </td>

            
        <td><a href="../controller/category.php?id=<?= $row['cid']; ?>" class="btn btn-danger" onclick="return confirm('Are you sure want to Delete?')"><b><i>Delete</i></b></a></td>


      </tr>
      <?php } ?>  

</tbody>
</table> 
									
									<br>
									
									<br>
									
								</div>
							</div>

					
		
		<?php include"footer.php"; ?>

	<!-- Javascript -->
	<script src="assets/vendor/jquery/jquery.min.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js"></script>
	<script src="assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
	<script src="assets/vendor/chartist/js/chartist.min.js"></script>
	<script src="assets/scripts/klorofil-common.js"></script>
</body>

</html>
