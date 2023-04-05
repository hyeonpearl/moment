const loginForm = document.querySelector<HTMLFormElement>('#login-form');
const loginInput =
  document.querySelector<HTMLInputElement>('#login-form input');
const greeting = document.querySelector<HTMLSpanElement>('#greeting');
const mainScreen = document.querySelector<HTMLElement>('#main-screen');
const logoutBtn = document?.querySelector<HTMLButtonElement>('#logout-btn');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event: Event) {
  event.preventDefault();
  if (
    loginForm instanceof HTMLFormElement &&
    loginInput instanceof HTMLInputElement
  ) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    location.reload();
  }
}

function paintGreetings(username: string) {
  if (
    greeting instanceof HTMLSpanElement &&
    loginForm instanceof HTMLFormElement &&
    mainScreen instanceof HTMLElement
  ) {
    greeting.innerText = `${username}님, 반가워요.`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainScreen.classList.remove(HIDDEN_CLASSNAME);
  }
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
}
if (logoutBtn instanceof HTMLElement) {
  logoutBtn.addEventListener('click', onLogoutSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  if (loginForm instanceof HTMLFormElement) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
  }
  if (logoutBtn instanceof HTMLButtonElement) {
    logoutBtn.classList.toggle(HIDDEN_CLASSNAME);
  }
} else {
  paintGreetings(savedUsername);
}
