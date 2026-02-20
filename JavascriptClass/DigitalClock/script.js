const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function getTime() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  hour.innerText = h < 10 ? "0" + h : h;
  min.innerText = m < 10 ? "0" + m : m;
  sec.innerText = s < 10 ? "0" + s : s;

  setTimeout(getTime, 1000);
}

getTime();
