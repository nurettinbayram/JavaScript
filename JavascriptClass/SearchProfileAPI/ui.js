class UI {
  constructor() {
    this.taskContainer = document.querySelector("#resultBoxContainer");
    this.alertBox = document.querySelector("#alert");
    this.profile = document.querySelector("#profile");
    this.unCompletedUl = document.querySelector("#unCompleted");
    this.completedUl = document.querySelector("#completed");
  }

  showProfile(data) {
    this.profile.innerHTML = `
        <ul>
            <li><span>Name: </span> ${data.name}</li>
            <li><span>Phone: </span> ${data.phone}</li>
            <li><span>Email: </span> ${data.email}</li>
            <li><span>Address: </span> ${data.address.city}</li>
            <li><span>Campany: </span>${data.company.name}</li>
          </ul>
    `;
  }

  showTodoList(data) {
    if (data.length > 0) {
    }

    data.forEach((task) => {
      if (task.completed) {
        const liCom = `<li><i class="fa-solid fa-circle-check"></i> ${task.title}</li>`;
        this.completedUl.insertAdjacentHTML("beforeend", liCom);
      } else {
        const liUCom = `<li><i class="fa-regular fa-circle-check"></i> ${task.title}</li>`;
        this.unCompletedUl.insertAdjacentHTML("beforeend", liUCom);
      }
    });
  }
}
