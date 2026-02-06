//&
//*
//?
//#
//!

const quiz = new Quiz(sorular); //! sorular arrayini alir ve index numarasina gore soru dondurur
const ui = new UI();

//# bu bolumde bir sonraki soruya gecme islemini button ile iliskilendirildi
//# element uzerinde tanimlanan fonksiyondan geliyor
function nextQuestion() {
  clearInterval(intervalLine);
  clearInterval(intervalSecond);

  if (quiz.sorular.length > quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    showQuestions(quiz.soruGetir());
    // secenekler = options.querySelectorAll(".option"); //* gereksiz olabilir
    ui.nextBtn.classList.add("disabled");
    soruSayisiGoster(quiz, sorular);
    getLine(0);
    getSecond(10);
  } else {
    ui.questions.innerHTML = "Quiz Bitti...";
    ui.options.innerHTML = "";
    ui.getStartBtn.style.display = "none";
    ui.soruCard.classList.add("disabled");
    ui.soruCard.classList.remove("active");
    ui.soruCardEnd.classList.add("active");
    ui.soruCardEnd.classList.remove("disabled");
    showResults();
  }
}

//# element uzerinde tanimlanan fonksiyondan geliyor
function getStart() {
  document.getElementById("card").classList.add("active");
  showQuestions(quiz.soruGetir());
  soruSayisiGoster(quiz, sorular);

  ui.secenekler = ui.options.querySelectorAll(".option");

  // # call intervall
  getLine(10);
  getSecond(10);
}

//# soruyu ekrana dinamik olarak yansit
function showQuestions(soru) {
  let question = `${soru.soruMetni}`;
  ui.questions.innerHTML = question;

  let answers = "";
  for (let option in soru.cevapSecenekleri) {
    //# cevap secenekleri objesi uzerinde dolasir
    answers += `<div class="option" onclick="optionClickEvent(this)">
          <p class="text"><b>${option}</b> : ${soru.cevapSecenekleri[option]}</p>
        </div>`;
  }
  ui.options.innerHTML = answers;
}

function optionClickEvent(element) {
  let isaretlenenSecenek = element.children[0].children[0].textContent; //! tiklanan elementin secenek degerine erisim
  let dogruSecenek = quiz.soruGetir().dogruCevap; //! burayi cok iyi kavra quiz soruGetir methodu uzerinden Soru propertisine erisildi.
  console.log("Isaretlenen cevap : " + isaretlenenSecenek);
  console.log("Dogru cevap : " + dogruSecenek);

  //# next buttonunu aktif etme
  ui.nextBtn.classList.remove("disabled");

  //# bu kisimda herhangi bir secenek tiklanirsa sure durdurulur
  clearInterval(intervalLine);
  clearInterval(intervalSecond);

  //# icon ekleme
  const correctIcon = `<p class="icon"><i class="fas fa-check"></i></p>`;
  const incorrectIcon = `<p class="icon"><i class="fas fa-times"></i></p>`;

  if (quiz.soruGetir().cevabiKontrolEt(isaretlenenSecenek)) {
    element.classList.add("correct");
    element.insertAdjacentHTML("beforeEnd", correctIcon);
    quiz.dogruCevap();
    console.log("Dogru Cevap Saysi : " + quiz.dogruCevapSayisi);
  } else {
    element.classList.add("incorrect");
    element.insertAdjacentHTML("beforeEnd", incorrectIcon);
    console.log("Dogru Cevap Saysi : " + quiz.dogruCevapSayisi);
  }

  ui.secenekler = ui.options.querySelectorAll(".option");
  ui.secenekler.forEach(function (i) {
    i.classList.add("pointerEventNone");
  });
}

function soruSayisiGoster(quiz, sorular) {
  ui.soruSayisi.innerHTML = `${quiz.soruIndex + 1} / ${sorular.length}`;
}

function showResults() {
  ui.dogruSoruSayisi.textContent = quiz.dogruCevapSayisi;
  ui.toplamSoruSayisi.textContent = sorular.length;
}

function testiBitir() {
  window.location.reload();
}

function testiYenile() {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  getStart();
  ui.soruCardEnd.classList.remove("active");
  ui.soruCard.classList.remove("disabled");
  ui.soruCardEnd.classList.add("disabled");
  ui.nextBtn.classList.add("disabled");
}

//? uzunluk degiskenine dinamik olarak alt border uzunlugu atayarak sayfanin uzunlugu goz onunde bulundusun diye
let uzunluk = ui.header.offsetWidth;
let intervalLine;

//# line bar
function getLine(l) {
  intervalLine = setInterval(function () {
    l += 1;
    ui.timeLine.style.width = l + "px";
    if (l > uzunluk - 1) {
      clearInterval(intervalLine);
    }
  }, 20);
}

let intervalSecond;
function getSecond(t) {
  intervalSecond = setInterval(function () {
    ui.timeSecond.textContent = t;
    t--;
    if (t < 0) {
      clearInterval(intervalSecond);
      //? burada ui.secenekler icini guncellememiz gerekiyorki yeni gelen sorunun bilgileri ile dolmus olsun.
      ui.secenekler = options.querySelectorAll(".option");
      for (let element of ui.secenekler) {
        //# burada element altindaki <p> altindaki <b> etiketine ulasiyoruz
        let options = element.querySelector("p b").textContent;
        let dogruC = quiz.soruGetir().dogruCevap;

        element.classList.add("pointerEventNone");

        if (options == dogruC) {
          const correctIcon = `<p class="icon"><i class="fas fa-check"></i></p>`;
          element.classList.add("correct");
          element.insertAdjacentHTML("beforeEnd", correctIcon);

          //# next buttonunu aktif etme
          ui.nextBtn.classList.remove("disabled");
        }
      }
    }
  }, 1000);
}
