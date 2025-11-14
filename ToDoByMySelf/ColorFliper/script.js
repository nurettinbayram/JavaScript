const container = document.querySelector(".container");
const p = document.querySelector(".rgb");

//container.style.backgroundColor = "rgb(48, 107, 96)";
//container.style.backgroundColor = "rgb(134, 129, 198)";
container.style.backgroundColor = "rgb(82, 197, 153)";

function setColor(name) {
  container.style.backgroundColor = name;
  p.innerHTML = name;
}

function randomFunc() {
  let color = randomColor();
  container.style.backgroundColor = color;
  console.log(color);
  p.innerHTML = color;
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
