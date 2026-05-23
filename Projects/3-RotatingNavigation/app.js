//?https://github.com/bradtraversy/50projects50days

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const container = document.querySelector(".container");
const btnIcon = document.querySelector(".btn-icon");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  container.classList.add("rotate");
  btnIcon.classList.add("active");
  menu.classList.add("menu-index");
});

closeBtn.addEventListener("click", function () {
  container.classList.remove("rotate");
  btnIcon.classList.remove("active");
  menu.classList.remove("menu-index");
});
