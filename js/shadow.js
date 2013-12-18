$(document).ready(function(){
	
	$('#button').on('mousedown', function(){
		$('#button').stop().animate({boxShadow:'4px 4px 3px 0 #9a9a9a', top:'24px', left:'30px'}, 50);
	});
	$('#button').on('mouseup', function(){
		$('#button').stop().animate({boxShadow:'10px 10px 10px 0 #9a9a9a', top:'20px', left:'25px'}, 300);
	});
});
