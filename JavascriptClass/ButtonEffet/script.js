const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function (e) {
  console.log(e.pageX - btn.offsetTop);
  console.log(e.pageY - btn.offsetLeft);

  y = e.pageY - btn.offsetTop;
  x = e.pageX - btn.offsetLeft;

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");
});
