function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return this.dogruCevap === cevap;
};

//? nesne olusturma(instans)
let sorular = [
  new Soru(
    "1-Hangisi js paket yonetimidir",
    { a: "mvn", b: "Typescript", c: "npm", d: "nuget" },
    "c"
  ),
  new Soru(
    "2-Hangisi python paket yonetimidir",
    { a: "mvn", b: "pipy", c: "npm", d: "nuget" },
    "b"
  ),
  new Soru(
    "3-Hangisi java paket yonetimidir",
    { a: "mvn", b: "Typescript", c: "npm", d: "nuget" },
    "a"
  ),
  new Soru(
    "4-Hangisi .net paket yonetimidir",
    { a: "mvn", b: "nuget", c: "npm", d: "Typescript" },
    "b"
  ),
];
