					
	   var select = 3;
	   
		//---------- Resonance Audio

        var x = 0.0;
        var y = 0.0;
        var z = 0.0;

       
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

       
			let roomMaterials = {
            
            left: 'curtain-heavy',
            right: 'curtain-heavy',
            front: 'glass-thin',
            back: 'glass-thin',
            // Room floor
            down: 'grass',
            // Room ceiling
            up: 'transparent',
        };

        
        resonanceAudioScene.setRoomProperties(roomDimensions, roomMaterials);
		
		
		//
		var songs = ["Audio/Cat.wav","Audio/bird.wav","Audio/wind.wav", "Audio/footsteps.wav"];
 
        let audioElement2 = document.createElement('audio');
		
        audioElement2.loop = true;
        let audioElementSource2 = audioContext.createMediaElementSource(audioElement2);
        let source2 = resonanceAudioScene.createSource();
		
		resonanceAudioScene.setListenerPosition(x, y, z);
		resonanceAudioScene
        audioElementSource2.connect(source2.input);
        source2.setPosition(x,y,z);

		
		
		
		//Analyser + mp3 player
		
		
		
		var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
		window.addEventListener("load", initMp3Player, false);
		
		
		
		
		
		function initMp3Player(){
	document.getElementById('audio_box').appendChild(audioElementSource2);
	context = new webkitAudioContext(); // AudioContext object instance
	analyser = context.createAnalyser(); // AnalyserNode method
	canvas = document.getElementById('analyser_render');
	ctx = canvas.getContext('2d');

	// Re-route audio playback into the processing graph of the AudioContext
	source = context.createMediaElementSource(audioElementSource2); 
	source.connect(analyser);
	analyser.connect(context.destination);
	frameLooper();
}
function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = '#00CCFF'; // Color of the bars
	bars = 100;
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3;
		bar_width = 2;
		bar_height = -(fbc_array[i] / 2);
		//  fillRect( x, y, width, height ) // Explanation of the parameters below
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
}