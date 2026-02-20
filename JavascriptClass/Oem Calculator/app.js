// ------------------------------------------- Storage Controller -------------------------------------------
const StorageController = (function () {
  return {
    storeProduct: function (product) {
      let products;
      if (localStorage.getItem("products") === null) {
        products = [];
        products.push(product);
      } else {
        products = JSON.parse(localStorage.getItem("products"));
        products.push(product);
      }
      localStorage.setItem("products", JSON.stringify(products));
    },
    getProductFromStorage: function () {
      let productList;
      if (localStorage.getItem("products") === null) {
        productList = [];
      } else {
        productList = JSON.parse(localStorage.getItem("products"));
      }
      return productList;
    },
    updateData: function (product) {
      let products = JSON.parse(localStorage.getItem("products"));
      products.forEach(function (prd, index) {
        if (prd.id === product.id) {
          products.splice(index, 1, product);
        }
      });
      localStorage.setItem("products", JSON.stringify(products));
    },
    deleteProduct: function (id) {
      let products = JSON.parse(localStorage.getItem("products"));
      products.forEach(function (prd, index) {
        if (prd.id === id) {
          products.splice(index, 1);
        }
      });
      localStorage.setItem("products", JSON.stringify(products));
    },
  };
})();

// -------------------------------------------Product Controller -------------------------------------------
const ProductController = (function () {
  // private
  const Product = function (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  };

  const data = {
    products: StorageController.getProductFromStorage(),
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
    getProductById: function (id) {
      let product = null;
      data.products.forEach((prd) => {
        if (prd.id == id) {
          product = prd;
        }
      });

      return product;
    },
    setCurentProduct: function (product) {
      data.selectedProduct = product;
    },
    getCurrentProduct: function () {
      return data.selectedProduct;
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
    getTotalPrice: function () {
      let total = 0;
      data.products.forEach((item) => {
        total += item.price;
      });
      data.products.totalPrice = total;
      return data.products.totalPrice;
    },
    ubdateData: function (name, price) {
      let product;

      data.products.forEach((prd) => {
        if (prd.id == data.selectedProduct.id) {
          prd.name = name;
          prd.price = parseFloat(price);
          product = prd;
        }
      });
      return product;
    },
    deleteProductItem: function (product) {
      data.products.forEach(function (prd, index) {
        if (prd.id == product.id) {
          data.products.splice(index, 1);
        }
      });
    },
  };
})();

// -------------------------------------------UI Controller -------------------------------------------

const UIController = (function () {
  // bu bolumde html sayfasinda lazim olacak elementlerin erisim verilerini icerir
  const Selectors = {
    productList: "#item-list", // tablonun id'si
    productListItems: "#item-list tr",
    addButton: "#addBtn",
    cancelBtn: "#cancelBtn",
    deleteBtn: "#deleteBtn",
    editBtn: "#editBtn",
    inputName: "#name",
    inputPrice: "#price",
    productTable: "#productTable",
    totalTl: "#total-tl",
    totalDolar: "#total-dolar",
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
                          <i class="far fa-edit edit-product"></i>
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
                      <i class="far fa-edit edit-product"></i>
                    </td>
                </tr>                
            `;
      document.querySelector(Selectors.productList).innerHTML += html;
    },
    addProductToForm: function () {
      let selectedProduct = ProductController.getCurrentProduct();
      document.querySelector(Selectors.inputName).value = selectedProduct.name;
      document.querySelector(Selectors.inputPrice).value =
        selectedProduct.price;
    },
    clearInputs: function () {
      document.querySelector(Selectors.inputName).value = "";
      document.querySelector(Selectors.inputPrice).value = "";
    },
    clearWarnings: function () {
      let items = document.querySelectorAll(Selectors.productListItems);
      items.forEach(function (item) {
        if (item.classList.contains("bg-warning")) {
          item.classList.remove("bg-warning");
        }
      });
    },
    hideCard: function () {
      document.querySelector(Selectors.productTable).style.display = "none";
    },
    setPrice: function (total) {
      document.querySelector(Selectors.totalDolar).textContent = total;
      document.querySelector(Selectors.totalTl).textContent = total * 43;
    },
    addingStage: function () {
      UIController.clearWarnings();
      UIController.clearInputs();
      document.querySelector(Selectors.addButton).style.display = "inline";
      document.querySelector(Selectors.cancelBtn).style.display = "none";
      document.querySelector(Selectors.editBtn).style.display = "none";
      document.querySelector(Selectors.deleteBtn).style.display = "none";
    },
    edittingStage: function (tr) {
      UIController.clearWarnings();
      tr.classList.add("bg-warning");
      document.querySelector(Selectors.addButton).style.display = "none";
      document.querySelector(Selectors.cancelBtn).style.display = "inline";
      document.querySelector(Selectors.editBtn).style.display = "inline";
      document.querySelector(Selectors.deleteBtn).style.display = "inline";
    },
    ubdatetedProductList: function (prd) {
      let product = null;
      let items = document.querySelectorAll(Selectors.productListItems);

      items.forEach(function (item) {
        if (item.classList.contains("bg-warning")) {
          item.children[1].textContent = prd.name;
          item.children[2].textContent = prd.price + " $";
          product = item;
        }
      });
      return product;
    },
    deleteProductItem: function () {
      let items = document.querySelectorAll(Selectors.productListItems);
      items.forEach(function (item) {
        if (item.classList.contains("bg-warning")) {
          item.remove();
        }
      });
    },
  };
})();

// -------------------------------------------App Controller -------------------------------------------
const App = (function (ProductCtrl, UICtrl, StorageCtrl) {
  const UISelectors = UICtrl.getSelectors();

  //tum eventListenerler buraya eklenmeli
  const loadEventListeners = function () {
    //----------------- Add Item--------------
    document
      .querySelector(UISelectors.addButton)
      .addEventListener("click", productAddSubmit);

    //-------------------Edit Item Click---------------
    document
      .querySelector(UISelectors.productList)
      .addEventListener("click", productEditClick);

    //-------------------Edit Item Submit---------------
    document
      .querySelector(UISelectors.editBtn)
      .addEventListener("click", productEditSubmit);

    //-------------------Cencel Click---------------
    document
      .querySelector(UISelectors.cancelBtn)
      .addEventListener("click", cancelUbdate);

    //-------------------Delete Submit---------------
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener("click", deleteProductSubmit);
  };

  const productAddSubmit = function (e) {
    let inputName = document.querySelector(UISelectors.inputName).value;
    let inputPrice = document.querySelector(UISelectors.inputPrice).value;

    if (inputName !== "" && inputPrice !== "") {
      const newProduct = ProductCtrl.addProduct(inputName, inputPrice);
      // add list
      UIController.addProduct(newProduct);
      // add local storage
      StorageCtrl.storeProduct(newProduct);
      //get total
      let totalPrice = ProductCtrl.getTotalPrice();
      //set price on UI
      UICtrl.setPrice(totalPrice);

      //clear input
      UIController.clearInputs();
    }

    e.preventDefault();
  };

  const productEditClick = function (e) {
    if (e.target.classList.contains("edit-product")) {
      const id =
        e.target.parentNode.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent;
      let product = ProductCtrl.getProductById(id);

      ProductCtrl.setCurentProduct(product);
      UICtrl.addProductToForm();
      UICtrl.edittingStage(e.target.parentNode.parentNode);
    }
    e.preventDefault();
  };

  const productEditSubmit = function (e) {
    let inputName = document.querySelector(UISelectors.inputName).value;
    let inputPrice = document.querySelector(UISelectors.inputPrice).value;

    if (inputName !== "" && inputPrice !== "") {
      const ubdatetedProduct = ProductCtrl.ubdateData(inputName, inputPrice);
      const updateproductList = UICtrl.ubdatetedProductList(ubdatetedProduct);
      //get total
      let totalPrice = ProductCtrl.getTotalPrice();
      //set price on UI
      UICtrl.setPrice(totalPrice);
      //ubdate local storage
      StorageCtrl.updateData(ubdatetedProduct);
      UICtrl.addingStage();
    }

    e.preventDefault();
  };

  const cancelUbdate = function (e) {
    UICtrl.addingStage();
    UICtrl.clearWarnings();
    e.preventDefault();
  };

  const deleteProductSubmit = function (e) {
    let deleteProduct = ProductCtrl.getCurrentProduct();
    ProductCtrl.deleteProductItem(deleteProduct);
    UICtrl.deleteProductItem();
    //get total
    let totalPrice = ProductCtrl.getTotalPrice();
    //set price on UI
    UICtrl.setPrice(totalPrice);
    //delete from local storage
    StorageCtrl.deleteProduct(deleteProduct.id);
    UICtrl.addingStage();

    if (totalPrice == 0) {
      UICtrl.hideCard();
    }
    e.preventDefault();
  };

  return {
    init: function () {
      console.log("starting app...");
      UICtrl.addingStage();
      const products = ProductCtrl.getProducts(); // ProductController icindeki listeye ulasilir

      if (products.length == 0) {
        UICtrl.hideCard();
      } else {
        UICtrl.createProductList(products); //ProductController liste UIController'a gonderilir
      }

      loadEventListeners();
    },
  };
})(ProductController, UIController, StorageController); // APP MODULUNE SAGLANAN VERILER BURADAN GIRILIR

App.init(); //PROGRAMIN BU NOKTADAN BASLAYACAGI ANLAMINA GELR
