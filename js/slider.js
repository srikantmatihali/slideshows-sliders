/* Plugin Name: Simple Slider
 * Version: 1.0
 * Dependency: jQuery 1.6 and above
 * Author: Raghunath J
 * Mail: jrcbangalore@gmail.com
 * www: www.raghunathj.com
*/
(function($){
	$.fn.slider = function(options){
		var defaults = {
			id:'slider-a',
			next:'slide-next',
			prev:'slide-prev',
			coverid:'slidewrapper',
			marginfix:1000
		};
		var slideable = true;
		var o = $.extend(defaults,options);
		var wrapper = '#'+o.coverid;
		var mainslider = '#'+o.id;
		var sliderprev = '#'+o.prev;
		var slidernext = '#'+o.next;
		var currentSlide = 1;
		var previousPosition = 0;
		//Screen size
		var slider_win_screen = $(window).width();
		//Create a wrapper
		this.wrap('<div id="'+o.coverid+'" />');
		$(wrapper).css({
							width:slider_win_screen+'px',
							overflow:'hidden'
						});
		var liCount = $(mainslider+' li').length;
		//console.log("TOTAL LI"+liCount);
		var li_size = $(mainslider+' li:nth-child(1)').outerWidth(true);
		//alert(li_size);
		var ulWidth = Math.round(li_size * liCount)+o.marginfix;
		//alert(ulWidth);
		this.css({
					position:'relative',
					width:ulWidth+'px',
					left:'0px'
					});
		//Check whether to show prev and next options based on window screen and number of li's
		if(ulWidth < slider_win_screen){
			$(sliderprev).css("display","none");
			$(slidernext).css("display","none");
			slideable = false;
		}
		
		//Only if slideable then do this actions
		if(slideable){
			var total_div = Math.round(slider_win_screen/li_size);
			//console.log("T DIV"+total_div);
			var max_jump = li_size * total_div;
			//console.log("MAX JUMP"+max_jump);
			var total_slide = Math.ceil(liCount/total_div);
			//console.log("TOTAL SLIDE"+total_slide);
			//Hide Prev by default for the first time.
			$(sliderprev).css("display","none");
			
			//Next button click event
			$(slidernext).click(function(){
				var new_jump = max_jump * currentSlide;
				previousPosition = new_jump - max_jump;
				//console.log("PP"+previousPosition);
				$(mainslider).stop().animate({"left":"-"+new_jump+"px"},"slow");
				currentSlide++;
				//previousPosition++;
				checkprevnext();
			});
			//Next button swipe event
			$("#slider-a").swiperight(function() {
				currentSlide--;
				//console.log("PREV: CS"+currentSlide);
				var new_jump = max_jump * currentSlide;
				var jump = "-"+previousPosition+"px"
				//console.log("JUMP: "+jump);
				$(mainslider).stop().animate({"left":jump},"slow");
				previousPosition = previousPosition - max_jump;;
				checkprevnext();			

			});		
							
			//Prev button click event
			$(sliderprev).click(function(){
				currentSlide--;
				//console.log("PREV: CS"+currentSlide);
				var new_jump = max_jump * currentSlide;
				var jump = "-"+previousPosition+"px"
				//console.log("JUMP: "+jump);
				$(mainslider).stop().animate({"left":jump},"slow");
				previousPosition = previousPosition - max_jump;;
				checkprevnext();
			});
			
			//Prev button swipe event
			$("#slider-a").swipeleft(function() {
				var new_jump = max_jump * currentSlide;
				previousPosition = new_jump - max_jump;
				//console.log("PP"+previousPosition);
				$(mainslider).stop().animate({"left":"-"+new_jump+"px"},"slow");
				currentSlide++;
				//previousPosition++;
				checkprevnext();
			});			
			
		}
		
		function checkprevnext(){
				$(sliderprev).css("display","block");
				$(slidernext).css("display","block");
				if(total_slide == currentSlide){
					$(slidernext).css("display","none");
					//currentSlide--;
				}
				if(currentSlide==1){
					$(sliderprev).css("display","none");
					//currentSlide = 1;
				}
				//console.log("CURRENT SLIDE"+currentSlide);
		}
		
	}
})(jQuery);