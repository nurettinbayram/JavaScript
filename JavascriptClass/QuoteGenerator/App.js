const sentences = [
  "Success usually comes to those who are too busy to be looking for it.",
  "The best time to plant a tree was twenty years ago. The second best is now.",
  "Life is short, and it is up to you to make it sweet.",
  "You miss 100% of the shots you don’t take.",
  "The future depends on what you do today.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Do what you can, with what you have, where you are.",
  "Dream big and dare to fail.",
  "Believe you can and you're halfway there.",
  "In the middle of difficulty lies opportunity.",
];

let indx = Math.floor(Math.random() * sentences.length);
const text = document.getElementById("text");

function btnEvent() {
  let sentence = sentences[Math.floor(Math.random() * sentences.length)];
  let beforeInx = indx;

  do {
    indx = Math.floor(Math.random() * sentences.length);
    console.log(beforeInx, indx);
  } while (indx == beforeInx);

  console.log(beforeInx, indx);
  text.innerText = sentence;
}
