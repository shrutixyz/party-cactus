
// console.clear();

// initialized = false;
// var mic, recorder;
// var playerbaamzi;

// // bind the interface
// const recBtn = document.getElementById("start_btn");
// const playBtn = document.getElementById("play_btn");


// recBtn.disabled = !Tone.UserMedia.supported;


// recBtn.addEventListener("click", async () => {
//   Tone.context.resume(); 


//   if (!initialized) {
//     mic = new Tone.UserMedia();
//     recorder = new Tone.Recorder();
//     mic.connect(recorder);
//     mic.open();
//     initialized = true;
//   }

//   if (recBtn.innerText == "Stop"){
//     var data = await recorder.stop();
//     var blobUrl = URL.createObjectURL(data);
//     playerbaamzi = new Tone.Player(blobUrl, () => {
//       playBtn.disabled = false;
//     }).toDestination();
//     recBtn.innerText = "Record";
//   } else {
//     recorder.start();
//     recBtn.innerText = "Stop";
//   }
// });

// // Play / Stop
// playBtn.addEventListener("click", () => {
//   if (playBtn.innerText == "Stop") {
//     playerbaamzi.stop();

//     console.log("14du");
//     playBtn.innerText = "Play";
//     const pitchShift = new Tone.PitchShift(4).toDestination();
//     const filter = new Tone.Filter("G5").toDestination();
//     // connect a node to the pitch shift and filter in parallel
//     playerbaamzi.fan(pitchShift, filter);
//     // window.location.href='/';
//     // playerbaamzi.connect(feedbackDelay);
//   } else {
//     playerbaamzi.start();
//     playBtn.innerText = "Stop";
//   }
// });


// const aakash = document.querySelector(".aakash")
// const froomti = document.querySelector(".froomti")

const player = new Tone.Player({

    url: "https://shrutigupta5555.github.io/party-cactus/sample.mp3",
    autostart: true
    
});
// aakash.addEventListener("click", e => {
//     console.log("click")
    
//     const pitchShift = new Tone.PitchShift(4).toDestination();
//     const filter = new Tone.Filter("G5").toDestination();
//     // connect a node to the pitch shift and filter in parallel
//     player.fan(pitchShift, filter);
//     player.connect(feedbackDelay);



//     /*
//     *********************
//     *********************
//     */


    
// })

var froomti = "hehe";
// froomti.addEventListener("click", e=>{
//     console.log("hehe frooti")

//     const recorder = new Tone.Recorder();
    
// recorder.start();

// setTimeout(async () => {
    
// 	const recording = await recorder.stop();
    
// 	const url = URL.createObjectURL(recording);
// 	const anchor = document.createElement("a");
// 	anchor.download = "recording.mp3";
// 	anchor.href = url;
// 	anchor.click();
// }, 4000);
    
// })



console.clear();

initialized = false;
var mic, recorder;
var playerbaamzi;

// bind the interface
const recBtn = document.getElementById("start_btn");
const playBtn = document.getElementById("play_btn");
const img1 = document.querySelector(".img1");

recBtn.disabled = !Tone.UserMedia.supported;


recBtn.addEventListener("click", async () => {
  Tone.context.resume(); 


  if (!initialized) {
    mic = new Tone.UserMedia();
    recorder = new Tone.Recorder();
    mic.connect(recorder);
    mic.open();
    initialized = true;
  }

  if (recBtn.innerText == "Stop"){
    var data = await recorder.stop();
    var blobUrl = URL.createObjectURL(data);
    playerbaamzi = new Tone.Player(blobUrl, () => {
      playBtn.disabled = false;
    }).toDestination();
    recBtn.innerText = "Record";
  } else {
    recorder.start();
    recBtn.innerText = "Stop";
  }
});

// Play / Stop
playBtn.addEventListener("click", () => {
  if (playBtn.innerText == "Stop") {
    playerbaamzi.stop();

    

    playBtn.innerText = "Play";
    img1.classList.remove("animate")
    // const pitchShift = new Tone.PitchShift(4).toDestination();
    // const filter = new Tone.Filter("G5").toDestination();
    // // connect a node to the pitch shift and filter in parallel
    // playerbaamzi.fan(pitchShift, filter);
    // playerbaamzi.connect(feedbackDelay);
  } else {
    playerbaamzi.start();
    img1.classList.add("animate")
    playBtn.innerText = "Stop";
    const pitchShift = new Tone.PitchShift(4).toDestination();
    const filter = new Tone.Filter("G5").toDestination();
    // connect a node to the pitch shift and filter in parallel
    playerbaamzi.fan(pitchShift, filter);
  }
});
