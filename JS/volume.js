//var volumeslider;
	
	
	
	/*
	
	
	
    sliders = document.getElementsByClassName("slider"),
    playStopButton = document.getElementById("playStopButton"),
    selectList =document.getElementById("selectList"),
    isPlaying = false,
    sound = new Audio("../sounds/sound.wav"),
    source = audioContext.createMediaElementSource(sound),
    filter = audioContext.createBiquadFilter();
    
sound.loop = true;
source.connect(filter);
filter.connect(audioContext.destination);

for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mousemove", changeParameter);
}

selectList.addEventListener("change", function() {
    filter.type = selectList.options[selectList.selectedIndex].value;
});

function changeParameter() {
    switch(this.id) {
        case "frequencySlider":
            filter.frequency.value = this.value;
            document.getElementById("frequencyOutput").innerHTML = this.value + " Hz";
            break;
        case "detuneSlider":
            filter.detune.value = this.value;
            document.getElementById("detuneOutput").innerHTML = this.value + " Cents";
            break;
        case "qSlider":
            filter.Q.value = this.value;
            document.getElementById("qOutput").innerHTML = this.value;
            break;
        case "gainSlider":
            filter.gain.value = this.value;
            document.getElementById("gainOutput").innerHTML = this.value + " dB";
            break;
    }
}
	
	
	*/
	
	
	
	var sliders = document.getElementsByClassName("slider");
	filter = audioContext.createBiquadFilter();
	source.connect(filter);
	filter.connect(audioContext.destination);
	
	for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mousemove", sliderchange());
}
	
	var distortion = audioContext.createWaveShaper();
	source.connect(distortion);
	distortion.connect(audioContext.destination);

	distortion.curve = makeDistortionCurve(0);
	distortion.oversample = "4x";

	function sliderchange (id) {
		
		switch(id) {
			case "volumeslider":
			var volumeslider = document.getElementById("volumeslider");
			audioElement2.volume = volumeslider.value / 100;
			document.getElementById("volumeOutput").innerHTML = this.value + " Volume";
			break;
			case "gainslider":
			filter.gain.value = this.value;
			document.getElementById("gainOutput").innerHTML = this.value + " dB";
			break;
			case "qualityslider":
			filter.Q.value = this.value;
			 document.getElementById("qualityOutput").innerHTML = this.value;
			break;
			case "distortionslider":
			document.getElementById("distortionOutput").innerHTML = this.value;
			break;
			
		}
	}
	
		//volumeslider = document.getElementById("volumeslider");		//reagiert plötzlich nicht ?
		//volumeslider.addEventListener("mousemove", setvolume);
		

	

function makeDistortionCurve(amount) {    
    var n_samples = 44100,
        curve = new Float32Array(n_samples);
    
    for (var i = 0; i < n_samples; ++i ) {
        var x = i * 2 / n_samples - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + (amount * Math.abs(x)));
    }
    
    return curve;
};

	
		
		
		
