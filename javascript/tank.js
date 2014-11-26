$(document).ready(function(){
	var my_player = {x: 100,y:100,tank_direction: 39};

	function player(classes,x,y) {
		return $("<div>").addClass(classes + " tank")
		.append($('<div>').addClass("tank_body").addClass('player'))
		.append($('<div>').addClass("tank_mouth").addClass('player'))
		.css({'position':'absolute','top':y,'left':x,'height': '78px'});
	}
	$('#gamebody').append(player("my_player" , my_player.x, my_player.y));
	//bullet code
	$(document).click(function(){
	//for right	
		$('#gamebody').append($('<div>').addClass('bullet'));
		if(my_player.tank_direction == 39){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 34;
			var	left_pos = pos_player.left + 50;
			var animate = 965;
			$('.bullet').addClass('right');
			$('.right').css({'top': top_pos,'left': left_pos});
			$('.right').animate({left: animate},'slow',function(){
				$('.bullet').remove();
				$('.right').remove();
			});
		}	
	//for left	
	
		if( my_player.tank_direction == 37 ){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 33;
			var	left_pos = pos_player.left + 10;
			var animate = 100;
			//$('#gamebody').append($('<div>').addClass('bullet'));
			$('.bullet').addClass('left');
			$('.left').css({'top': top_pos,'left': left_pos});
			$('.left').addClass('rotateleft');
			$('.left').animate({left: -animate},animate,function(){
				$('.bullet').remove();
				$('.left').remove();
			});
		}
	//for top 	
		if(my_player.tank_direction == 38){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top - 15;
			var	left_pos = pos_player.left + 30;
			var animate = top_pos;
			//$('#gamebody').append($('<div>').addClass('bullet'));
			$('.bullet').addClass('top');
			$('.top').css({'top': top_pos,'left': left_pos});
			$('.top').addClass('rotatetop');
			$('.top').animate({top: -animate},animate,function(){
				$('.bullet').remove();
				$('.top').remove();
			});
		}	
	//for down	
		if(my_player.tank_direction == 40){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 55;
			var	left_pos = pos_player.left + 30;
			var animate = 500;
			//$('#gamebody').append($('<div>').addClass('bullet'));
			$('.bullet').addClass('down');
			$('.down').css({'top': top_pos,'left': left_pos});
			$('.down').addClass('rotatedown');
			$('.down').animate({top: animate},animate,function(){
				$('.bullet').remove();
				$('.down').remove();
			});
		}	
	});
	
	//player control
	$(document).keydown(function(e) {
		switch(e.which) {
		    case 37: // left
				$('.my_player').removeClass('rotatetop');
				$('.my_player').removeClass('rotateright');
				$('.my_player').removeClass('rotatedown');
				$('.my_player').addClass('rotateleft');
				
				if( my_player.tank_direction == 37){	
					if( my_player.x > 0){
						$('.my_player').stop().animate({left: '-=50px'},50);
						my_player.x = my_player.x - 50;
					}
				}
				my_player.tank_direction = 37;	
		    	break;

		    case 38: // up
				$('.my_player').removeClass('rotateleft');
				$('.my_player').removeClass('rotateright');
				$('.my_player').removeClass('rotatedown');
				$('.my_player').addClass('rotatetop');
				if(my_player.tank_direction == 38){
					if(my_player.y > 0){
						$('.my_player').stop().animate({top: '-=50px'},50);
						my_player.y = my_player.y-50;
					}
				}		
				my_player.tank_direction = 38;
		    	break;

		    case 39: // right
				$('.my_player').removeClass('rotatetop');
				$('.my_player').removeClass('rotateleft');
				$('.my_player').removeClass('rotatedown');				
				$('.my_player').addClass('rotateright');
				if(my_player.tank_direction == 39){
					if(my_player.x <900){
						$('.my_player').stop().animate({left: '+=50px'},50);
						my_player.x = my_player.x + 50;
					}
				}		
				my_player.tank_direction = 39; 
				break;

		    case 40: // down
				$('.my_player').removeClass('rotatetop');
				$('.my_player').removeClass('rotateright');
				$('.my_player').removeClass('rotateleft');				
				$('.my_player').addClass('rotatedown');
				if(my_player.tank_direction == 40){
					if(my_player.y < 400){
						$('.my_player').stop().animate({top: '+=50px'},50);
						my_player.y = my_player.y+50;
					}	
				}	
				my_player.tank_direction = 40;
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
		$('.computer_player1').addClass('rotatedown');
	},3000);
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player2",200,0));
	},6000);
	setInterval(function(){
		$('#gamebody').append(enemy("computer_player3",200,100));
	},9000);
	timeOut(function(){
		$('#gamebody').append(enemy("computer_player4",300,200));
	},10000);	
	timeOut(function(){
		$('#gamebody').append(enemy("computer_player5",400,300));
	},11000);	

});