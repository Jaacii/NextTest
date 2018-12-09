var context = new AudioContext(),
    sliders = document.getElementsByClassName("slider"),
    playStopButton = document.getElementById("playStopButton"),
    selectList =document.getElementById("selectList"),
    isPlaying = false,
    sound = new Audio("song.wav"),
    source = context.createMediaElementSource(sound),
    filter = context.createBiquadFilter();
    
sound.loop = true;
source.connect(filter);
filter.connect(context.destination);

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

playStopButton.addEventListener("click", function () {
    if (isPlaying) {
        sound.pause();
        playStopButton.innerHTML = "Play";
    } else {
        sound.play();
        playStopButton.innerHTML = "Stop";
    }

    isPlaying = !isPlaying;
});

sound.addEventListener("ended", function () {
    isPlaying = false;
    playStopButton.innerHTML = "Play";
});