const newToDo = document.querySelector(".newToDo");
const toDoTexet = document.querySelector("#inputToDo");
const ToDoList = document.querySelector(".list-group");

let list = [];
newToDo.addEventListener("click", (e) => {
  console.log(toDoTexet);
  e.preventDefault();
  let html;
  html = `
  <li class="list-group-item">
  <div class="task-item">
    <h5 class="toDo__text" >${toDoTexet.value}</h5>
    <div class="icons">
      <span class="task-icon done-icon">✔️</span>
      <span class="task-icon delete-icon">❌</span>
    </div>
  </div>
</li>
    `;
  list.push({
    id: (Date.now() + "").slice(-10),
    data: toDoTexet.value,
    done: toDoTexet.classList.contains("done"),
  });
  setLocalStorage();
  ToDoList.insertAdjacentHTML("afterbegin", html);
});

ToDoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done-icon")) {
    e.target.parentElement.parentElement
      .querySelector(".toDo__text")
      .classList.add("done");
    //   list.find(to=>to.Date==)
  }
  if (e.target.classList.contains("delete-icon")) {
    e.target.parentElement.parentElement.remove();
  }
});

const setLocalStorage = () => {
  localStorage.setItem("toDo", JSON.stringify(list));
};
const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("toDo"));
  if (!data) return;
  list = data;
  list.forEach((toDo) => {
    renderWorkout(toDo);
  });
};
const renderWorkout = (todo) => {
  let html;
  html = `
  <li class="list-group-item">
    <div class="task-item">
      <h5 class="toDo__text ${todo.done ? "done" : ""}">${todo.data}</h5>
      <div class="icons">
        <span class="task-icon done-icon">✔️</span>
        <span class="task-icon delete-icon">❌</span>
      </div>
    </div>
  </li>`;
  ToDoList.insertAdjacentHTML("afterbegin", html);
};
getLocalStorage();

/// try delete from local storage
const deleteToDO = (todo) => {
  let ToDoList = JSON.parse(localStorage.getItem("toDo"));
  ToDoList = ToDoList.filter((to) => to.id != todo.id);
  localStorage.setItem("toDo", JSON.stringify(ToDoList));
  //   document.querySelector(`[data-id="${workOutId}"]`).remove();
};
