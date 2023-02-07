const newToDo = document.querySelector(".newToDo");
const toDoTexet = document.querySelector("#inputToDo");
const ToDoList = document.querySelector(".list-group");
class Task {
  constructor(id, content, isDone) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
}
class App {
  #list = [];
  constructor() {
    newToDo.addEventListener("click", this._newTask.bind(this));
    ToDoList.addEventListener("click", this._taskState.bind(this));
    this._getLocalStorage();
  }
  _renderTask(todo) {
    let html;
    html = `
    <li class="list-group-item task mt-3" data-id=${todo.id}>
      <div class="task-item">
        <h5 class="toDo__text ${todo.isDone ? "done" : ""}">${todo.content}</h5>
        <div class="icons">
          <span class="task-icon done-icon">✔️</span>
          <span class="task-icon delete-icon">❌</span>
        </div>
      </div>
    </li>`;
    ToDoList.insertAdjacentHTML("afterbegin", html);
  }
  _newTask(e) {
    e.preventDefault();
    let task = new Task(
      (Date.now() + "").slice(-10),
      toDoTexet.value,
      toDoTexet.classList.contains("done")
    );
    this.#list.push(task);
    this._renderTask(task);
    this._setLocalStorage();
  }
  _taskState(e) {
    let list = [];
    let ele = e.target.parentElement.parentElement;
    if (e.target.classList.contains("done-icon")) {
      ele.querySelector(".toDo__text").classList.add("done");
      list = JSON.parse(localStorage.getItem("toDo"));
      let doneTask = this.#list.findIndex(
        (l) =>
          l.id === e.target.parentElement.parentElement.parentElement.dataset.id
      );
      list[doneTask].isDone = true;
      this.#list = list;
      this._setLocalStorage();
    }
    if (e.target.classList.contains("delete-icon")) {
      ele.classList.add("delete");
      this._deleteTask(e);
    }
  }
  _setLocalStorage = () => {
    localStorage.setItem("toDo", JSON.stringify(this.#list));
  };
  _getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("toDo"));
    if (!data) return;
    this.#list = data;
    this.#list.forEach((task) => {
      this._renderTask(task);
    });
  };
  _deleteTask(e) {
    const taskId =
      e.target.parentElement.parentElement.parentElement.dataset.id;
    this.#list = this.#list.filter((t) => t.id != taskId);
    this._setLocalStorage();
    setTimeout(
      () => document.querySelector(`[data-id="${taskId}"]`).remove(),
      800
    );

    // location.reload();
  }
}
const app = new App();
