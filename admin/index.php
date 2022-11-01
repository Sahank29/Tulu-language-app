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
						
						<div class="panel-body">
							<div class="row">
								<br><br>
								<div class="col-md-3">
									<div class="metric">
										<span class="icon"><i class="fa fa-download"></i></span>
										<p>
											<span class="number"><?php
                  $stmt = $admin -> ret("SELECT COUNT(*) FROM `category`");
                  $row = $stmt -> fetch(PDO::FETCH_ASSOC);
                  echo implode($row);
                  ?></span>
											<span class="title">Category</span>
										</p>
									</div>
								</div>

								<div class="col-md-3">
									<div class="metric">
										<span class="icon"><i class="fa fa-shopping-bag"></i></span>
										<p>
											<span class="number"><?php
                  $stmt = $admin -> ret("SELECT COUNT(*) FROM `gallery`");
                  $row = $stmt -> fetch(PDO::FETCH_ASSOC);
                  echo implode($row);
                  ?></span>
											<span class="title">Gallery</span>
										</p>
									</div>
								</div>
								<div class="col-md-3">
									<div class="metric">
										<span class="icon"><i class="fa fa-eye"></i></span>
										<p>
											<span class="number"><?php
                  $stmt = $admin -> ret("SELECT COUNT(*) FROM `user`");
                  $row = $stmt -> fetch(PDO::FETCH_ASSOC);
                  echo implode($row);
                  ?></span>
											<span class="title">Users</span>
										</p>
									</div>
								</div>
								<div class="col-md-3">
									<div class="metric">
										<span class="icon"><i class="fa fa-bar-chart"></i></span>
										<p>
											<span class="number"><?php
                  $stmt = $admin -> ret("SELECT COUNT(*) FROM `Feedback`");
                  $row = $stmt -> fetch(PDO::FETCH_ASSOC);
                  echo implode($row);
                  ?></span>
											<span class="title">Feedback</span>
										</p>
									</div>
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
