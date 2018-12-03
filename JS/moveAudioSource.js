			//MoveButtons     funktioniert scheinbar noch nicht
		 var Ycounter =1;
		  var Xcounter =1;
		  var Zcounter =1;
		  
		 // var x=1, y=1, z =1;
		  
		 function moveSource(direction) {
		
			if (direction === '0') {
				 y = y + 5 * Ycounter; 
				source2.setPosition(x,y,z);
				Ycounter = Ycounter+1;
			}
			else if (direction === '4') {
				 y = y - 5 * Ycounter; 
				source2.setPosition(x,y,z);
				Ycounter = Ycounter-1;
			}
			else if (direction === '1') {
				 x = x - 5 * Xcounter; 
				source2.setPosition(x,y,z);
				Xcounter = Xcounter-1;
			}
			else if (direction === '3') {
				 x = x + 5 * Ycounter; 
				source2.setPosition(x,y,z);
				Ycounter = Ycounter-1;
			}
			else if (direction === '2') {
			Ycounter =1;
			Xcounter =1;
			Zcounter =1; 
			source2.setPosition(0,0,0);
			audioElement2.play();
			}
			updateCoordinates();
			
		 } 
		 
		 function updateCoordinates () {
			 document.getElementById("Xcoordinate").innerHTML = "X: " + x;
			 document.getElementById("Ycoordinate").innerHTML = "Y: "+ x;
		 }
		 