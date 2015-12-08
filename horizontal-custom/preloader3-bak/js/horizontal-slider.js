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
			displayview: 'home',
			displayno : 1,
			siteurl: 'http://localhost/'
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
		var siteurl = o.siteurl;
		var displayview = o.displayview;
		var image_view_count = o.displayno - 1;
		var image_view_next = image_view_count + 2;
		var defaultli = o.defaultli; //console.log(defaultli);
		for(var i =1;i<liCount;i++ ){
			//console.log(i);
			var liID = $(mainslider+' li:nth-child(' + i + ')').attr('id');
			console.log(displayview+':'+liID);

			if(liID==displayview){				
				defaultli = i-1;
				break;
			}
		}					
		if(o.displayno > 0)
		{
			liCount =  o.lastcount - (o.displayno-1);
		}
		
				
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
		
		if(defaultli>0)
		{
			if(defaultli!=firstli){
				currentSlide = defaultli;
				defaultli = defaultli-1;			
				lf = -(broWidth * defaultli);				
				checkButton();			
				$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
			}	
			opacityAddition();						
			openData(currentSlide+1);
		}
		
		function insertbanners(slideno,bannerCount)
		{
			//console.log(slideno);	//'#history ul li:nth-child('+current_slide+')';//console.log($(templi).attr('data-thumb'));			
		   	if((slideno%image_view_count==0)&&(slideno<bannerCount))
		   	{
		   		for(var i=0;(i<image_view_next)&&(slideno<bannerCount);i++)
		   		{
					console.log($(mainslider+' li:nth-child(' + slideno + ')  .girl_img'));
					console.log(slideno+':'+$(mainslider+' li:nth-child(' + slideno + ') .girl_img').hasClass('preloader'));	
		   			/*var templi = '#li'+slideno;		   			
		   			if($(templi).find("img").length>0)
			   		{ 
			   			
			   		}
			   		else
			   		{ 
			   			//console.log(slideno);						
						 //console.log(data_object.history[slideno]['img']);
						 var crew_image = 'images/banner/'+data_object.history[slideno]['img'];
						 var crew_name = data_object.history[slideno]['name'];	
						 changeimage(crew_image,crew_name,templi);
			   		}*/
			   		slideno++;
		   		}			
		   	}
		}
		/*$('.girl_img').each(function(){ 	//console.log(imgSrc);
			var that = this;
			console.log(that);
			var image = $(this).attr('data-img');
			if((image!="undefined")&&(image!=" ")){
				var img = new Image();
				$(img).load(function () {
						$(this).hide();
						$(that).html(this);
						$(this).fadeIn();
					}).error(function () {
						// notify the user that the image could not be loaded
				}).attr('src', image);					
				//console.log(image);
			}			
		});*/		
		
		//checkButton();
		
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
				    currentSlide--; 
					console.log(currentSlide);
					
					opacityAddition();
					
					lf = -(broWidth * (currentSlide-1));
					//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;});	
					$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
					checkButton();	
				}else{
					//console.log('data');
					lf = -(broWidth * (currentSlide-1));
					//$(mainslider).animate({ top: tp }, o.animationSpeed, function () {//clicked = false;});	
					$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
					window.history.replaceState("Kf Calender Girl - ", "Kf Calender Girl - ", siteurl);
				}				
			
		}
		
		function rightclick(){
			closeDesc();
			if(liCount>currentSlide){	
					//console.log(mainslider+':'+$(mainslider).offset().top+':'+$(mainslider+' li:nth-child(' + currentSlide + ')').find('img').attr('src'));					
										
					//tp = $(mainslider).offset().top - broHeight;
					//load images dynamically   				   		
					insertbanners(currentSlide,liCount);					
					
					lf = - (broWidth * currentSlide);
					currentSlide++;										
					
					opacityAddition();
			}							
			$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
			checkButton();
		}
		
		function checkButton(){ //console.log(currentSlide);		    
			$(sliderprev+','+slidernext).removeClass('hide');
			if((currentSlide>liCount)||(currentSlide==liCount)){ 				
				$(slidernext).addClass('hide'); 
			}
			if(currentSlide==firstli){ $(sliderprev).addClass('hide'); }	
			
			//set up url			
			if(currentSlide==1){  //OpacSlide = 1;				
				var urlData = 'home';	console.log(urlData);										
				//window.history.replaceState("Kf Calender Girl - "+urlData, "Kf Calender Girl - "+urlData, siteurl+urlData);
			}
			if(currentSlide==2){ console.log(12);
				OpacSlide = currentSlide+1;
				var urlData = $(mainslider+' li:nth-child(' + OpacSlide + ')').attr('id');							
				window.history.replaceState("Kf Calender Girl - "+urlData, "Kf Calender Girl - "+urlData, siteurl+urlData);
			}
			else{
				OpacSlide = currentSlide+1;
				var urlData = $(mainslider+' li:nth-child(' + OpacSlide + ')').attr('id');							
				window.history.replaceState("Kf Calender Girl - "+urlData, "Kf Calender Girl - "+urlData, siteurl+urlData);
			}
			
		}
		
		$("body").keyup(function (e) {
			e.preventDefault();
			var number = e.which;
			switch(number){
				case 37: leftclick(); 
						break;
				case 39: rightclick();
						break;
				case 13: OpacSlide = currentSlide + 1 ;
						 openData(OpacSlide);
						break;
			}			
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
			OpacSlide = currentSlide + 1 ;
			openData(OpacSlide);
			return false;
		});
		
		function closeDesc(){			
			$(mainslider+' li').css("width",broWidth+'px');
			$(mainslider+' li .girl_desc').css("display",'none');
		}
		
		function opacityAddition(){
			//opacity change
			OpacSlide = currentSlide + 1 ;
			$(mainslider+' li').css('opacity',opacVal);	
			$(mainslider+' li:nth-child(' + OpacSlide + ')').css('opacity','1');
			//opacity change ends
					
			//$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');
			$(mainslider+' li').removeClass('sactive');
			$(mainslider+' li:nth-child(' + OpacSlide + ')').addClass('sactive');		
		}
		
		function openData(OpacSlide){
			closeDesc();
			//console.log(OpacSlide+'dfd');
			//OpacSlide = currentSlide + 1 ;
			var that = mainslider+' li:nth-child(' + OpacSlide + ')';
			//console.log($(that+' .girl_desc').length>0);
			//console.log($(that));
			if(($(that).attr('class')=='sactive')&&($(that+' .girl_desc').length>0)){ 
				lf = - (broWidth * (currentSlide))+(broWidth/3);
				$(mainslider).animate({left: lf},{duration:o.animationSpeed,easing:"easeInOutQuint"});
				$(that).css("width","800px");
				$(that).find('.girl_desc').fadeIn(500);
			}//console.log();
		}
	}
})(jQuery);