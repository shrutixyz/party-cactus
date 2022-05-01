

const player = new Tone.Player({
	url: "https://cdn.discordapp.com/attachments/873911460055642152/970242747460104232/Kanye_Gave_Kim_1000000_TubeRipper.com.mp3",
	autostart: true,
});
const filter = new Tone.Filter(400, 'lowpass').toDestination();
const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

// connect the player to the feedback delay and filter in parallel
player.connect(filter);
player.connect(feedbackDelay);