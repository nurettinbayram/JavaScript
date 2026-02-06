/*
accumulator → Önceki adımdan dönen birikmiş (toplanan, birleştirilen vs.) değerdir.
currentValue → Dizi üzerinde gezerken o anki elemandır.
initialValue → Başlangıç değeri. (Genellikle 0, [], {} vs.)
*/

const productsss = [
  { name: "Phone", brand: "Apple", price: 1000 },
  { name: "Laptop", brand: "Apple", price: 2000 },
  { name: "Tablet", brand: "Samsung", price: 800 },
  { name: "TV", brand: "Samsung", price: 1500 },
  { name: "Monitor", brand: "Dell", price: 500 },
  { name: "Computer", brand: "Dell", price: 500 },
];

function amountOfBrand(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = 0;
    }
    acc[item.brand] += item.price;
    return acc;
  }, {});
}

console.log(amountOfBrand(productsss));

// !
// ?
// #
// ->
// *
// #
// &
// /

const peopleEE = [
  { name: "Ali", city: "Istanbul" },
  { name: "Ayşe", city: "Ankara" },
  { name: "Mehmet", city: "Istanbul" },
];

const grouped = peopleEE.reduce((acc, person) => {
  if (!acc[person.city]) {
    acc[person.city] = [];
  }
  acc[person.city].push(person.name);
  return acc;
}, {});

console.log(grouped);

/*
{
  Istanbul: ["Ali", "Mehmet"],
  Ankara: ["Ayşe"]
}
*/

//? Aşağıdaki ürün listesini kullanarak her markanın toplam gelirini hesaplayan bir fonksiyon yaz.
const sales = [
  { product: "Laptop", brand: "Dell", price: 800 },
  { product: "Monitor", brand: "HP", price: 200 },
  { product: "Mouse", brand: "HP", price: 50 },
  { product: "Laptop", brand: "Apple", price: 1500 },
  { product: "Keyboard", brand: "Dell", price: 100 },
  { product: "Monitor", brand: "Apple", price: 300 },
];

const markaToplamFiyati = (arr) => {
  return arr.reduce((acc, item) => {
    if (!acc[item.brand]) {
      acc[item.brand] = 0;
    }
    acc[item.brand] += item.price;
    return acc;
  }, {});
};

console.log(markaToplamFiyati(sales));
