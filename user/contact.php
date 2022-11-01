<!DOCTYPE html>
<html lang="zxx">
<head>
	<title>Tulu Language App</title>
	<meta charset="UTF-8">
	<meta name="description" content="Photographer html template">
	<meta name="keywords" content="photographer, html">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- Favicon -->
	<link href="img/favicon.ico" rel="shortcut icon"/>

	<!-- Google font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">

	<!-- Stylesheets -->
	<link rel="stylesheet" href="css/bootstrap.min.css"/>
	<link rel="stylesheet" href="css/font-awesome.min.css"/>
	<link rel="stylesheet" href="css/magnific-popup.css"/>
	<link rel="stylesheet" href="css/slicknav.min.css"/>
	<link rel="stylesheet" href="css/owl.carousel.min.css"/>

	<!-- Main Stylesheets -->
	<link rel="stylesheet" href="css/style.css"/>


	

</head>
<body>
	<!-- Page Preloder -->
	<div id="preloder">
		<div class="loader"></div>
	</div>

	<?php include "header.php";  ?>

	

	<!-- Contact section  -->
	<section class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<div class="contact-text">
						<h3>Get in touch</h3>
						<p>Users can give feedback about the website, any mistakes in the wording, any suggestions, even adding of new features. admin will reply through mail so please input valid mail only</p>
						<ul>
							<!-- <li>Main Str, no 23, NY, <br>New York PK 23589</li> -->
							<li>+91 8762822310</li>
							<li>Sahank29@gmail.com</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-8">
					<form class="contact-form" action="../controller/contact.php" method="post">
						<div class="row">
							<div class="col-lg-6">
								<input type="text" placeholder="Your Name" name="r">
							</div>
							<div class="col-lg-6">
								<input type="text" placeholder="Your Email" name="t">
							</div>
							<div class="col-lg-4">
							</div>
							<div class="col-lg-12">
								<!-- <input type="text" placeholder="Subject"> -->
								<textarea class="text-msg" placeholder="Message" name="y"></textarea>
								<button class="site-btn" type="submit" name="add">SEND FEEDBACK</button>
								
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<!-- Contact section end  -->

	
	
	<?php include "footer.php";  ?>

	<!-- Search model -->
	<div class="search-model">
		<div class="h-100 d-flex align-items-center justify-content-center">
			<div class="search-close-switch">+</div>
			<form class="search-model-form">
				<input type="text" id="search-input" placeholder="Search here.....">
			</form>
		</div>
	</div>
	<!-- Search model end -->

	<!--====== Javascripts & Jquery ======-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.slicknav.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/circle-progress.min.js"></script>
	<script src="js/mixitup.min.js"></script>
	<script src="js/instafeed.min.js"></script>
	<script src="js/masonry.pkgd.min.js"></script>
	<script src="js/main.js"></script>

	</body>
</html>
