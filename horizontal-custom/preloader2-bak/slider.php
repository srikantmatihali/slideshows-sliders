<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />
<style>
body{
	margin: 0 auto;
}
#wrapper{
	overflow:hidden;
}
 #slideul{
	float:left;
	position:relative;	
 }
 #slideul li{
	list-style:none !important;
	float:left;		
 }
 #pagination{
	float:left;
	list-style:none;
 }
  #pagination li{
	float:left;
	padding:0 10px;	
  }
  
</style>
</head>
<body>
<div id="wrapper">
	<ul id="slideul">
		<li id="li1"  >
		 <div>
			 <!--<img src="images/1.jpg"  alt = "image1" />-->
			 test
		 </div>
		</li>
		<li id="li2" >
		<div>
			 <img src="images/2.jpg"  alt = "image2" />
		 </div>
		</li>
		<li id="li3" >
		<div>
			 <img src="images/durand.jpg"  alt = "image3" />
		 </div>
		</li>
		<li id="li4" >
		<div>
			 <img src="images/fed.jpg"  alt = "image4" />
		 </div>
		</li>
		<li id="li5" >
		<div>
			 <img src="images/fed.jpg"  alt = "image5" />
		 </div>
		</li>
		<li id="li6" >
		<div>
			 <img src="images/fed.jpg" alt = "image6" />
		 </div>
		</li>		
	</ul>
	
	<p style="clear:both;"></p>
	<ul id="pagination" >
		<li id="previous" style="display:block;"><a>previous</a></li>
		<li id="next" style="display:block;"><a>next</a></li>
	</ul>
	<p style="clear:both;"></p>
	<div id="slider" style="width:300px;"></div>
	
</div>
<script src="http://code.jquery.com/jquery-1.8.2.js"></script>
<script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
<script type="text/javascript">
 //browser data.
 var broHeight = $(window).height();
 var broWidth= $(window).width();

 var clicked = false;
 var  screenAnimationTime = 1000;
 var ul_width = 0;
 var current = 0;
 var clicked = false;
 var bannerlength = parseInt($("#slideul li").length);

 var lasScroll = true;
 var lasScrollValue = 1;
 var icurrent = 0;
$( "#slider" ).slider({
	min: 0,
	max : (bannerlength-1),
	value: current,	
    change: function( event, ui ) { 
		current = ui.value;		
		wid = $("#slideul li:nth-child(" + current + ")").width();
		if(current > lasScrollValue){
			console.log('+');
			
		}else if(current < lasScrollValue){
			console.log('-');
			
		}
		lf = '-' + broWidth * current;	
		$("#slideul").animate({ left: lf},screenAnimationTime,function () { clicked = false;});
		lasScrollValue = current;
		icurrent = current;
	}
});

setInterval(function () { 
	if((icurrent%bannerlength)==0){ icurrent = 0; }		
	$("#slider").slider( "option", "value", icurrent );		
	icurrent++;
}, 3000);

 
 $("#slideul li").each(function () {
         ul_width = ul_width + broWidth;
  });
 $("#wrapper,#slideul,#slideul li").css("width",broWidth);
 $("#slideul").css('width', ul_width + "px");
 $("#next").live("click", function(e){
	if(!clicked){
		clicked = true;
		e.preventDefault();
		if(current < (bannerlength-1) )
		{	current = current + 1;	
			lf = '-' + broWidth * current;							
			$("#slideul").animate({ left: lf},screenAnimationTime,function () { clicked = false;});
		}else{
			current = 0;
			lf = '-' + broWidth * current;	
			$("#slideul").animate({ left: lf},screenAnimationTime,function () { clicked = false;});
		}
		icurrent = current;
		$("#slider").slider( "option", "value", icurrent );			
	} checkButton();
	return false;
 }); 
 
 $("#previous").live("click", function(e){
	if(!clicked){
		clicked = true;
		e.preventDefault();
		if(current > 0)
		{	current	= current -1
			lf = '-' + broWidth * current;					
			$("#slideul").animate({ left: lf},screenAnimationTime,function () { clicked = false;});
		}else{	console.log(current);
			current = bannerlength -1;
			lf = '-' + broWidth * (current);								
			$("#slideul").animate({ left: lf},screenAnimationTime,function () { clicked = false;});
		}	
		icurrent = current;	
		$("#slider").slider( "option", "value", icurrent );	
	} checkButton();
	return false;
 });
 
 
 function checkButton() {
                $("#previous").css('display', 'block');
                $("#next").css('display', 'block');
                if (current == 0) {
                    //$("#previous").css('display', 'none');
                }else{
					//$("#previous").css('display', 'block');
				}
                if (current == bannerlength) {
                   // $("#next").css('display', 'none');
                }else{
					//$("#next").css('display', 'block');
				}
}

</script>
</body>
</html>