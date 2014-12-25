$(document).ready(function(){
	var my_player = {x: 0,y:0,tank_direction: 39};
	var left = 37, top = 38, right = 39, down = 40,i = 0;

	function player(classes,x,y) {
		return $("<div>").addClass(classes + " tank")
		.append($('<div>').addClass("tank_body").addClass('player'))
		.append($('<div>').addClass("tank_mouth").addClass('player'))
		.css({'position':'absolute','top':y,'left':x,'height': '78px'});
	}
	$('#gamebody').append(player("my_player" , my_player.x, my_player.y));
	//bullet code
	var bullets = ['bullet0','bullet1','bullet2'];
	var selecter = ['.bullet0','.bullet1','.bullet2'];
	$(document).click(function(){
	//for right	
		
		$('#gamebody').append($('<div>').addClass(bullets[i] + ' bullet'));
		if(my_player.tank_direction == right){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 34;
			var	left_pos = pos_player.left + 50;
			$('.bullet').addClass('right');
			$('.bullet').css({'top': top_pos,'left': left_pos});
			$('.bullet').addClass('rotateright');
			function bullet(){
			
				left_pos = left_pos + 50; 
				$(selecter[i]).animate({left: "+=50"},100,function(){
					if(left_pos >= 965){
						$(selecter[i]).remove();
						$('.bullet').remove();
					}
					else{
						bullet();
					}		
				});
				
			}	
			bullet();
			if( i == 2 ){
				i =0;
			}
		}	
		
	//for left	
	
		if( my_player.tank_direction == left ){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 33;
			var	left_pos = pos_player.left + 10;
			var animate = 100;
			$('.bullet').addClass('left');
			$('.left').css({'top': top_pos,'left': left_pos});
			$('.left').addClass('rotateleft');
			$('.left').animate({left: -animate},animate,function(){
				$('.bullet').remove();
				$('.left').remove();
			});
		}
	//for top 	
		if(my_player.tank_direction == top){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top - 15;
			var	left_pos = pos_player.left + 30;
			var animate = top_pos;
			$('.bullet').addClass('top');
			$('.top').css({'top': top_pos,'left': left_pos});
			$('.top').addClass('rotatetop');
			$('.top').animate({top: -animate},animate,function(){
				$('.bullet').remove();
				$('.top').remove();
			});
		}	
	//for down	
		if(my_player.tank_direction == down){	
			var pos_player = $('.my_player').position();
			var top_pos = pos_player.top + 55;
			var	left_pos = pos_player.left + 30;
			var animate = 500;
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
	
		$('.my_player').removeClass('rotatetop');
		$('.my_player').removeClass('rotateright');
		$('.my_player').removeClass('rotateleft');				
		$('.my_player').removeClass('rotatedown');
		
		switch(e.which) {
		    case left: // left
				$('.my_player').addClass('rotateleft');
				
				if( my_player.tank_direction == left){	
					if( my_player.x > 0){
						$('.my_player').stop().animate({left: '-=50px'},50);
						my_player.x = my_player.x - 50;
					}
				}
				my_player.tank_direction = left;	
		    	break;

		    case top: // up
				$('.my_player').addClass('rotatetop');
				if(my_player.tank_direction == top){
					if(my_player.y > 0){
						$('.my_player').stop().animate({top: '-=50px'},50);
						my_player.y = my_player.y-50;
					}
				}		
				my_player.tank_direction = top;
		    	break;

		    case right: // right
								
				$('.my_player').addClass('rotateright');
				if(my_player.tank_direction == right){
					if(my_player.x <900){
						$('.my_player').stop().animate({left: '+=50px'},50);
						my_player.x = my_player.x + 50;
					}
				}		
				my_player.tank_direction = right; 
				break;

		    case down: // down
							
				$('.my_player').addClass('rotatedown');
				if(my_player.tank_direction == down){
					if(my_player.y < 400){
						$('.my_player').stop().animate({top: '+=50px'},50);
						my_player.y = my_player.y+50;
					}	
				}	
				my_player.tank_direction = down;
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
	
	setTimeout(function(){
		$('#gamebody').append(enemy("computer_player1",100,0));
		$('.computer_player1').addClass('rotatedown');
		setTimeout(function(){
			$('.computer_player1').animate({top:'400px'},10000);
		},3000);
	},3000);
	setTimeout(function(){
		$('#gamebody').append(enemy("computer_player2",200,0));
	},6000);
	setTimeout(function(){
		$('#gamebody').append(enemy("computer_player3",200,100));
	},9000);
	setTimeout(function(){
		$('#gamebody').append(enemy("computer_player4",300,200));
	},10000);	

});