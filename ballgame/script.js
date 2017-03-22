(function () {
	var init = function () {
		var c = document.getElementById('game');
		var d = c.getContext('2d');
		var cX = c.width / 2;
		var cY = 25;
		var radius = 12;
		var bounce = 1;
		var sX = cX;
		var sY = cY;
		var angle;
		var FPS = 800;
		var slabStartX = 0;
		var slabStartY = c.height - 13;;
		var slabWidth = 75;
		var slabHeight = 13;;
		var score = 0;
		var counter = 0;
		gameLoop();

		drawSlab();

		function gameLoop() {
			var timer = setInterval(function () {
				//console.log(FPS);
				update();
				circle();
				if (bounce == 5) {
					clearInterval(timer);
					gameOver();
				}
			}, 7);
		}

		function update() {
			angle = Math.atan((cY - sY) / (cX - sX)) * 180 / Math.PI;
			if ((cY + radius >= slabStartY) && (cX >= slabStartX - radius) && (cX <= slabStartX + slabWidth + radius)) {
				console.log('dsdsd');
				score++;
				$('.score-value').html(score);
				if (angle < 0) {
					bounce = 3;
				}
				else {
					bounce = 4;
				}
			}
			else {
				if (cX + radius == c.width) {
					if (angle > 0) {
						bounce = 2;
					}
					else {
						bounce = 3;
					}
					//console.log(angle);
					FPS += 20;
					//console.log(FPS);
				}
				else if (cY + radius >= c.height) {
					bounce = 5;
					//console.log(angle);
					FPS += 20;
					//console.log(FPS);
				}
				else if (cX - radius <= 0) {
					if (angle > 0) {
						bounce = 4;
					}
					else {
						bounce = 1;
					}
					//console.log(angle);
					FPS += 20;
					//console.log(FPS);
				}
				else if (cY - radius <= 0) {

					if (angle < 0) {
						bounce = 1;
					}
					else {
						bounce = 2;
					}
					FPS += 20;
					//console.log(angle);
					//console.log(FPS);
				}
				//console.log('bitcvhes');
			}
			ballMove();
		}

		function circle() {
			d.beginPath();
			d.arc(cX, cY, radius, 0, 2 * Math.PI, false);
			d.fillStyle = "red";
			d.strokeStyle = '#003300';
			d.fill();
		}

		function ballMove() {
			//console.log(bounce);
			sX = cX;
			sY = cY;
			d.clearRect(cX - radius, cY - radius, 24, 24);
			if (bounce == 1) {
				cX += 2;
				cY += 2;
			}
			else if (bounce == 2) {
				cX -= 2;
				cY += 2;
			}
			else if (bounce == 3) {
				cX -= 2;
				cY -= 2;
			}
			else if (bounce == 4) {
				cX += 2;
				cY -= 2;
			}
			else if (bounce == 5) {

			}
		}

		function slabLeft() {
			if (slabStartX > 0) {
				d.clearRect(slabStartX, slabStartY, slabWidth, slabHeight);
				slabStartX -= 15;
				drawSlab();
			}
		}

		function slabRight() {
			if (slabStartX + slabWidth < c.width) {
				d.clearRect(slabStartX, slabStartY, slabWidth, slabHeight);
				slabStartX += 15;
				drawSlab();
			}
		}
		function drawSlab() {
			//console.log(slabStartX,slabEndX);
			d.beginPath();
			d.rect(slabStartX, slabStartY, slabWidth, slabHeight);
			d.fillStyle = "blue";
			d.fill();

		}
		$(document).keydown(function (e) {
			if (bounce < 5) {
				switch (e.which) {
					case 37: // left
						//console.log('left');
						slabLeft();
						break;
					case 39: // right
						//console.log('right');
						slabRight();
						break;

					default: return; // exit this handler for other keys
				}
			}
			// e.preventDefault(); // prevent the default action (scroll / move caret)
		});

		function setblinkFont() {
			$('.header-name').css('color', 'rgb(105,136,252)');
			setTimeout(function () {
				blink();
			}, 500);
		}

		function blink() {
			$('.header-name').css('color', 'rgb(253,0,4)');
			setTimeout(function () {
				setblinkFont();
			}, 500);
		}


		blink('.header-name');

		function fixHigh(){
			var prev=document.getElementsByClassName('high-value')[0]?parseInt(document.getElementsByClassName('high-value')[0]):0;
			if(isNaN(prev)){
				prev=0;
			}	

			if(score>=prev){
				$('.high-value').html(score);
			}
			$('.score-value').html(0);	

		}

		function gameOver() {
			d.clearRect(0, 0, c.width, c.height);
			d.fillStyle = "#000";
			d.font = '30pt Calibri';
			d.fillText("GAME OVER!!!!", 50, 200);
			$(document).keydown(false);

			setTimeout(function () {
				fixHigh()
				var oldcanv = document.getElementsByClassName('gamecanvas')[0];
				document.getElementsByClassName('wrapper')[0].removeChild(oldcanv)
				var canv=document.createElement('canvas');
				canv.setAttribute('width','400px');
				canv.setAttribute('height','450px');
				canv.setAttribute('id','game');
				canv.setAttribute('class','gamecanvas');
				document.getElementsByClassName('wrapper')[0].appendChild(oldcanv);
				init();
			}, 4000)
		}
	}
	init();

})()


