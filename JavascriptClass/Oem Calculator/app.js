// ------------------------------------------- Storage Controller -------------------------------------------
const StorageController = (function () {})();

// -------------------------------------------Product Controller -------------------------------------------
const ProductController = (function () {
  // private
  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: [
      // { id: 0, name: "Monitör", price: 100 },
      // { id: 1, name: "Ram", price: 30 },
      // { id: 2, name: "Klavye", price: 10 },
      // { id: 3, name: "Mouse", price: 5 },
      // { id: 4, name: "Hardisk", price: 120 },
    ],
    selectedProduct: null,
    totalPrice: 0,
  };

  // public
  return {
    getProducts: function () {
      return data.products;
    },
    getData: function () {
      return data;
    },
    addProduct: function (name, price) {
      let id;

      if (data.products.length > 0) {
        // id son eklenmis olan itemin id degerinden bir fazlasi olur her zaman
        id = data.products[data.products.length - 1].id + 1;
      } else {
        id = 0;
      }

      // yeni bir urun ilustur contructordan
      const newProduct = new Product(id, name, parseFloat(price));
      data.products.push(newProduct);

      return newProduct;
    },
  };
})();

// -------------------------------------------UI Controller -------------------------------------------

const UIController = (function () {
  // bu bolumde html sayfasinda lazim olacak elementlerin erisim verilerini icerir
  const Selectors = {
    productList: "#item-list", // tablonun id'si
    addButton: "#addBtn",
    inputName: "#name",
    inputPrice: "#price",
    productTable: "#productTable",
  };

  return {
    createProductList: function (products) {
      let html = "";

      products.forEach((prd) => {
        html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>
                        <td class="text-right">
                            <button type="submit" class="btn btn-warning btn-sm">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>
                    </tr>                
                `;
      });
      document.querySelector(Selectors.productList).innerHTML = html;
    },
    //selector bolumunu bu sekilde disariya acmis oluruz
    getSelectors: function () {
      return Selectors;
    },
    addProduct: function (prd) {
      document.querySelector(Selectors.productTable).style.display = "block";
      let html = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm">
                            <i class="far fa-edit"></i>
                        </button>
                    </td>
                </tr>                
            `;
      document.querySelector(Selectors.productList).innerHTML += html;
    },
    clearInputs: function () {
      document.querySelector(Selectors.inputName).value = "";
      document.querySelector(Selectors.inputPrice).value = "";
    },
    hideCard: function () {
      document.querySelector(Selectors.productTable).style.display = "none";
    },
  };
})();

// -------------------------------------------App Controller -------------------------------------------
const App = (function (ProductCtrl, UICtrl) {
  const UISelectors = UIController.getSelectors();

  //tum eventListenerler buraya eklenmeli
  const loadEventListeners = function () {
    //----------------- Add Item--------------
    document
      .querySelector(UISelectors.addButton)
      .addEventListener("click", productAddSubmit);

    //----------------------------------
  };

  const productAddSubmit = function (e) {
    let inputName = document.querySelector(UISelectors.inputName).value;
    let inputPrice = document.querySelector(UISelectors.inputPrice).value;

    if (inputName !== "" && inputPrice !== "") {
      const newProduct = ProductCtrl.addProduct(inputName, inputPrice);
      // add list
      UIController.addProduct(newProduct);
      //clear input
      UIController.clearInputs();
    }

    e.preventDefault();
  };

  return {
    init: function () {
      console.log("starting app...");
      const products = ProductCtrl.getProducts(); // ProductController icindeki listeye ulasilir

      if (products.length == 0) {
        UICtrl.hideCard();
      } else {
        UICtrl.createProductList(products); //ProductController liste UIController'a gonderilir
      }

      loadEventListeners();
    },
  };
})(ProductController, UIController); // APP MODULUNE SAGLANAN VERILER BURADAN GIRILIR

App.init(); //PROGRAMIN BU NOKTADAN BASLAYACAGI ANLAMINA GELR
