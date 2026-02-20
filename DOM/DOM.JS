//! ------------------TEKLI ELEMENT ISLEMLERI------------------

//!"use strict";

let sonuc;

sonuc = document.getElementById("title");
console.log(sonuc);
sonuc = document.getElementById("title").className;
console.log(sonuc);
sonuc = document.getElementById("title").classList;
console.log(sonuc);
sonuc = document.getElementById("title").id;
console.log(sonuc);
document.getElementById("title").style.fontSize = "30px";
document.getElementById("title").style.color = "blue";
// document.getElementById("title").style.display="none";//elementi sayfadan kaldirir

document.getElementById("title").innerText = "TODO APP"; //? burada html etiketlerini kullanamayiz cunku inner text bunu html olarak yorumlayamaz
document.getElementById("title").innerText = "<p>TODO APP</p>";
document.getElementById("title").innerHTML = "<p>TODO APP</p>"; //? icerigin etiketini yani tagini ve yaziyi degistirmek istersek innerHTML kullanmamiz lazim cunku Taglari yorum satir html olarak yorumlar.

sonuc = document.querySelector("#title"); //? id'si title olan ilk tagi getir
console.log(sonuc);
sonuc = document.querySelector(".card-header"); //? clasi card-header olan ilk tagi getirir
console.log(sonuc);
sonuc = document.querySelector("h3"); //? ilk h3 etiketini getirir
console.log(sonuc);

sonuc = document.querySelector("li"); //? ilk li etiketini getirir
console.log(sonuc);
sonuc = document.querySelector("li:first-child"); //?
console.log(sonuc);
sonuc = document.querySelector("li:last-child"); //?
console.log(sonuc);
sonuc = document.querySelector("li:nth-child(2)"); //? burada 2 siradaki li gelir
console.log(sonuc);

//! ------------------COKLU ELEMENT ISLEMLERI------------------

sonuc = document.getElementsByClassName("task"); //? tum elemanlara ulasir
console.log(sonuc);
sonuc = document.getElementsByClassName("task")[1]; //? index numarasi 1 olan yani 2. elemana ulasir
console.log(sonuc);
sonuc = document.getElementsByClassName("task")[2]; //?
console.log(sonuc);
console.log("--------------------------");
ul = document.getElementById("task-list1"); //?
sonuc = ul.getElementsByTagName("li"); //?

for (let i = 0; i < sonuc.length; i++) {
  //? task clasindaki butun etiketleri yazdir
  console.log(sonuc[i]);
}
console.log("-----------------");
for (let x of sonuc) {
  //?tonuclar altindaki task clasli tum etiketlere ulasir
  console.log(x);
}

console.log("-----------------");
for (let gorev of sonuc) {
  //?tonuclar altindaki task clasli tum etiketlere ulasir
  gorev.style.color = "red";
  gorev.style.fontSize = "20px";
}

sonuc = document.querySelectorAll("#task-list2 li"); //? idsi task-list2 olan etiketinin altindaki tum li etiketlerini getir
for (z of sonuc) {
  z.style.color = "blue";
  z.style.fontSize = "18px";
  //z.innerText = "nurettin";
}

ul = document.getElementById("task-list1");
sonuc = ul.children; //?task-list1 in tum elemanlarina ulasir
console.log(sonuc);
sonuc = ul.children[1].children[0].children[0].checked = true; //? listenin icindeki checkbox a ulasip degerini degistirme
sonuc =
  ul.children[1].nextElementSibling.children[0].children[0].checked = true; //? listenin icindeki checkbox a ulasip degerini degistirme
console.log(sonuc);
sonuc = ul.firstElementChild; //?
console.log(sonuc);
sonuc = ul.lastElementChild; //?
console.log(sonuc);

sonuc = document.getElementById("title").parentElement; //? bu etiketin parent ust elementine ulasilir
sonuc = document.querySelector(".task").nextElementSibling; //? task clasinin ikinci elementine ulasir
console.log(sonuc);
//! ------------------ELEMENT OLUSTURMA------------------
sonuc;
ul = document.getElementById("task-list");
let count = ul.children.length;

console.log(count);

let li = `
       <li class="task task-group-item">
        <div class="form-check">
          <input type="checkbox" id="${count + 1}" class="form-check-input" />
          <label for="${count + 1}" class="form-check-lable">Gorev ${
  count + 1
}</label>
        </div>
      </li> `;

ul.insertAdjacentHTML("beforeend", li); //? sona olusturduhumuz li etiketini olusturur

console.log(li);

//! ------------------SIFIRDAN ELEMENT OLUSTURMA------------------

gorevListesi = ["Gorev 1", "Gorev 2", "Gorev 3", "Gorev 4"];

ul = document.getElementById("task-list");

for (let index in gorevListesi) {
  //? hic olmayan bir elementi liste dizinin elemenlarini atayarak olusturduk
  let li = `
        <li class="task task-group-item">
         <div class="form-check">
           <input type="checkbox" id="${index + 1}" class="form-check-input" />
           <label for="${index + 1}" class="form-check-lable"> ${
    gorevListesi[index]
  }</label>
         </div>
       </li> `;

  ul.insertAdjacentHTML("beforeend", li);
}
//!-------------------------OBJE ILE ELEMET OLUSTURMA-----------------------------

