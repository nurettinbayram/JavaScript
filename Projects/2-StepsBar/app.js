//?https://github.com/bradtraversy/50projects50days

const preBtn = document.getElementById("pre");
const nextBtn = document.getElementById("next");
const items = document.querySelectorAll(".item");
const pips = document.querySelectorAll(".sub-pip");

var indexNum = 0;

nextBtn.addEventListener("click", function () {
  if (indexNum < 3) {
    indexNum += 1;
    items[indexNum].classList.add("prossed");
    pips[indexNum - 1].classList.add("sub-prossed");
  }
  btnStyle();
});

function btnStyle() {
  if (indexNum === 0) {
    preBtn.disabled = true;
  } else if (indexNum >= items.length - 1) {
    nextBtn.disabled = true;
  } else {
    preBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

btnStyle();

preBtn.addEventListener("click", function () {
  if (indexNum > 0) {
    items[indexNum].classList.remove("prossed");
    pips[indexNum - 1].classList.remove("sub-prossed");
    indexNum -= 1;
  }
  btnStyle();
});
