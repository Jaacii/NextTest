					
	   var select = 1;
	   
		//---------- Resonance Audio

        var x = 1.0;
        var y = 1.0;
        var z = 1.0;

       
        let audioContext = new AudioContext();

        // first-order Ambisonic Resonance Audio scene 
        let resonanceAudioScene = new ResonanceAudio(audioContext);

        // Connect the scene’s binaural output to stereo out.
        resonanceAudioScene.output.connect(audioContext.destination);

		//Raum Größe und Material
        let roomDimensions = {
            width: 3.1,
            height: 2.5,
            depth: 3.4,
        };

       //room -> ourdoors
			let roomMaterials = {
            
            left: 'transparent',			
            right: 'transparent',
            front: 'transparent',
            back: 'transparent',
            // Room floor
            down: 'transparent',
            // Room ceiling
            up: 'transparent',
        };

        
        resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);
		
		
		//
		var songs = ["Audio/Cat.wav","Audio/bird.wav","Audio/wind.wav"];
 
        let audioElement2 = document.createElement('audio');
		//audioElement.src = '';

        audioElement2.loop = true;
        let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
        let source2 = resonanceAudioScene.createSource();
        audioElementSource2.connect(source2.input);
        source2.setPosition(x,y,z);
        

		
		
		function sourcePosition() {
			
			
} 
			
			source2.setPosition(x,y,z)
		}