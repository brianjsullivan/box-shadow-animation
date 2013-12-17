$(document).ready(function(){
	
	$('#button').on('mousedown', function(){
		$('#button').animate({boxShadow:'4px 4px 3px 0 #9a9a9a', top:'+=4px', left:'+=5px'}, 50);
	});
	$('#button').on('mouseup', function(){
		$('#button').animate({boxShadow:'10px 10px 15px 0 #9a9a9a', top:'-=4px', left:'-=5px'}, 300);
	});
});