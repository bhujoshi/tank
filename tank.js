$(document).ready(function(){
	$(document).keydown(function(e) {
		switch(e.which) {
		    case 37: // left
		    	$('#player').stop().addClass('rutateleft').animate({left: '-=50px'},50);
		    	break;

		    case 38: // up
		    	$('#player').stop().addClass('rutatetop').animate({top: '-=50px'},50);
		    	break;

		    case 39: // right
		    	$('#player').stop().addClass('rutateright').animate({left: '+=50px'},50);
		    	break;

		    case 40: // down
		    	$('#player').stop().addClass('rutatedown').animate({top: '+=50px'},50);
		    	break;

		    default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	$(document).click(function(){
		$('#bullat1').animate({top: '+=50px'},1000);
	});
});
  