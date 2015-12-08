//non conflicting jquery with other javascript's
(function($){     
	$.fn.customslide = function(options){ 
		var defaults = {
			//id: 'slideul',
			next: 'slide-next',
			prev: 'slide-prev',
			current: 1,
			broHeight : 130,
			broWidth : 92,
			animationSpeed : 500,
			firstcount: 1,
			lastcount:5,
			defaultli : 1,
			displayno : 1
		};
		
		var o = $.extend(defaults,options);
		var mainslider = $(this).selector;//'#'+o.id;		
		var sliderprev = '.'+o.prev;
		var slidernext = '.'+o.next;
		var broHeight = o.broHeight;
		var broWidth= o.broWidth;
		var currentSlide = o.current;
		var firstli = o.firstcount;
		var liCount =  o.lastcount; //$(mainslider+' li').length;	//$(mainslider+' li').removeClass('sactive');	
		if(o.displayno > 0)
		{
			liCount =  o.lastcount - (o.displayno-1);
		}
		
		var defaultli = o.defaultli; //console.log(defaultli);
		
		//main parameters
		var thisName = $(this).attr('id'); //var broHeight = $(window).height();	
		var clicked = false;
		var ul_height = 0;
		var current = 1;
		var ul_count = $(this).find('li').length;
		ul_height = ul_count * broWidth;
		/*$(this).find('li').each(function () { ul_height = ul_height + broHeight;});*/		
		
		$(this).find('li').css("width",broWidth);
		$(this).css('width', ul_height + "px");
		var defaultWidth = o.displayno * broWidth;
		$(this).wrap('<div style="overflow:hidden;width:'+defaultWidth+'px" />');	
		
		if(defaultli!=firstli)
		{
			currentSlide = defaultli;
			defaultli = defaultli-1;
			lf = -(broWidth * defaultli);				
			checkButton();			
			$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});			
			
		}
		
		checkButton();
		
		//Prev button click event
		$(sliderprev).click(function(){		
				if (currentSlide != firstli)
				{
				    currentSlide--; //console.log(currentSlide);					
					$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');															
					lf = -(broWidth * (currentSlide-1));
					//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;});	
					$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				}
				
				checkButton();	
		});	
		
		//Next button click event
		$(slidernext).click(function(){					
				if(liCount>currentSlide){					
					//console.log(mainslider+':'+$(mainslider).offset().top+':'+$(mainslider+' li:nth-child(' + currentSlide + ')').find('img').attr('src'));					
					$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');						
					//tp = $(mainslider).offset().top - broHeight;
					lf = - (broWidth * currentSlide);
					currentSlide++;											
				}				
				/*else{//currentSlide = firstli;																
					$(slidernext).addClass('hide');
				}*/				
				//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;
				//});
				$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				checkButton();	
		});	
		
		function checkButton(){ //console.log(currentSlide);		    
			$(sliderprev+','+slidernext).removeClass('hide');
			if((currentSlide>liCount)||(currentSlide==liCount)){ 
				
			$(slidernext).addClass('hide'); }
			if(currentSlide==firstli){ $(sliderprev).addClass('hide'); }	
		}
	}
})(jQuery);