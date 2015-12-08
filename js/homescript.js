//video movement starts
videoData = ['candlelight.mp4','test2.mp4','try.mp4','4.mp4'];
nav = ["nav1","nav2","nav3","nav4","nav5"];

var videos=document.querySelectorAll('video.bannerVideo'); 
var totalvideos = videos.length;
$(document).ready(function() {});

var next=1,prev=0,vidIndex=0;//flags
startvideo();

winload();
var w=$(window).width();
var video_height=$(".bannerVideo").height();
if(w<800){
	$('#videoBanner').css('height',video_height);	
}

//load all videos after page load.
window.onload = function(){
	var li = '<li class = "navli" data-id="0" id="nav1" >1</li>';
	for(var i=1;i<totalvideos;i++){
		videos[i].setAttribute('src','videos/'+videoData[i]);
		j = i+1;
		li += '<li class = "navli" data-id="'+i+'" id="nav'+j +'" >'+j+'</li>';
	}
	$('#header_wrapper ul').append(li);
	curVideo.onended = function(e) { //console.log('ended');				
		playNext();				
	};	
};

//loaded initially.
function winload(){
  $('#content').css('top',window.innerHeight+"px");
  $('#videoBanner,.section').css('height',window.innerHeight+"px");
};

//start video
function startvideo(){	
	curVideo = videos[0];
	next=1,prev=0,vidIndex=0; // flags
	$('#prev').addClass('inactive');
	$('#header_wrapper ul li.active').removeClass('active');
	$('#'+nav[vidIndex]).addClass('active');
	videos[0].play();	
}

function commonFunc(vidIndex){
  addAClass(videos[vidIndex].parentNode,'active');
  $('#header_wrapper ul li.active').removeClass('active');
  $('#'+nav[vidIndex]).addClass('active');		
  videos[vidIndex].currentTime = 0;
  videos[vidIndex].load();	
  enableClick = true;
  videos[vidIndex].play(); // play video		  
  curVideo = videos[vidIndex];		  
  curVideo.onended = function(e) { //console.log('ended');		
		playNext();		
  };  
}

//pausing the video
function pauseVideo(currentindex){
	removeAClass(videos[currentindex].parentNode,'active');
	videos[currentindex].pause(); //pause video
}

//go to specific video.
function goto(newindex,currentindex){
	pauseVideo(currentindex);
	vidIndex = newindex;
	commonFunc(vidIndex);
}

//next 
function playNext(){	
	$('#prev').removeClass('inactive');
	
	/*videos[vidIndex].onloadstart = function(e){
		console.log('loaded now'+vidIndex);
	}*/
	
	if(vidIndex<videos.length-1){	
		  pauseVideo(vidIndex);
		  vidIndex++;		  
		  commonFunc(vidIndex);
		  //if(vidIndex==videos.length-1){ ('#next').addClass('inactive');  }	
	}
	else{
		  //$('#next').addClass('inactive');
		  removeAClass(videos[vidIndex].parentNode,'active');	
		  //reset to first
		  goto(0,vidIndex);	
	}//addAClass(videos[vidIndex].parentNode,'active');
}

//previous
function playPrev(){	
	/*videos[vidIndex].onloadstart = function(e){ console.log('loaded now'+vidIndex);}
	curVideo.oncanplay = function(e){ console.log('can play now.');}*/
	
	$('#next').removeClass('inactive');
	if(vidIndex==0){
		goto((totalvideos-1),vidIndex); //$('#prev').addClass('inactive');
		return;
	}
	else{
		pauseVideo(vidIndex);		
		vidIndex--; 
		commonFunc(vidIndex);//if(vidIndex==0){$('#prev').addClass('inactive');}
  }
}

//button clicks
$(document).on('click','#prev',function(e){
	e.preventDefault();
	if(enableClick){	
		enableClick = false;
		playPrev();
	}
	return false;
});

var enableClick = true;
$(document).on('click','#next',function(e){
	e.preventDefault();
	if(enableClick){	
		enableClick = false;
		playNext();		
	}		
	return false;	
});

$(document).on('click','.navli',function(e){
	var newindex = $(this).attr('data-id');
	goto(newindex,vidIndex);
});
//button clicks
//video movement ends.

//common functions
function addEvent(evnt, elem, func) {
   if (elem.addEventListener)  // W3C DOM
      elem.addEventListener(evnt,func,false);
   else if (elem.attachEvent) { // IE DOM
      elem.attachEvent("on"+evnt, func);
   }
   else { // No much to do
      elem[evnt] = func;
   }
}
var addAClass = function(el,classname){
	if(el.className.indexOf(classname)==-1){
		el.className +=" "+classname;
	}
};

var removeAClass =function(el,classname){
	if(el.className.indexOf(classname)!=-1){
		var elclassname=el.className.replace(classname,'');
		el.className =elclassname;
	}
};
//common functions