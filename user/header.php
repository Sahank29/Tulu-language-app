
<?php
define('DIR', '../');
require_once DIR . 'config.php';

$control = new Controller(); 
$admin = new Admin();



?>	








	<!-- Header section  -->
	<header class="header-section">
		<a href="index.php" class="site-logo"><img src="img/logo.png" alt="logo"></a>
		<div class="header-controls">
			<button class="nav-switch-btn"><i class="fa fa-bars"></i></button>
			<!-- <button class="search-btn"><i class="fa fa-search"></i></button> -->
		</div>
		<ul class="main-menu">
			<li><a href="index.php">Home</a></li>
				<?php
						if(!isset($_SESSION['u_id'])){
							?>
				<li><a href="ulogreg.php">Sign In | Sign Up</a></li>
						<?php }  ?>

				<?php
						if(isset($_SESSION['u_id'])){
							?>
			<li><a href="profile.php">Manage Profile</a></li>
				<?php }  ?>
			
			<li>
				<a href="#">Tulu Lipi</a>
				<ul class="sub-menu">







                 <?php


    $stmt=$admin -> ret("SELECT * FROM `category`");

    //LIMIT 4
    while($row=$stmt->fetch(PDO::FETCH_ASSOC))
    // foreach ($stmt as $row)
    {
    ?>

					<li><a href="portfolio.php?cname=<?php echo $row['cname']; ?>"><?php echo $row['cname']; ?></a></li>
					

					<?php } ?>





				</ul>
			</li>
			<li><a href="blog.php">Articles</a></li>
			<li><a href="trans/index.html">Translator</a></li>
			<li><a href="tut.php">Tutorials </a></li>
			<li><a href="contact.php">Contact&nbsp;&nbsp;|&nbsp;&nbsp;Feedback</a></li>
			<?php
						if(isset($_SESSION['u_id'])){
							?>
					<li><a href="ulogout.php">Logout</a></li>
					<?php }  ?>
			






		</ul>
	</header>
	<div class="clearfix"></div>
	<!-- Header section end  -->