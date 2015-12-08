//non conflicting jquery with other javascript's
(function($){
     
	$.fn.customslide = function(options){ //console.log($(this).selector);	
		var defaults = {
			//id: 'slideul',
			next: 'slide-next',
			prev: 'slide-prev',
			jump: 'jumpPage',
			current: 1,
			firstcount: 1,
			autoscroll : false,
			hidetime : 1000 	
		};
		var o = $.extend(defaults,options);
		var mainslider = $(this).selector;//'#'+o.id;
		var sliderprev = '#'+o.prev;
		var slidernext = '#'+o.next;
		var jump = '.'+o.jump;
		var currentSlide = o.current;
		var firstli = o.firstcount;
		var liCount = $(mainslider+' li').length;
		var autoscroll = o.autoscroll;
		var hidetime = o.hidetime;
		
		//console.log($(mainslider+' li'));
		//$(mainslider+' li').removeClass('sactive');		
		
		/*if(autoscroll){
			setInterval(function() { $(slidernext).trigger("click");}, hidetime);	
		}*/		
		//Prev button click event
		$(sliderprev).click(function(){
				if(currentSlide===firstli){
					currentSlide = (liCount);
					//console.log('now');		
				}else{
					currentSlide--;					
				}
				jumpPage(currentSlide);
					
		});	
		
		//Next button click event
		$(slidernext).click(function(){
				if(currentSlide<liCount){
					currentSlide++;
					//$(this).css('opacity','1');
				}else{
					currentSlide = firstli;
					//$(this).css('opacity','0');
				}
				jumpPage(currentSlide);	
		});	
		
		
		
		$(jump).click(function(e){		
			e.preventDefault();
			currentSlide =   $(this).attr('data');
			jumpPage(currentSlide);
			return false;
		});		
		
		function jumpPage(currentSlide){			
			$(mainslider+' li').removeClass('sactive');				
			$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');
			
		}
		
	}
})(jQuery);