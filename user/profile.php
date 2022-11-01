




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





<style type="text/css">
	







.panel{
  display: flex;
  width: 45rem;
  max-height: auto;
  background: white;
  text-align: center;
  margin: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
} 

#inside-panel{
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0rem;
  background: linear-gradient(45deg, #050505, #404040);
  padding: .5rem;
  border: none;
  margin: .5rem;
}

.gradient-border{
  width: 100%;
  height: 100%;
  margin: 0;
  background: white;
}

h1{
  margin: 0;
  width: 100%;
  height: auto;
  line-height: 2em;
  font-family: 'Great Vibes', cursive;
  padding-top: 1rem;
}

hr{
  margin: auto;
  height: auto;
  width: 60%;
}

h2{
  margin: 0;
  width: 100%;
  height: auto;
  margin-top: 2rem;
  padding-bottom: 2rem;
}

ul{
  list-style: none;
  margin: 0rem;
  height: auto;
  padding: 0rem;
  padding-bottom: 2rem;
  text-align: left;
  padding-left: 13rem;
  margin-right: 1rem;
  letter-spacing: 1px;
  line-height: 2.5rem;
  margin-top: 1rem;
}

#title{
  padding-left: 4.5rem;
}

#age{
  padding-left: 5rem;
}

#hometown{
  padding-left: 1.5rem;
}

#website{
  padding-left: 3rem;
}

.aimg{
  margin: 0;
  margin-top: 2rem;
  height: 250px;
  box-shadow: 12px 12px 5px 1px #726E60;
}

@media (max-width: 780px){
  .panel{
    width: 65%;
  }
  
  ul{
    flex-shrink: 1;
    padding-left: 6rem;
    font-size: .85rem;
  }
}












</style>
</head>
<body>
	<!-- Page Preloder -->
	<div id="preloder">
		<div class="loader"></div>
	</div>

<?php
define('DIR', '../');
require_once DIR . 'config.php';

$control = new Controller(); 
$admin = new Admin();



?>  








  <!-- Header section  -->
  <header class="header-section">
    <a href="index.php" class="site-logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/logo.png" alt="logo"></a><br>
    <div class="header-controls">
      <button class="nav-switch-btn"><i class="fa fa-bars"></i></button>
      <!-- <button class="search-btn"><i class="fa fa-search"></i></button> -->
    </div>
    <ul class="main-menu">
      <li><a href="index.php">Home</a></li>

                 <li>
        
      </li>


      <li><a href="profile.php">&nbsp;&nbsp;&nbsp;&nbsp;Manage Profile</a></li>
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
      <li><a href="contact.php">Contact|Feedback</a></li>

          <li><a href="ulogout.php">Logout</a></li>
      






    </ul>
  </header>
  <div class="clearfix"></div>
  <!-- Header section end  -->


<?php


if(!isset($_SESSION["u_id"])) {
       header("location:ulogreg.php");
}


$u_id=$_SESSION['u_id'];


    $stmt=$admin -> ret("SELECT * FROM `user` WHERE `u_id`='$u_id'");

    $row=$stmt->fetch(PDO::FETCH_ASSOC);

?>	







<div class="gradient">
  <div id="panel" class="">
    <div id="inside-panel">
      <div class="gradient-border">
    <h1>Your Profile</h1>
        <hr>
        <img class="aimg" src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg">
        <ul>

         <form action="../controller/profile.php" method="post">
          <br>
          <li><b>User:</b><span id="age">&nbsp;&nbsp;<input type="text" name="a" value="<?php echo $row['name']; ?>"></span></li>
          <br>
          <li><b>Phone:</b><span id="title"><input type="text" name="b" value="<?php echo $row['phone']; ?>"></span></li>
          <br>
          <li><b>Email:</b><span id="hometown">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="c" value="<?php echo $row['email']; ?>"></span></li>
          <br>
          <li><b>Password:</b><span id="hometown">&nbsp;&nbsp;&nbsp;<input type="text" name="d" value="<?php echo $row['password']; ?>"></span></li>
       
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="hidden" name="e" value="<?php echo $row['u_id']; ?>" ><br>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="submit" name="add" value="UPDATE PROFILE"  class="btn btn-success">


     
           </form>

         
        </ul>
        </div>
    </div>
  </div>
</div>


























<script type="text/javascript">
	
let panel = document.querySelector("#panel");

panel.classList.add("panel");

</script>


	<!-- Portfolio section end  -->
	<br>
	
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
