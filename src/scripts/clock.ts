const clock = document.querySelector<HTMLSpanElement>('span#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  if (clock instanceof HTMLSpanElement) {
    clock.innerText = `${hours}:${minutes}`;
  }
}

getClock();
setInterval(getClock, 1000);
