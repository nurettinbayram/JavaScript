//?https://github.com/bradtraversy/50projects50days

const searchBtn = document.getElementById("searchBtn");
const inputBox = document.getElementById("searchInput");
const container = document.querySelector(".container");

searchBtn.addEventListener("click", () => {
  ///toggle method check if the element has the class it removes that class,
  ///if the element does not have the class it adds
  container.classList.toggle("active");
  inputBox.focus();
});
