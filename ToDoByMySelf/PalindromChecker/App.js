const input = document.getElementById("input");

function btnEvent() {
  var inputValue = input.value;

  if (reverseInput(inputValue) == inputValue) {
    alert(`${inputValue} is Polinrome`);
  } else {
    alert(`${inputValue} is NOT Polinrome`);
  }

  input.value = "";
}

function reverseInput(inputR) {
  let arr = inputR.split("");
  let newArr = [];

  for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i]);
  }
  return newArr.join("");
}

//! method ile tersine cevirme.
/*
function reverseMethod(inputR) {
  console.log("join -> " + inputR.split("").reverse().join(""));
}

console.log(reverseMethod("canada"));
*/
