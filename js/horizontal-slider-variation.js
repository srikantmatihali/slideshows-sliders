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
		
		var opacVal = 0.3;
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
		$(sliderprev).click(function(e){	
				e.preventDefault();
				leftclick();
				return false;
		});	
		
		//Next button click event
		$(slidernext).click(function(e){	
				e.preventDefault();
				rightclick();	
				return false;
		});	
		
		function leftclick(){
			closeDesc();
			if (currentSlide != firstli)
				{
				    currentSlide--; //console.log(currentSlide);
					
					//opacity change
					OpacSlide = currentSlide + 1 ;
					$(mainslider+' li').css('opacity',opacVal);	
					$(mainslider+' li:nth-child(' + OpacSlide + ')').css('opacity','1');
					//opacity change ends
					
					$(mainslider+' li').removeClass('sactive');
					$(mainslider+' li:nth-child(' + OpacSlide + ')').addClass('sactive');
					
					lf = -(broWidth * (currentSlide-1));
					//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;});	
					$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				}				
			checkButton();	
		}
		
		function rightclick(){
			closeDesc();
			if(liCount>currentSlide){	
					//console.log(mainslider+':'+$(mainslider).offset().top+':'+$(mainslider+' li:nth-child(' + currentSlide + ')').find('img').attr('src'));					
										
					//tp = $(mainslider).offset().top - broHeight;
					lf = - (broWidth * currentSlide);
					currentSlide++;											
					
					//opacity change
					OpacSlide = currentSlide + 1 ;
					$(mainslider+' li').css('opacity',opacVal);	
					$(mainslider+' li:nth-child(' + OpacSlide + ')').css('opacity','1');
					//opacity change ends
					
					//$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');
					$(mainslider+' li').removeClass('sactive');
					$(mainslider+' li:nth-child(' + OpacSlide + ')').addClass('sactive');
			}				
			/*else{//currentSlide = firstli;																
				$(slidernext).addClass('hide');
			}*/				
			//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;
			//});
			$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
			checkButton();
		}
		
		function checkButton(){ //console.log(currentSlide);		    
			$(sliderprev+','+slidernext).removeClass('hide');
			if((currentSlide>liCount)||(currentSlide==liCount)){ 				
				$(slidernext).addClass('hide'); 
			}
			if(currentSlide==firstli){ $(sliderprev).addClass('hide'); }	
		}
		
		$("body").keyup(function (e) {
			e.preventDefault();
			var number = e.which;
			switch(number){
				case 37: leftclick(); 
						break;
				case 39: rightclick();
						break;
				case 13: openData();
						break;
			}
			/*if(number==37){  
				leftclick();			
			}else if (number==39){ 
				rightclick();			
			}*/	
			return false; 	
		});
		
		$('.girl_img').click(function(e){			
			e.preventDefault();
			/*closeDesc()
			if($(this).parent().attr('class')=='sactive'){
				lf = - (broWidth * (currentSlide))+(broWidth/3);
				$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				$(this).parent().css("width","800px");
				$(this).parent().find('.girl_desc').fadeIn(500);
			}//console.log();*/
			openData();
			return false;
		});
		
		function closeDesc(){			
			$(mainslider+' li').css("width",broWidth+'px');
			$(mainslider+' li .girl_desc').css("display",'none');
		}
		
		function openData(){
			closeDesc();
			OpacSlide = currentSlide + 1 ;
			var that = mainslider+' li:nth-child(' + OpacSlide + ')';
			if($(that).attr('class')=='sactive'){
				lf = - (broWidth * (currentSlide))+(broWidth/3);
				$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				$(that).css("width","800px");
				$(that).find('.girl_desc').fadeIn(500);
			}//console.log();
		}
	}
})(jQuery);