gorevListesi = [
  { id: 1, gorevAdi: "Gorev 1" },
  { id: 2, gorevAdi: "Gorev 2" },
  { id: 3, gorevAdi: "Gorev 3" },
  { id: 4, gorevAdi: "Gorev 4" },
  { id: 5, gorevAdi: "Gorev 5" },
];

let ul = document.getElementById("task-list");

for (let gorev of gorevListesi) {
  //? hic olmayan bir elementi liste dizinin elemenlarini atayarak olusturduk
  let li = `
        <li class="task task-group-item">
         <div class="form-check">
           <input type="checkbox" id="${gorev.id}" class="form-check-input" />
           <label for="${gorev.id}" class="form-check-lable"> ${gorev.gorevAdi}</label>
         </div>
       </li> `;

  //   ul.insertAdjacentHTML("beforeend", li);//?elemani sona ekler
  ul.insertAdjacentHTML("afterbegin", li); //? elemani basa ekler
}

//! ------------------ELEMENT UZERINDE GUNCELLEME VE SILME------------------

let gorevListesi = [
  { id: 1, gorevAdi: "Gorev 1" },
  { id: 2, gorevAdi: "Gorev 2" },
  { id: 3, gorevAdi: "Gorev 3" },
  { id: 4, gorevAdi: "Gorev 4" },
  { id: 5, gorevAdi: "Gorev 5" },
];

ul = document.getElementById("task-list");

for (let gorev of gorevListesi) {
  //? hic olmayan bir elementi liste dizinin elemenlarini atayarak olusturduk
  let li = `
        <li class="task task-group-item">
         <div class="form-check">
           <input type="checkbox" id="${gorev.id}" class="form-check-input" />
           <label for="${gorev.id}" class="form-check-lable"> ${gorev.gorevAdi}</label>
         </div>
       </li> `;

  ul.insertAdjacentHTML("beforeend", li); //?elemani sona ekler
  ul.insertAdjacentHTML("afterbegin", li); //? elemani basa ekler
}

document.querySelector("#task-list").parentElement.remove(); //*istenilen elementi bu sekilde silebiliriz task-listad li elementin bir ust elementi silinir
sonuc = document.querySelector("#task-list").children;
document.querySelector("#task-list").children[2].remove(); //?task-list idli elementin altindaki 2. indexteki eleman silinir
document.querySelector("#task-list").children[1].remove();
document.querySelector("#task-list").children[1].remove();
document.querySelector("#task-list").removeAttribute("class"); //? task-list idli elementin class atrubutu silinir
document.querySelector("#task-list").children[3].removeAttribute("class"); //? task-list idli elementin class atrubutu silinir

sonuc = document.querySelector("#task-list").children[1].getAttribute("class"); //? belirtilen idli elementin class etributundeki degerleri getirir
document
  .querySelector("#task-list")
  .children[1].setAttribute("class", "bg-danger"); //? belrtlen id li elenemtin 1 alt elemani class etrubute u bg-danger olarak degistirir
document.querySelector("#task-list").children[0].classList.add("bg-info"); //? ilgili idli elementin alt elementinin class ozelligine bg-info eklenir
document.querySelector("#task-list").children[0].classList.remove("bg-info"); //? ilgili idli elementin alt elementinin class ozelligine bg-info silinir
sonuc = document
  .querySelector("#task-list")
  .children[0].classList.contains("bg-info"); //? ilgili idli elementin alt elementinin class ozelligine bg-info ozelligine sahip mi? true false

console.log(sonuc);

//! ------------------EVENT LISTENERS KULLANIMI------------------
gorevListesi = [
  { id: 1, gorevAdi: "Gorev 1" },
  { id: 2, gorevAdi: "Gorev 2" },
  { id: 3, gorevAdi: "Gorev 3" },
  { id: 4, gorevAdi: "Gorev 4" },
  { id: 5, gorevAdi: "Gorev 5" },
];

ul = document.getElementById("task-list");

for (let gorev of gorevListesi) {
  //? hic olmayan bir elementi liste dizinin elemenlarini atayarak olusturduk
  let li = `
        <li class="task task-group-item">
         <div class="form-check">
           <input type="checkbox" id="${gorev.id}" class="form-check-input" />
           <label for="${gorev.id}" class="form-check-lable"> ${gorev.gorevAdi}</label>
         </div>
       </li> `;
  ul.insertAdjacentHTML("beforeend", li); //?elemani sona ekler
  ul.insertAdjacentHTML("afterbegin", li); //? elemani basa ekler
}

document.querySelector("#btnClear").addEventListener("click", function (event) {
  console.log("click event : clear");
  event.preventDefault(); //? ILGILI ELEMENTIN DEFAULT OZELLIGINI KAPATIR
});

document.querySelector("#btnAddNewTask").addEventListener("click", newTask); //?buradaki fonksiyonun parantezsiz olduguna dikkat

function newTask(event) {
  console.log(event.target);
  event.target.classList.add("btn-lg"); //tikladigimiz butonun class ozelligine btn-lg ozelligi eklenir
  event.target.classList.add("btn-warning"); //tikladigimiz butonun class ozelligine btn-lg ozelligi eklenir
  event.preventDefault(); //? ILGILI ELEMENTIN DEFAULT OZELLIGINI KAPATIR
}
