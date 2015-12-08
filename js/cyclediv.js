//non conflicting jquery with other javascript's
(function($){
     
	$.fn.customslide = function(options){ 
		var defaults = {
			//id: 'slideul',
			next: 'slide-next',
			prev: 'slide-prev',
			current: 1,
			firstcount: 1	
		};
		
		var o = $.extend(defaults,options);
		var mainslider = $(this).selector;//'#'+o.id;
		var sliderprev = '#'+o.prev;
		var slidernext = '#'+o.next;
		var currentSlide = o.current;
		var firstli = o.firstcount;
		var liCount = $(mainslider+' li').length;		
		//$(mainslider+' li').removeClass('sactive');
		
		//main parameters
		var thisName = $(this).attr('id');
		var broHeight = $(window).height();
		var broWidth= 300;

		var clicked = false;
		var ul_width = 0;
		var current = 1;
		$(this).find('li').each(function () {
				 ul_width = ul_width + broWidth;
		});
		$(this).find('li').css("width",broWidth);
		$(this).css('width', ul_width + "px");
		
		
		//Prev button click event
		$(sliderprev).click(function(){
				if(currentSlide===firstli){
					//currentSlide = (liCount);
					//console.log('now');					
					//$("ul", obj).prepend('<li></li>');		
				}else{
					currentSlide--;						
					$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');	
					lf = $(mainslider).offset().left + broWidth;
					$(mainslider).animate({ left: lf }, 500, function () {
						//clicked = false;
					});		
				}
					//console.log(1);			
				
									
		});	
		
		//Next button click event
		$(slidernext).click(function(){				
				if(currentSlide<liCount){
					currentSlide++;	//$(this).css('opacity','1');
					$(mainslider+' li').removeClass('sactive');				
					$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');					
					lf = $(mainslider).offset().left - broWidth; 
					$(mainslider).animate({ left: lf }, 1000, function () {
						//clicked = false;
					});
					
				}else if(currentSlide==liCount)
				{
					ul_width = ul_width + broWidth;
					$(mainslider).css('width',ul_width);
				}				
				else{
					currentSlide = firstli;						
					//$(mainslider+" li:first-child").remove();
					//$(mainslider).css('left','0px');
					ul_width = ul_width + broWidth;
					$(mainslider).css('width',ul_width);
					$(mainslider).animate({ left: lf }, 1000, function () {
						//clicked = false;
					});
						
				}
				
		});	
	}
})(jQuery);