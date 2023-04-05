interface ToDo {
  text: string;
  id: number;
}

const toDoForm = document.querySelector<HTMLFormElement>('#todo-form');
const toDoInput = toDoForm?.querySelector<HTMLInputElement>('input');
const toDoList = document.querySelector<HTMLUListElement>('#todo-list');

const TODOS_KEY = 'toDos';

let toDos: ToDo[] = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event: MouseEvent) {
  const li = (event.target as HTMLElement).parentElement as HTMLLIElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo: ToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id.toString();
  const span = document.createElement('span');
  span.innerText = newToDo.text;
  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  if (toDoList instanceof HTMLUListElement) {
    toDoList.appendChild(li);
  }
}

function handleToDoSubmit(event: Event) {
  event.preventDefault();
  if (toDoInput instanceof HTMLInputElement) {
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newToDoObj: ToDo = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
  }
}

toDoForm?.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos) as ToDo[];
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
