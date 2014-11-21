$(document).ready(function(){
    //html player function!
	var x=0 ,y=0;
	function player(classes,x,y) {
		return $("<div>").addClass(classes + " tank")
		.append($('<div>').addClass("tank_body").addClass('player'))
		.append($('<div>').addClass("tank_mouth").addClass('player'))
		.css({'position':'absolute','top':y,'left':x,'width': '50px'});
	}
	$('#gamebody').append(player("my_player",x,y));
	//player control
	$(document).keydown(function(e) {
		switch(e.which) {
		    case 37: // left
				if(x > 0){
					$('.my_player').removeClass('rutatetop');
					$('.my_player').removeClass('rutateright');
					$('.my_player').removeClass('rutatedown');
					$('.my_player').addClass('rutateleft');
					$('.my_player').stop().animate({left: '-=50px'},50);
					x = x-50;
				}
		    	break;

		    case 38: // up
				if(y > 0){
					$('.my_player').removeClass('rutateleft');
					$('.my_player').removeClass('rutateright');
					$('.my_player').removeClass('rutatedown');
					$('.my_player').addClass('rutatetop');
					$('.my_player').stop().animate({top: '-=50px'},50);
					y = y-50;
				}	
		    	break;

		    case 39: // right
				if(x <900){
					$('.my_player').removeClass('rutatetop');
					$('.my_player').removeClass('rutateleft');
					$('.my_player').removeClass('rutatedown');				
					$('.my_player').addClass('rutateright');
					$('.my_player').stop().animate({left: '+=50px'},50);
					x = x+50;
				}	
				break;

		    case 40: // down
				if(y < 400){
					$('.my_player').removeClass('rutatetop');
					$('.my_player').removeClass('rutateright');
					$('.my_player').removeClass('rutateleft');				
					$('.my_player').addClass('rutatedown');
					$('.my_player').stop().animate({top: '+=50px'},50);
					y = y+50;
				}	
		    	break;

		    default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	//computer_player
	function enemy(classes,x,y) {
		return $("<div>").addClass(classes + " tank")
		.append($('<div>').addClass("tank_body").addClass('enemy'))
		.append($('<div>').addClass("tank_mouth").addClass('enemy'))
		.css({'position':'absolute','top':y,'left':x,'width': '50px'});
	}
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player1",100,0));
		$('.computer_player1').addClass('rutatedown');
	},3000);
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player2",200,0));
	},6000);
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player3",200,100));
	},9000);
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player4",300,200));
	},10000);	
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player5",400,300));
	},11000);	
});