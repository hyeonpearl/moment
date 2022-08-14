const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');

const myAudio = new Audio('../src/SorryILikeYou.mp3');
myAudio.loop = true;

function playMusic() {
  myAudio.play();
  playBtn.classList.add(HIDDEN_CLASSNAME);
  pauseBtn.classList.remove(HIDDEN_CLASSNAME);
}
function pauseMusic() {
  myAudio.pause();
  playBtn.classList.remove(HIDDEN_CLASSNAME);
  pauseBtn.classList.add(HIDDEN_CLASSNAME);
}

playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);
