//non conflicting jquery with other javascript's
(function($){
     
	$.fn.customslide = function(options){ //console.log($(this).selector);	
		var defaults = {
			//id: 'slideul',
			next: 'slide-next',
			prev: 'slide-prev',
			current: 1,
			firstcount: 1,
			autoscroll : false,
			hidetime : 1000 	
		};
		var o = $.extend(defaults,options);
		var mainslider = $(this).selector;//'#'+o.id;
		var sliderprev = '#'+o.prev;
		var slidernext = '#'+o.next;
		var currentSlide = o.current;
		var firstli = o.firstcount;
		var liCount = $(mainslider+' li').length;
		var autoscroll = o.autoscroll;
		var hidetime = o.hidetime;
		var clickEnable = true;
		//console.log($(mainslider+' li'));
		//$(mainslider+' li').removeClass('sactive');
		
		console.log(autoscroll);
		if(autoscroll){
			//setInterval(function() { $(slidernext).trigger("click");}, hidetime);	
		}		
		//Prev button click event
		$(sliderprev).click(function(){
			if(clickEnable){
				$(mainslider+' li:nth-child(' + currentSlide + ')').hide();
				clickEnable = false;
				if(currentSlide===firstli){
					currentSlide = (liCount);
					//console.log('now');		
				}else{
					currentSlide--;					
				}
				
				$(mainslider+' li:nth-child(' + currentSlide + ')').fadeIn('slow', function() {
								// Animation complete
								clickEnable = true;								
				});
			
			}	//$(mainslider+' li').removeClass('sactive');
				//$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');
					
		});	
		
		//Next button click event
		$(slidernext).click(function(){
			if(clickEnable){
				//$(mainslider+' li:nth-child(' + currentSlide + ')').hide();						
				$(mainslider+' li:nth-child(' + currentSlide + ')').fadeOut('100');	
				if(currentSlide<liCount){
					currentSlide++;//$(this).css('opacity','1');
				}else{
					currentSlide = firstli;//$(this).css('opacity','0');
				}
				$(mainslider+' li').removeClass('sactive');//$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');	
				$(mainslider+' li:nth-child(' + currentSlide + ')').fadeIn('5000', function() {
								// Animation complete
								clickEnable = true;
								$(this).addClass('sactive');
				});
				
			}
		});	
	}
})(jQuery);