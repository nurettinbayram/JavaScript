const submitBtn = document.querySelector("button");
const p = document.querySelector("p");
const score = document.getElementById("score");

point = 0;

var result = randomNum();

submitBtn.addEventListener("click", text);

document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    text();
  }
});

function text() {
  const input = document.querySelector("input");

  if (input.value === "") return;

  console.log("result", result);
  console.log("input", parseInt(input.value));

  if (parseInt(input.value) == result) {
    console.log("basarili");

    score.innerText = `Score : ${++point}`;
  } else {
    console.log("basarisiz...");
    score.innerText = `Score : ${--point}`;
  }
  result = randomNum();
  input.value = "";
}

function randomNum() {
  let num1 = Math.round(Math.random() * 10);
  let num2 = Math.round(Math.random() * 10);
  p.innerHTML = `What is <span class="num">${num1}</span> multiyply by <span class="num">${num2}</span>?`;
  return parseInt(num1 * num2);
}
