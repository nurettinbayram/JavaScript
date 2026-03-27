const container = document.querySelector(".container");

let sec = new Date().getSeconds();
let x = sec * 6;
container.style.transform = `translate(0, -50%) rotate(${x - 90}deg)`;
setInterval(() => {
  x += 6;
  container.style.transform = `translate(0, -50%) rotate(${x - 90}deg)`;
}, 1000);
