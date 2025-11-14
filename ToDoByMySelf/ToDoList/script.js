var taskList = [
  // {
  //   id: "1",
  //   name: "Ali",
  //   lastName: "Kaya",
  //   email: "ali@gamil.com",
  //   phoneNum: "4527853145",
  // },
  // {
  //   id: "2",
  //   name: "Can",
  //   lastName: "Bayram",
  //   email: "can@gamil.com",
  //   phoneNum: "4543583545",
  // },
  // {
  //   id: "3",
  //   name: "Kenan",
  //   lastName: "Ciftci",
  //   email: "kenan@gamil.com",
  //   phoneNum: "4543583545",
  // },
];

if (localStorage.getItem("taskList") !== null) {
  taskList = JSON.parse(localStorage.getItem("taskList"));
} else {
  console.log("Local Bos...");
}

let editId; //edit islemleri icin kullanilacak
let isEditMod = false;
let ul = document.getElementById("ulId");

function printList() {
  ul.innerHTML = "";
  let i = 1;

  if (taskList.length == 0) {
    ul.innerHTML =
      "<p class='bg-danger p-2 d-flex justify-content-center shadow-lg rounded-3'>Gorev Listeniz Bos!</p>";
  } else {
    taskList.forEach((task) => {
      let li = `
        <h5 class="mt-3">📌 ${i++}. Members 
        <button  class="btn green text-white btn-sm float-end me-3" 
        onclick="editTask('${task.id}')">
        <i class="bi bi-pencil-fill"></i></button>
        
        <button  class="btn btn-danger btn-sm float-end me-2" 
        onclick="deleteTask('${task.id}')"><i class="bi bi-trash"></i></button>
        </h5>
        <li class="nokta me-3 mt-2 shadow-lg ">
            <div class="row my-1 px-2 align-items-center">
            <label  class=""><span id="tikName">✅</span>${task.name}</label>
            </div>
        </li>
        <li class="nokta me-3 shadow-lg">
            <div class="row my-1 px-2 align-items-center">
            <label  class=""><span id="tikLastName">✅</span>${
              task.lastName
            }</label>
            </div>
        </li>
        <li class="nokta me-3 shadow-lg">
            <div class="row my-1 px-2 align-items-center">
            <label  class=""><span id="tikEmail">✅</span>${task.email}</label>
            </div>
        </li>
        <li class="nokta me-3 shadow-lg">
            <div class="row my-1 px-2 align-items-center">
            <label  class=""><span id="tikPhoneNum">✅</span>${
              task.phoneNum
            }</label>
            </div>
        </li> `;
      ul.insertAdjacentHTML("beforeend", li);
    });
  }

  let liOfUl = ul.querySelectorAll("li");
  liOfUl.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      li.classList.add("opacity-75", "text-danger");
    });
    li.addEventListener("click", function () {
      if (this.children[0].children[0].children[0].innerHTML == "✅") {
        this.children[0].children[0].children[0].innerHTML = "❌";
        this.style.backgroundColor = "#baa035";
      } else {
        this.children[0].children[0].children[0].innerHTML = "✅";
        this.style.backgroundColor = "";
      }
    });

    li.addEventListener("mouseleave", () => {
      li.classList.remove("opacity-75", "text-danger");
    });
  });
}
printList();

function addList() {
  console.log("edid mod ", isEditMod);
  console.log("edit ID ", editId);
  let id = Math.random().toString(36).substring(2, 9); //36 karakter sayisini belirler
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNum = document.getElementById("phoneNum").value;
  if (name != "" && lastName != "" && phoneNum != "" && email != "") {
    if (!isEditMod) {
      taskList.push({
        id: id,
        name: name,
        lastName: lastName,
        email: email,
        phoneNum: phoneNum,
      });
    } else {
      let task = taskList.find((t) => t.id === editId);
      if (task) {
        task.name = name;
        task.lastName = lastName;
        task.email = email;
        task.phoneNum = phoneNum;
        isEditMod = false;
      }
    }
    localStorage.setItem("taskList", JSON.stringify(taskList));

    printList();
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNum").value = "";
  }
}

const btnAddTask = document.querySelector("#btnAddTask");
btnAddTask.addEventListener("click", addList);

const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearList);

function clearList() {
  //taskList = [];
  taskList.splice(0, taskList.length);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  printList();
}

function deleteTask(id) {
  console.log("silinen eleman id =", id);
  let deleteId;
  for (let index in taskList) {
    if (taskList[index].id === id) {
      deleteId = index;
    }
  }
  taskList.splice(deleteId, 1);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  printList();
}

function editTask(id) {
  console.log("duzenlenecek elemanin id =", id);
  let task = taskList.find((t) => t.id === id);
  isEditMod = true;
  editId = task.id;

  document.getElementById("name").value = task.name;
  document.getElementById("lastName").value = task.lastName;
  document.getElementById("email").value = task.email;
  document.getElementById("phoneNum").value = task.phoneNum;
  document.getElementById("name").focus();
  console.log("edid mod ", isEditMod);
  console.log("edit ID ", editId);
}
