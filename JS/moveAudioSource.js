 	//MoveButtons     funktioniert scheinbar noch nicht
		 
		 function moveSource(direction) {
		 
		 if (direction === 0) {
			
			y = y+0.1;;
			
			document.getElementById("Ycoordinate").textContent= y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 1) {
			x = x+0.1;
			
			document.getElementById("Xcoordinate").textContent=  ((x * -1)*100)/100;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 2) {
			x = 0.0;
			y = 0.0;
			
			document.getElementById("Xcoordinate").textContent= x;
			document.getElementById("Ycoordinate").textContent=  y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 3) {
			x = x-0.1;;
			
			document.getElementById("Xcoordinate").textContent= ((x * -1)*100)/100; 
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 4) {
			
			y = y-0.1;;
			document.getElementById("Ycoordinate").textContent= y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			
			}
			
			
			
			
		 
		 } 