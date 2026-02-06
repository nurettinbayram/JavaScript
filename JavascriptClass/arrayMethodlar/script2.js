//? Aşağıdaki ürün listesinde, kategori bazlı olarak toplam fiyatı hesaplayan bir fonksiyon yaz.
//? Yani her kategori için toplam fiyatı döndüren bir nesne (object) oluştur.

const items = [
  { name: "Telefon", category: "Elektronik", price: 3000 },
  { name: "Bilgisayar", category: "Elektronik", price: 7000 },
  { name: "Tişört", category: "Giyim", price: 200 },
  { name: "Pantolon", category: "Giyim", price: 300 },
  { name: "Koltuk", category: "Mobilya", price: 1500 },
];

function toplamKategoriFiyati(arr) {
  return arr.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.price;
    return acc;
  }, {});
}

console.log(toplamKategoriFiyati(items));

/*
1. arr.reduce((acc, item) => { ... }, {})
reduce, bir diziyi tek bir sonuç haline indirger.

acc (accumulator), biriktirici değişkendir (başlangıçta {} yani boş bir nesne).

item ise arr dizisinin her bir elemanıdır (örneğin { name: "Telefon", category: "Elektronik", price: 3000 }).

2. if (!acc[item.category]) { acc[item.category] = 0; }
Eğer acc (yani sonuç nesnesi) içinde item.category henüz yoksa, örneğin "Elektronik" anahtarı yoksa...

...o kategoriye 0 değeri atanır. Böylece o kategori için toplam fiyat biriktirilmeye başlanabilir.

3. acc[item.category] += item.price;
Şu anki ürünün fiyatı, o kategorinin toplamına eklenir.

4. return acc;
Güncel toplamı içeren acc geri döndürülür ve bir sonraki item için kullanılır.

5. }, {});
reduce fonksiyonuna ikinci parametre olarak {} yani boş bir nesne verilir. Bu, biriktirmeye buradan başlanacağı anlamına gelir.
*/
