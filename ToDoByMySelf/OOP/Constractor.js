//! burasi bizim constractor yani sinifimiz
function Soru(soruMetni, cevapSecenekleri, cevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.cevap = cevap;
  this.cevabiControlEt = function (cevap) {
    return this.cevap === cevap;
  };
}

//? nesne olusturma(instans)
let soruA = new Soru(
  "Hangisi js paket yonetimidir",
  { a: "mvn", b: "Typescript", c: "npm" },
  "c"
);
let soruB = new Soru(
  "Hangisi python paket yonetimidir",
  { a: "mvn", b: "pipy", c: "npm" },
  "b"
);

//# objeleri cagirma
console.log(soruA.soruMetni);
console.log(soruA.cevapSecenekleri);
console.log(soruA.cevabiControlEt("c"));

console.log(soruB.soruMetni);
console.log(soruB.cevapSecenekleri);
console.log(soruB.cevabiControlEt("c"));
