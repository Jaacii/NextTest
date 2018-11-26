 //------------Play Button
		var onOff = 0;
		var btn ? document.getElementById('playbtn
		');
			function playOrPauseSong() {
				
				
				
				if (onOff == 0) {
					audioElement2.src = songs[select];
				
					audioElement2.play();
					btn.style.backgroundImage = 'url(../Pictures/pause.png)';
					//audioElement2.volume = volumeslider.value / 100;
					//Pic change
					//document.getElementById("playpic").src="pause.png";
					onOff = 1;
				}
				else {
					
					audioElement2.pause(); 
					btn.style.backgroundImage = 'url(../Pictures/play.png)';
					//audioElement2.volume = 0;		//schummeltaktik, weil es manchmal die audio nicht pausiert
					//Pic change
					//document.getElementById("playpic").src="play.png";
					onOff = 0;
				}
			}

			