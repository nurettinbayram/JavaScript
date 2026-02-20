// Quiz Constructoru olusturma
function Quiz(surular) {
  this.sorular = sorular;
  this.soruIndex = 0;
  this.dogruCevapSayisi = 0;
}

// Quiz methodu olusturma
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

// dogru cevap sayisini arttirma
Quiz.prototype.dogruCevap = function () {
  this.dogruCevapSayisi += 1;
};
