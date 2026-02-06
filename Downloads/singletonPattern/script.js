// Singleton Pattern
// TEMEL MANTIGI ATNI VERIYE FARKLI ZAMANLARDA ULASABILMEKTIR
// instance DEGERINE BAKILIRSA RONDOM ILE DEGER ATANIR VE HER createInstance() METODU CELISTIRILDIGINDA BUNA YENI BIR DEGER ATANIR
// ANCAK getInstance() MEDODU YARDIMI ILE INSTANCE DEGERI DONDURULUR ANCAK EGER BIR DEGER YOKSA DEGER YENI URETILIR BIR DEGER VARSA HEP O DEGER DONDURULUR

var singleton = (function () {
  var instance;

  const createInstance = function () {
    return {
      randomNumber: Math.random(),
    };
  };

  return {
    getInstance: function () {
      if (!instance) {
        instance = new createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1.randomNumber, instance2.randomNumber);

//-----------------------IKI AYRI ORNEK VAR BURADA CALISTIRILDIGINDA BIRINI KAPATMAYI OUNTMA---------------------------

var singleton = (function () {
  var instance;

  function ProductController() {
    const products = [
      { name: "product 1" },
      { name: "product 2" },
      { name: "product 3" },
    ];

    const add = function (product) {
      products.push(product);
    };

    const get = function () {
      return products;
    };

    return {
      add,
      get,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = new ProductController();
      }
      return instance;
    },
  };
})();

// BURADA productController'DAN IKI DEGISKEN OLUSTURULDU
const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

// productController1 DEN VERI EKLENSE BILE productController2 DEDE O VERI AYNI SEKILDE ELE ALINIR
productController1.add({ name: "Product 4" });

// ASAGIDAKI IKI KODUN SONUCU AYNI HATA productController1'DEN EKLEME YAPILMASINA RAGMEN
console.log(productController2.get());
console.log(productController1.get());
