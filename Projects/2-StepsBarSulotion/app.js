//?https://github.com/bradtraversy/50projects50days

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progresBar = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateBar();
});

prevBtn.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateBar();
});

function updateBar() {
  //!-------BU BLOCK COK ONEMLI BIR DAHA GOZ GEZDIR.------
  //&----Circles events----
  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //&----Button active events---
  if (currentActive == 1) {
    prevBtn.disabled = true;
  } else if (currentActive == circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }

  //&----Progrese bar events---
  const actives = document.querySelectorAll(".active");

  let percent = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  progresBar.style.width = percent;
}
