//&
//*
//?
//#
//!
//!-------------------------------UI--------------------------------------------------------------
class UI {
  constructor() {
    this.titleOfCourse = document.querySelector("#coursTitle");
    this.instructorOfCourse = document.getElementById("instructor");
    this.imgOfCourse = document.querySelector("#image");
    this.tableElement = document.getElementById("table");
    this.msg = document.getElementById("msg");
  }

  addToTable(course) {
    const trTag = `
        <tr>
            <td><img src="./img/${course.img}.jpg" alt="" /></td>
            <td>${course.courseTitle}</td>
            <td>${course.instructor}</td>
            <td><button type="button" class="delete" id="${course.id}">Delete</button></td>
        </tr>
  `;

    document.getElementById("table").innerHTML += trTag;
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      //# delete butonuna tiklandiginda tum satir silinsin diye bir ust elementlere gecis yapilir
      element.parentElement.parentElement.parentElement.remove();
    }
  }

  clearInputs() {
    this.imgOfCourse.value = "";
    this.titleOfCourse.value = "";
    this.instructorOfCourse.value = "";
  }

  //? bilgilendirme ve error mesajlarini ekrana yazdir
  msgInfo(message, info) {
    this.msg.classList.add(message);
    this.msg.innerHTML = `<h4>${info}</h4>`;

    //!mesaj gorundukten sonra silinir
    setTimeout(() => {
      this.msg.classList.remove(message);
    }, 2000);
  }
}

//! ------------------------------LocalStorage-------------------------------------------------------------

class Storge {
  static getCourses() {
    let listOfCourse;
    if (localStorage.getItem("listOfCourse") === null) {
      listOfCourse = [];
    } else {
      listOfCourse = JSON.parse(localStorage.getItem("listOfCourse"));
    }
    return listOfCourse;
  }

  static displayCourses() {
    for (let obj of Storge.getCourses()) {
      let ui = new UI();
      ui.addToTable(obj);
    }
  }

  static setCourses(obj) {
    const courses = Storge.getCourses();
    courses.push(obj);
    localStorage.setItem("listOfCourse", JSON.stringify(courses));
  }

  static deleteCourse(id) {
    const courses = Storge.getCourses();
    /*
    courses.forEach((course, index) => {
      if (course.id == id) {
        courses.splice(index, 1);
      }
    });
    */
    //! yukarida forEach ile yapilani burada tek satirla yapmak mumkun
    let newList = courses.filter((cors) => cors.id != id);

    localStorage.setItem("listOfCourse", JSON.stringify(newList));
  }
}

//! ----------------------------------Course---------------------------------------------------------
class Courses {
  constructor(img, courseTitle, instructor) {
    this.img = img;
    this.courseTitle = courseTitle;
    this.instructor = instructor;
    this.id = Math.floor(Math.random() * 10000);
  }
}

//!-----------------------------------Logic----------------------------------------------------------

document.addEventListener("DOMContentLoaded", Storge.displayCourses());

document.getElementById("btnSave").addEventListener("click", function (e) {
  const ui = new UI();
  if (
    ui.imgOfCourse.value != "" &&
    ui.instructorOfCourse.value != "" &&
    ui.titleOfCourse.value != ""
  ) {
    const course = new Courses(
      ui.imgOfCourse.value,
      ui.titleOfCourse.value,
      ui.instructorOfCourse.value
    );

    ui.addToTable(course);
    ui.clearInputs();
    ui.msgInfo("msg-success", "Course successfuly added!");
    Storge.setCourses(course);
  } else {
    ui.msgInfo("msg-fail", "Don't miss any input!!!");
  }

  e.preventDefault();
});

//!---------------------------------------------------------------------------------------------

document.getElementById("table").addEventListener("click", function (e) {
  const ui = new UI();
  let element = e.target;
  let id = element.getAttribute("id");
  ui.deleteCourse(element);
  Storge.deleteCourse(id);

  let parentElement =
    element.parentElement.parentElement.querySelector(
      "td:nth-of-type(2)"
    ).textContent;

  ui.msgInfo("msg-warning", `${parentElement} has been deleted!`);
});
