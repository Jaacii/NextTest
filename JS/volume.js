//var volumeslider;
	
	
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



	

	
	var sliders = document.getElementsByClassName("slider");
	filter = audioContext.createBiquadFilter();
	source.connect(filter);
	filter.connect(audioContext.destination);
	
	for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("mousemove", sliderchange());
}
	
	

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
			
			
		}
	}
	
		//volumeslider = document.getElementById("volumeslider");		//reagiert plötzlich nicht ?
		//volumeslider.addEventListener("mousemove", setvolume);
		

	
		
		
		
