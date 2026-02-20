var cars = [
  {
    brand: "BMW",
    img: "./img/bmw.jpg",
    mil: "14000",
    plateNo: "DFR45",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi distinctio soluta porro recusandae ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi distinctio soluta porro recusandae ipsam exercitationem voluptas atque excepturi. Quisquam officia perferendis magni dolore earum ab optio. Debitis, enim itaquLorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nisi distinctio soluta porro recusandae ipsam exercitationem voluptas atque excepturi. Quisquam officia perferendis magni dolore earum ab optio. Debitis, enim itaqusam exercitationem voluptas atque excepturi. Quisquam officia perferendis magni dolore earum ab optio. Debitis, enim itaqu",
  },
  {
    brand: "Volvo",
    img: "./img/volvo.jpg",
    mil: "45000",
    plateNo: "DFG54",
    discription:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. . ",
  },
  {
    brand: "Honda",
    img: "./img/honda.jpg",
    mil: "50000",
    plateNo: "XVC69",
    discription:
      "Lorem amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, placeat! Modi ad saepe, amet quos deleniti placeat accusantium delectus, officia doloribus ducimus, aperiam nam voluptatem libero ipsum dolor sit amet, consectetur adipisicing elit. ",
  },
  {
    brand: "Mazda",
    img: "./img/mazda.jpg",
    mil: "20000",
    plateNo: "DDF58",
    discription:
      "Lorem ipsum dolor sit amet, consectetur amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, placeat! Modi ad saepe, amet quos deleniti placeat accusantium delectus, officia doloribus ducimus, aperiam nam voluptatem libero adipisicing elit. ",
  },
  {
    brand: "Scoda",
    img: "./img/skoda.jpg",
    mil: "15000",
    plateNo: "WER35",
    discription:
      "Lorem ipsum dolor sit amet,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, eius ipsa sed vero amet, voluptatibus provident quae, nihil eligendi quos velit reiciendis possimus vitae sint impedit fugiat voluptate. Perferendis, veroDolorum quas ullam illo laboriosam veritatis harum blanditiis soluta maiores, beatae ipsum rerum fugit praesentium repudiandae facere commodi aspernatur? Totam cumque eum explicabo aut eligendi fugit molestias nihil autem impedit. consectetur adipisicing elit. ",
  },
];

//butonlara erisim
const btnRight = document.getElementById("right");
const btnLeft = document.getElementById("left");
const icons = document.querySelectorAll(".bi");

var settings = {
  duration: 1000,
  random: false,
};

var index = 0;
let car;
var interval;

//Right butonuna
btnRight.addEventListener("click", rightSlider);

function rightSlider() {
  index++;
  if (index >= cars.length) index = 0;
  changeSlider(index);
}

//Left butonu
btnLeft.addEventListener("click", leftSlider);

function leftSlider() {
  index--;
  if (index < 0) index = cars.length - 1;
  changeSlider(index);
}

//elemanlari degistirme fonksiyonu
function changeSlider(index) {
  console.log(index);
  car = cars[index];
  document.getElementById("img").src = car.img;
  document.getElementById("brand").innerHTML = car.brand;
  document.getElementById("mil").innerHTML = car.mil;
  document.getElementById("plateNo").innerHTML = car.plateNo;
  document.getElementById("discription").innerHTML = car.discription;
}
let prev;
function autoSlider(settings) {
  interval = setInterval(function () {
    //setInterval ile sureyi baslattiyoruz
    if (settings.random) {
      //setting objesinden gelen random degerine bagli olarak
      do {
        index = Math.floor(Math.random() * (cars.length - 1));
      } while (index == prev); //burada ayni slide iki kere oynamasin diye
      prev = index;
    } else {
      index++;
      if (index >= cars.length) {
        index = 0;
      }
    }
    changeSlider(index);
  }, settings.duration); //duration suresi kadar slide bekleyip tekrarlanir
}

//ilk calismada
autoSlider(settings);

//iconlar izerine gelinddiginde
icons.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

icons.forEach((icon) => {
  icon.addEventListener("mouseleave", () => {
    autoSlider(settings); //mouse ikonlardan ayrildigi tekrar slide gecisleri baslasin
  });
});

document.getElementById("img").addEventListener("mouseenter", function () {
  clearInterval(interval);
});
document.getElementById("img").addEventListener("mouseleave", function () {
  autoSlider(settings);
});
