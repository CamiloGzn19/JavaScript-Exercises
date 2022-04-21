function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop the function from runnning all together
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing"); // Add the animation to the key
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip it if it's not a transform
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
