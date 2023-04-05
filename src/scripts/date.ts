const calendar = document.querySelector<HTMLSpanElement>('span#calendar');

function getDays() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const today = date.getDay();
  const day = String(date.getDate()).padStart(2, '0');
  if (calendar instanceof HTMLSpanElement) {
    calendar.innerText = `${month}/${day} (${week[today]})`;
  }
}

getDays();
setInterval(getDays, 1000);
