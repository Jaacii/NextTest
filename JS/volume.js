//var volumeslider;
	
	
	
var sliders = document.getElementsByClassName("slider"),
    filter = audioContext.createBiquadFilter();
    

audioElementSource2.connect(filter);
filter.connect(audioContext.destination);

for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mousemove", changeParameter);
}



function changeParameter() {
    switch(this.id) {
        case "volumeslider":
            audioElement2.volume = this.valuevalue / 100;
            document.getElementById("volumeOutput").innerHTML = this.value + " dB";
            break;
        case "gainslider":
            filter.gain.value = this.value;
            document.getElementById("gainOutput").innerHTML = this.value + " dB";
            break;
        case "qualityslider":
            filter.Q.value = this.value;
            document.getElementById("qualityOutput").innerHTML = this.value;
            break;
        
    }
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/*
  var  sliders = document.getElementsByClassName("slider");
  var  filter = audioContext.createBiquadFilter();

	
	audioElementSource2.connect(filter);
	filter.connect(audioContext.destination);

for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mousemove", sliderchange);
}



function sliderchange() {
    switch(this.id) {
        case "volumeslider":
            filter.frequency.value = this.value;
            document.getElementById("volumeOutput").innerHTML = this.value + " dB";
            break;
		case "gainslider":
            filter.gain.value = this.value;
            document.getElementById("gainOutput").innerHTML = this.value + " dB";
            break;
        case "qualityslider":
            filter.Q.value = this.value;
            document.getElementById("qualityOutput").innerHTML = this.value;
            break;
       
        
    }
}
	
	
	*/



	

	

		
		
		
