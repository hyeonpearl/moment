const loginForm = document.querySelector<HTMLFormElement>('#login-form');
const loginInput =
  document.querySelector<HTMLInputElement>('#login-form input');
const greeting = document.querySelector<HTMLHeadingElement>('#greeting');
const mainScreen = document.querySelector<HTMLDivElement>('#main-screen');
const logoutBtn = document?.querySelector<HTMLButtonElement>('#logout-btn');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  if (loginForm !== null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
  }
  if (logoutBtn instanceof HTMLButtonElement) {
    logoutBtn.classList.toggle(HIDDEN_CLASSNAME);
  }
} else {
  paintGreetings(savedUsername);
}

function onLoginSubmit(event: Event) {
  event.preventDefault();
  if (loginForm !== null && loginInput !== null) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    location.reload();
  }
}

function paintGreetings(username: string) {
  if (greeting !== null && loginForm !== null && mainScreen !== null) {
    greeting.innerText = `${username}님, 반가워요.`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    mainScreen.classList.remove(HIDDEN_CLASSNAME);
  }
}

function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  location.reload();
}

if (logoutBtn instanceof HTMLButtonElement) {
  logoutBtn.addEventListener('click', onLogoutSubmit);
}
