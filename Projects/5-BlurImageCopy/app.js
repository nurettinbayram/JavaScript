//?https://github.com/bradtraversy/50projects50days

const image = document.querySelector(".container");
const text = document.querySelector(".text");

let count = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  count++;

  if (count > 99) {
    clearInterval(interval);
  }
  text.innerHTML = `${count}%`;
  text.style.opacity = scale(count, 0, 100, 1, 0);

  image.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`;
}

// Source - https://stackoverflow.com/a/23202637
// Posted by August Miller, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-09, License - CC BY-SA 4.0

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
