// ?--------------------------------------------
function sum1(a, b) {
  return a + b;
}

let sum2 = (a, b) => a + b;

console.log(sum2(1, 5));

// ?-------------------------------------------

function isPositive1(num) {
  return num > 0;
}

let isPositive2 = (num) => num > 0;

console.log(isPositive2(4));

// ?-------------------------------------------

function randomNumber1() {
  return Math.random;
}

let randomNumber2 = () => Math.round(Math.random() * 100); //! oldugu gibi ifase return edilir.

//! Burada oldugu gibi egerki suslu parantezler arrow fonfsionu icin kullanilirsa icerde islem yapar ama hic bir deger dondurmez
//! bu durumda return anahtar kelimesini kullanmamiz gerekir?
let randomNumber3 = () => {
  return Math.round(Math.random() * 100);
};

console.log(randomNumber2());
console.log(randomNumber3());

// ?-------------------------------------------

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("dblclick", () => console.log("arrow click")); //! burada ifade return edilirken

document.addEventListener("dblclick", () => {
  //! burada islem yapilir ama return edilmez return anahtar kelimesini kullanmamiz gerekir
  console.log("arrow click");
});
