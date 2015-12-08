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
		
		//console.log($(mainslider+' li'));
		//$(mainslider+' li').removeClass('sactive');
		
		console.log(autoscroll);
		if(autoscroll){
			setInterval(function() { $(slidernext).trigger("click");}, hidetime);	
		}		
		//Prev button click event
		$(sliderprev).click(function(){
				if(currentSlide===firstli){
					currentSlide = (liCount);
					//console.log('now');		
				}else{
					currentSlide--;					
				}
					//console.log(1);			
				$(mainslider+' li').removeClass('sactive');
				$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');
					
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
				$(mainslider+' li').removeClass('sactive');				
				$(mainslider+' li:nth-child(' + currentSlide + ')').addClass('sactive');				
				
		});	
	}
})(jQuery);
/*//browser data.
 var broHeight = $(window).height();
 var broWidth= $(window).width();

 var clicked = false;
 var ul_width = 0;
 var current = 1;
 $("#slideul li").each(function () {
         ul_width = ul_width + broWidth;
  });
 $("#wrapper,#slideul,#slideul li").css("width",broWidth);
 $("#slideul").css('width', ul_width + "px");
 $("#next").live("click", function(e){
	if(!clicked){
		clicked = true;
		e.preventDefault();
		 if ($("#slideul li").length > current) {
			 wid = $("#slideul li:nth-child(" + current + ")").width();
             lf = $("#slideul").offset().left - wid; console.log("LF : "+lf);
			 current = current + 1; 			
		 }
		//lf = '+=50'; console.log(lf);
		 $("#slideul").animate({ left: lf }, 500, function () {
            clicked = false;
         });
	} checkButton();
	return false;
 });
 
 $("#previous").live("click", function(e){
	if(!clicked){
		clicked = true;
		e.preventDefault();
		 if (current != 1) {
			 wid = $("#slideul li:nth-child(" + current + ")").width();
             lf = $("#slideul").offset().left + wid; console.log("LF : "+lf);
			 current = current - 1; 			
		 } //lf = '+=50';		 console.log(lf);
		 $("#slideul").animate({ left: lf }, 500, function () {
            clicked = false;
         });		
	} checkButton();
	return false;
 });
 
 
 function checkButton() {
                $("#previous").css('display', 'block');
                $("#next").css('display', 'block');
                if (current == 1) {
                    $("#previous").css('display', 'none');
                }
                if (current == $("#slideul li").length) {
                    $("#next").css('display', 'none');
                }
}*/