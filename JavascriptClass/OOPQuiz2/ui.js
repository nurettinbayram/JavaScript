function UI() {
  this.questions = document.querySelector(".question");
  this.options = document.querySelector("#options");
  this.getStartBtn = document.querySelector(".getStartBtn");
  this.nextBtn = document.getElementById("nextBtn");
  this.secenekler = options.querySelectorAll(".option");
  this.soruSayisi = document.querySelector(".next .progres");
  this.soruCard = document.getElementById("card");
  this.soruCardEnd = document.getElementById("cardEnd");
  // bu yontemi goz onun de bulunsun
  this.dogruSoruSayisi = document.querySelector(
    "#dogruCevapSayisi span:last-child"
  );
  this.toplamSoruSayisi = document.querySelector(
    "#toplamSoruSatisi span:last-child"
  );

  this.header = document.querySelector(".card-header");
  this.timeSecond = document.querySelector(".time-second");
  this.timeLine = document.querySelector(".timeLine");
}
