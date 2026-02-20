import words from "./words_1000_2000.json";

function getIndex() {
  return Math.floor(Math.random() * words.length);
}

for (let i = 0; i < 10; i++) {
  const index = getIndex();
  let trWord = prompt(`${words[index].en} Enter Turkish meining?`);

  if (
    trWord &&
    words[index].tr.toLowerCase().trim() === trWord.toLowerCase().trim()
  ) {
    alert("great");
  } else {
    alert("it is not correct!!!");
  }

  console.log(words[index].tr);
  console.log(trWord);
}
