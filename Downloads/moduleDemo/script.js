const products = [
  { name: "Samsung S7", price: 3000 },
  { name: "Samsung S8", price: 4000 },
  { name: "Samsung S9", price: 5000 },
];

var ProductController = (function (data) {
  // private members : BU KISIMDA TANIMLANAN HER SEY PRIVATE OLUP DISARDAN ERISIMI KAPALIDIR
  var collections = data || []; // data BOS ISE BOS OLAN DIZI ATANIR BOS DEGILSE DATA ATANIR

  const addProduct = function (product) {
    collections.push(product);
  };

  const removeProduct = function (product) {
    var index = collections.indexOf(product);
    if (index >= 0) {
      collections.splice(index, 1);
    }
  };

  const getProducts = function () {
    return collections;
  };

  // public members : RETURN PARANTEZLERI ARASINA YAZILAN FONKSIYONLAR VE DEGISKENLER DISARIYA ACILIR
  return {
    addProduct,
    removeProduct,
    getProducts,
  };
})(products); // BU BOLUMDEN DISARDAN VERILER GIRILIR DASTAKI FONKSION data SEKLINDE ALIR

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProducts());

// Module Extenting
var extended = (function (m) {
  m.sayHello = function () {
    console.log("hello from extended module");
  };

  return m;
})(ProductController || {}); // BU MODUL BASKA BIR MODULU EXTEND ETMIS YANI GENISLETMIS VE BURAYA GENISLETILMESI GEREKEN MODUL ISMI VERILIR
// MODULDEN DONEN BOS BIR DEGERSE BOS BIR OBJE EXTEND EDILIR
// BU MODUL UZERINDEN EXTEND EDILEN MODULDEKI BUTUN PUBLIC VERILERINE ULASMAKTA MUMKUN

extended.sayHello(); // KENDI MODULU ICERINSINDEKI METODA OLASMIS
console.log(extended.getProducts()); // EXTEND ETTIGI MODULUN METODUNA ULASMIS
