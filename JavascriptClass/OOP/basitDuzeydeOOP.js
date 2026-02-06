//! basit duzeyde OOP'nin mantigi
let soru1 = {
  soruMetni: "Hangisi js paket yonetim uygulamasidir?",
  cevapSecenekleri: {
    a: "Node.js",
    b: "Typescript",
    c: "npm",
  },
  dogruCevap: "c",
  cevabiControlEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};
let soru2 = {
  soruMetni: "Hangisi python paket yonetim uygulamasidir?",
  cevapSecenekleri: {
    a: "Node.js",
    b: "pipy",
    c: "npm",
  },
  dogruCevap: "b",
  cevabiControlEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};
let soru3 = {
  soruMetni: "Hangisi java paket yonetim uygulamasidir?",
  cevapSecenekleri: {
    a: "mvn",
    b: "Typescript",
    c: "npm",
  },
  dogruCevap: "a",
  cevabiControlEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};

console.log(soru1.soruMetni);
console.log(soru1.cevapSecenekleri);
console.log(soru1.cevabiControlEt("a"));

console.log(soru2.soruMetni);
console.log(soru2.cevapSecenekleri);
console.log(soru2.cevabiControlEt("a"));

console.log(soru3.soruMetni);
console.log(soru3.cevapSecenekleri);
console.log(soru3.cevabiControlEt("a"));
