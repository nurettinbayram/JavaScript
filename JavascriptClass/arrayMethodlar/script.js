//? Aşağıdaki people listesinde yaşı 25 ve üzeri olan kişilerin sadece adlarını (name) içeren bir liste döndüren fonksiyonu yaz:

const people = [
  { name: "Ali", age: 24 },
  { name: "Zeynep", age: 29 },
  { name: "Kemal", age: 18 },
  { name: "Ayşe", age: 30 },
];

function arrayname(peo) {
  let newarr = peo.filter((item) => item.age > 25).map((item) => item.name);
  console.log(newarr);
}

arrayname(people);

//? Aşağıdaki kullanıcı listesinden id’si 3 olan kullanıcıyı döndüren fonksiyonu yaz:

const users = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Elif" },
  { id: 3, name: "Mert" },
  { id: 4, name: "Buse" },
];

function idleBlma(userList, id) {
  return userList.find((item) => item.id == id);
}

console.log(idleBlma(users, 3));

//? Aşağıdaki students dizisinden öğrencilerin yaş ortalamasını hesaplayan fonksiyonu yaz:

const students = [
  { name: "Can", age: 21 },
  { name: "Deniz", age: 23 },
  { name: "Ece", age: 22 },
  { name: "Tuna", age: 20 },
];

let sum = 0;
students.forEach(function (entry) {
  sum += entry.age;
});
console.log(sum / students.length);

//? Aşağıdaki ürün listesinden sadece "A" harfiyle başlayan ürünleri döndüren bir fonksiyon yaz:

const products = [
  { name: "Armut" },
  { name: "Elma" },
  { name: "Ananas" },
  { name: "Karpuz" },
];

function startWithChar(list) {
  return list.filter((entry) => entry.name.startsWith("A"));
}

console.log(startWithChar(products));
