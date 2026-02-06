const btnStart = document.querySelector(".btn-start");

//! burasi bizim constractor yani sinifimiz
function Soru(soruMetni, cevapSecenekleri, cevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.cevap = cevap;
}

//? bu sisimda ilgili method prototype icerisine eklenmistir
Soru.prototype.cevabiControlEt = function (cevap) {
  return this.cevap === cevap;
};

//? nesne olusturma(instans)
let sorular = [
  new Soru(
    "Hangisi js paket yonetimidir",
    { a: "mvn", b: "Typescript", c: "npm", d: "nuget" },
    "c"
  ),
  new Soru(
    "Hangisi python paket yonetimidir",
    { a: "mvn", b: "pipy", c: "npm", d: "nuget" },
    "b"
  ),
  new Soru(
    "Hangisi java paket yonetimidir",
    { a: "mvn", b: "Typescript", c: "npm", d: "nuget" },
    "a"
  ),
  new Soru(
    "Hangisi .net paket yonetimidir",
    { a: "mvn", b: "nuget", c: "npm", d: "nuget" },
    "b"
  ),
];

//# bu kisimda quiz constractoru olusturduk(sinifi)
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

//# buttona tiklanma eventi ekleme
btnStart.addEventListener("click", function () {
  document.querySelector("#card").classList.add("active");
  let soru = quiz.soruGetir();
  soruGoster(soru);
});

const answerBlock = document.querySelector(".answer-block");
function soruGoster(options) {
  let soru = `<h6><b>1-</b> ${options.soruMetni}</h6>`;
  let secenekler = ``;
  //! burada of keywordu neden kullanilmiyor?
  for (let secenek in options.cevapSecenekleri) {
    secenekler += `
    <div class="answer">
    <span class="soru"><b class="secenek">${secenek}</b> -${options.cevapSecenekleri[secenek]}</span>
    </div>
    `;
  }

  document.querySelector(".question").innerHTML = soru;
  answerBlock.innerHTML = secenekler;

  const secenekList = answerBlock.querySelectorAll(".answer");
  for (let secim of secenekList) {
    secim.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();
  console.log(cevap);
  if (soru.cevabiControlEt(cevap)) {
    option.classList.add("correct");
  } else {
    option.classList.add("incorrect");
  }
  for (let i = 0; i < answerBlock.children.length; i++) {
    answerBlock.children[i].classList.add("disabled");
  }
}

document.querySelector(".getStartBtn").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    quiz.soruIndex += 1;
    let soru = quiz.soruGetir();
    soruGoster(soru);
  } else {
    console.log("Quiz Bitti!!!");
  }
});
