// Define available sounds (filenames inside /sounds folder)
const sounds = ["applause", "boo", "gasp", "tada","victory","wrong"];

// Container for buttons
const buttonsDiv = document.getElementById("buttons");
const stopBtn = document.getElementById("stopBtn");

// Keep track of currently playing sounds
let currentAudios = [];

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
	btn.classList.add("btn");
  btn.innerText = sound.toUpperCase();
  btn.addEventListener("click", () => playSound(sound));
  buttonsDiv.appendChild(btn);
});

// Play a sound
function playSound(name) {
  stopAllSounds(); // stop any existing sounds
  const audio = new Audio(`sounds/${name}.wav`);
  audio.play();
  currentAudios.push(audio);
}

// Stop all currently playing sounds
function stopAllSounds() {
  currentAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  currentAudios = [];
}

// Stop button event
stopBtn.addEventListener("click", stopAllSounds);
