//! my solution

const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
let tasks = [];

addTaskBtn.addEventListener("click", function (e) {
  let task = taskInput.value;
  if (!taskInput.value) {
    alert("Please Type something...");
    return;
  }
  addTask(task);
});

function addTask(task) {
  tasks.push(task);
  renderTask();
}
function renderTask() {
  taskList.innerHTML = "";
  for (let [idx, item] of Object.entries(tasks)) {
    htmlTag(idx, item);
  }
  taskInput.value = "";
  saveLocal();
}

function htmlTag(idx, item) {
  const wrapper = document.createElement("div");
  wrapper.className = "m-1 justify-content-between d-flex p-2 fade-in my-div";
  wrapper.innerHTML = `
    <span class="fs-4 ps-3">${item}</span>
    <button
      id="${idx}"
      class="btn btn-danger"
      onclick="deleteTask(${idx})"
    >
      Delete
    </button>
  `;
  taskList.appendChild(wrapper);
}

function deleteTask(id) {
  tasks.splice(id, 1);
  renderTask();
}

function saveLocal() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}
function getLocal() {
  if (localStorage.getItem("taskList") !== null) {
    tasks = JSON.parse(localStorage.getItem("taskList"));
    renderTask();
  }
}

document.addEventListener("DOMContentLoaded", getLocal);
