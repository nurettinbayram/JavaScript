//? Aşağıdaki listeyi kullanarak ismi "a" harfiyle başlayan kişilerin isimlerini büyük harfe çevirerek yeni bir liste oluştur.
const userss = [
  { name: "Ali", age: 25 },
  { name: "ayşe", age: 22 },
  { name: "Mehmet", age: 30 },
  { name: "ahmet", age: 28 },
];

let list = userss
  .filter((entry) => entry.name.toLowerCase().startsWith("a"))
  .map((entry) => entry.name.toUpperCase());
console.log(list);

//? Aşağıdaki ürünlerden fiyatı 1000 TL'den fazla olanları listele ve sadece ürün adlarını içeren bir dizi döndür.
const productss = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 },
  { name: "Klavye", price: 200 },
  { name: "Telefon", price: 3000 },
];

let liPro = productss.filter((entry) => entry.price >= 1000);
console.log(liPro);

//? Aşağıdaki dizideki tüm öğrencilerin yaşları 18'in üzerindeyse true, değilse false döndüren bir fonksiyon yaz.
const studentss = [
  { name: "Can", age: 19 },
  { name: "Deniz", age: 21 },
  { name: "Ece", age: 22 },
  { name: "Tuna", age: 17 },
];

function olderthen18(list) {
  let li = list.map((entry) => (entry.age > 18 ? true : false));
  return li;
}

console.log(olderthen18(studentss));

//? Aşağıdaki liste içinde adı "e" harfiyle biten kişileri filtrele ve yaşlarının toplamını döndür.

const peoplee = [
  { name: "Zeynep", age: 24 },
  { name: "Ahmet", age: 30 },
  { name: "Merve", age: 26 },
  { name: "Ege", age: 20 },
];
let summ = 0;
let c = 0;
peoplee
  .filter((entry) => entry.name.toLowerCase().endsWith("e"))
  .forEach((entry) => {
    summ += entry.age;
    c += 1;
  });

console.log(summ / c);

//? Aşağıdaki kelimeler listesinden 5 harften uzun olan kelimeleri alfabetik olarak sırala ve sonuç listesini döndür.

const words = ["elma", "armut", "karpuz", "muz", "çilek", "ananas"];

let words5 = words.filter((item) => item.length > 5).sort();
console.log(words5);
