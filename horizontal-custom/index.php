<?php $view = 'home';
if($_GET){ $view = $_GET['view'];} ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />
<style>
*{
margin:0;
padding:0;
}

.hide{
	opacity:0;
}
  
.wrapper{
	overflow:hidden;
}
 .slideul{
	float:left;
	position:relative;		
 }
 .slideul li{
	list-style:none !important;
	float:left;	
	visibility:visible;	
 }
 .pagination{
	float:left;
	list-style:none;
 }
  .pagination li{
	float:left;
	padding:0 10px;		
  }  
  .girl_img,.girl_img1{
	width:490px;
	height:950px;
	float:left;
	text-align: center;
	
  }
  .girl_img .preloader{
	margin-top:50%;
  }
  .girl_desc{
	float:left;
	width:200px;
	display:none;
  }
</style>
</head>
<body>

<div>
	<div>
			<ul id="slideul" class="sliders slideul">
				<li class="sactive" id="home" data-val="1" >
					<div class="girl_img">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li class="sactive" id="div1" data-val="2" >
					 <div class="girl_img" >
						 <img src="images/g1.png" alt="1" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li  id="div2" style="opacity:0.3" data-val="3" >
					 <div class="girl_img" >
						 <img src="images/g2.png" alt="1" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				
				<li id="div3" data-val="4" >
					<div class="girl_img">
						 <img src="images/g3.png" alt="2" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				
				<li id="div4" data-val="5" >
					<div class="girl_img">
						<img src="images/g4.png" alt="3" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li id="div5" data-val="6" >
					<div class="girl_img">
						<img src="images/g5.png" alt="4" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li id="div6" data-val="7" >
					<div class="girl_img">
						<img src="images/g6.png" alt="5" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>						
				<li id="div7" data-val="8" >
					<div class="girl_img">
						<img src="images/g7.png" alt="6" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li id="div8" data-val="9" >
					<div class="girl_img">
						<img src="images/g8.png" alt="7" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li id="div9" data-val="10" >
					<div class="girl_img">
						<img src="images/g9.png" alt="8" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>
				<li id="div10" data-val="11" >
					<div class="girl_img">
						<img src="images/g10.png" alt="9" />
					 </div>
					 <div class="girl_desc">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
						sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
						Aldus PageMaker including versions of Lorem Ipsum.
					 </div>
				</li>				
				<li id="div11" data-val="12" >
					<div class="girl_img">
						
					 </div>
				</li>
			</ul>
	</div>	
</div>

<div style="clear:both;"></div>
	<ul class="pagination">
		<li ><a class="slide1-prev"  id="slide1-prev" >previous</a></li>
		<li ><a class="slide1-next" id="slide1-next" >next</a></li>
	</ul>
<div style="clear:both;"></div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" ></script>
<script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js" ></script>
<script type="text/javascript" src="js/horizontal-slider.js" ></script>

<!-- preloader script starts-->
<script type="text/javascript" src="js/jquery.preloader.js"></script> 
<style>.preloader { background:url(images/preloader1.gif) center center no-repeat #ffffff;  }</style>
<!-- preloader script ends-->

<script type="text/javascript"  >
var view = '<?php echo $view;?>';
var liCount = $('.slideul li').length;

$(document).ready(function(){ //alert(1);	
	$(".slideul").preloader();		
	$(".slideul").customslide
	({
			next: 'slide1-next',
			prev: 'slide1-prev',			
			animationSpeed: 500,
			broHeight : 950,
			broWidth : 490,
			defaultli : 1,
			displayview: view,
			displayno : 3,
			lastcount:liCount,
			siteurl : 'http://localhost/p/slider/horizontal-custom/'
	});
});
 </script>
</body>
</html>