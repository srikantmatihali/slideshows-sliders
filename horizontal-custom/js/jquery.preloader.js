// JavaScript Document
//from : http://net.tutsplus.com/tutorials/javascript-ajax/how-to-create-an-awesome-image-preloader/
var siteurl = 'http://lee.in/beta1/';
$.fn.preloader = function(options){
	
	//default values.
	var defaults = {
		             delay:200,
					 preload_parent:"a",
					 check_timer:300,
					 ondone:function(){ },
					 oneachload:function(image){  },
					 fadein:500 };	
	// variables declaration and precaching images and parent container
	 var options = $.extend(defaults, options),
	 root = $(this) , images = root.find("img").css({"visibility":"hidden",opacity:0}) ,  timer ,  counter = 0, i=0 , checkFlag = [] , delaySum = options.delay ,
	 
	 init = function(){
		
		timer = setInterval(function(){
			
			//to avoid checking for loaded images even after all images are loaded and avoid double looping.
			if(counter>=checkFlag.length)
			{
			clearInterval(timer);
			options.ondone();
			return;
			}
		
			for(i=0;i<images.length;i++)
			{
				if(images[i].complete==true)
				{
					if(checkFlag[i]==false)
					{
						checkFlag[i] = true;
						options.oneachload(images[i]);
						counter++;
						
						delaySum = delaySum + options.delay;
					}
					
					$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,
					function(){ $(this).parent().removeClass("preloader");   });
					
					
					
				 
				}
			}
		
			},options.check_timer) 
		 
		 
		 } ;
	
	//by default add class called "preloader" to all images.
	images.each(function(){
		
		if($(this).parent(options.preload_parent).length==0)
		$(this).wrap("<a class='preloader' />");
		else
		$(this).parent().addClass("preloader");
		
		checkFlag[i++] = false;
		
		
		}); 
	images = $.makeArray(images); 
	
	//crate icon and preload the gif images while loading body
	var icon = jQuery("<img />",{		
		id : 'loadingicon' ,
		src : siteurl+'css/i/89.gif'		
		}).hide().appendTo("body");	
	
	
	timer = setInterval(function(){		
		if(icon[0].complete==true)
		{
			//clear interval once gif images are loaded.
			clearInterval(timer);
			init();
			//remove the images after all images are loaded.
		    icon.remove();
			return;
		}		
		},100);	
}//end of plugin
	
	