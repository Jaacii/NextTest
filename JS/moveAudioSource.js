 	//MoveButtons     funktioniert scheinbar noch nicht
		 
		 function moveSource(direction) {
		 
		 
		 if (direction === 0) {
			
			y = y+0.1;
			y.toFixed(2);
			
			document.getElementById("Ycoordinate").textContent= y ;
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 1) {
			x = x+0.1;
			x.toFixed(2);	//Die X-Achse ist gespiegelt. Darum - statt +
			
			document.getElementById("Xcoordinate").textContent=  ((x*-1)*10)/10 ;
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
			x = x-0.1;
			x.toFixed(2);
			
			document.getElementById("Xcoordinate").textContent= ((x*-1)*10)/10  ; 
			resonanceAudioScene.setListenerPosition(x, y, z);
			}
		else if (direction === 4) {
			
			y = y-0.1;
			y.toFixed(2)
			document.getElementById("Ycoordinate").textContent= y;
			resonanceAudioScene.setListenerPosition(x, y, z);
			
			}
			
			
			
			
		 
		 } 