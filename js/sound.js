
const aakash = document.querySelector(".aakash")

const player = new Tone.Player({

    url: "https://shrutigupta5555.github.io/party-cactus/sample.mp3",
    autostart: true
    
});
aakash.addEventListener("click", e => {
    console.log("click")
    
    const pitchShift = new Tone.PitchShift(4).toDestination();
const filter = new Tone.Filter("G5").toDestination();
// connect a node to the pitch shift and filter in parallel
player.fan(pitchShift, filter);
    // player.connect(feedbackDelay);
})

