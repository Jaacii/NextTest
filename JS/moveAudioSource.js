			//MoveButtons     funktioniert scheinbar noch nicht
		 var Ycounter =1;
		  var Xcounter =1;
		  var Zcounter =1;
		  
		  var x=0, y=0, z =1;
		  
		 function move(direction) {
		
			if (direction === 0) {
				 y = y + 5 * Ycounter; 
				audioElementSource2.setPosition(x,y,z);
				Ycounter = Ycounter+1;
			}
			else if (direction === 4) {
				 y = y - 5 * Ycounter; 
				audioElementSource2.setPosition(x,y,z);
				Ycounter = Ycounter-1;
			}
			else if (direction === 1) {
				 x = x - 5 * Xcounter; 
				audioElementSource2.setPosition(x,y,z);
				Xcounter = Xcounter-1;
			}
			else if (direction === 3) {
				 x = x + 5 * Ycounter; 
				audioElementSource2.setPosition(x,y,z);
				Ycounter = Ycounter-1;
			}
			else if direction === 2) {
			Ycounter =1;
			Xcounter =1;
			Zcounter =1; 
			audioElementSource2.setPosition(0,0,0);
			audioElement2.play();
			}
			
		 
		 } 
		 