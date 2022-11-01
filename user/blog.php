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




<?php


if(!isset($_SESSION["u_id"])) {
       header("location:ulogreg.php");
}




?>	




	<!-- Blog section  -->
	<section class="blog-section">
		<div class="blog-warp">
			
				<!-- <div class="col-lg-4 col-sm-6"> -->






              <?php


    $stmt=$admin -> ret("SELECT * FROM `blog` ORDER BY `b_id` DESC");

    //LIMIT 4
    while($row=$stmt->fetch(PDO::FETCH_ASSOC))
    // foreach ($stmt as $row)
    {
    ?>





					<div class="blog-post">
						<img src="../controller/<?php echo $row['image'];?>" alt="" width="550" height="450"><br>
						<div class="blog-date"><?php echo $row['udate'];?></div><br>
						<h5><?php echo $row['b_title'];?></h5><br>
						<div class="blog-cata">
							<span>Tulu</span>
							<span>Lipi</span>
							<span>Articles</span>
						</div>
						<p><?php echo $row['b_des'];?></p>
						___________________________________
						
					</div>
				</div>

			<?php } ?>







			


			

		


			

				



			</div>
			
		</div>
	</section>
	<!-- Blog section end  -->
	
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
