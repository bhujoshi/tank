$(document).ready(function(){
    //html player function!
	function player(){
		$("#gamebody").html("<div id='tank' class='player'></div>");
		$("#tank").html("<div id='mouth' class='player'></div>");
		$("#tank").html("<div id='mouth' class='player'></div>");
	}
	player();
	//player control
	$(document).keydown(function(e) {
		switch(e.which) {
		    case 37: // left
		    	$('#tank').stop().addClass('rutateleft').animate({left: '-=50px'},50);
		    	break;

		    case 38: // up
		    	$('#tank').stop().addClass('rutatetop').animate({top: '-=50px'},50);
		    	break;

		    case 39: // right
		    	$('#tank').stop().addClass('rutateright').animate({left: '+=50px'},50);
		    	break;

		    case 40: // down
		    	$('#tank').stop().addClass('rutatedown').animate({top: '+=50px'},50);
		    	break;

		    default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	$(document).click(function(){
		player();
	});
	
	//html for enemy!
	//$("#gamebody").html("<div id='tank' class='enemy' style='top: 10em;left: 10em'></div>");
	//$("#tank").html("<div id='mouth' class='enemy'></div>");
	//$("#tank").html("<div id='mouth' class='enemy'></div>");
	
});
  