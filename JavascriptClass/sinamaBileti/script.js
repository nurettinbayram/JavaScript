const container = document.querySelector(".container");
const allSeats = document.querySelectorAll(".seat");
const seats = document.querySelectorAll(".seat:not(reserved)");
const amount = document.getElementById("amount");
const option = document.getElementById("movies");
const reservedBtn = document.getElementById("reservedBtn");
var reserved = document.querySelectorAll(".seat.reserved");
const unReservedBtn = document.getElementById("unReservedBtn");

getFromLocalStorage();
culculateTicet();
getLocalStorageReseveIndex();

container.addEventListener("click", function (e) {
  let myTarget = e.target;

  if (
    myTarget.classList.contains("seat") &&
    !myTarget.classList.contains("reserved")
  ) {
    myTarget.classList.toggle("selected");
    culculateTicet();
  }

  if (myTarget.classList.contains("unReserved")) {
    myTarget.classList.remove("reserved", "unReserved");
  }
});

option.addEventListener("change", function () {
  culculateTicet();
});

function culculateTicet() {
  const selectedSeats = container.querySelectorAll(".seat.selected");
  const selectedSeatCount = selectedSeats.length;
  let price = option.value;
  amount.innerHTML = price * selectedSeatCount;

  const seatsArr = [];
  const selecedSeatsArr = [];

  // bu bolumde nodeList i Array a donusturuyoruz.
  seats.forEach(function (seat) {
    seatsArr.push(seat);

    if (seat.classList.contains("selected")) {
      selecedSeatsArr.push(seat);
    }
  });

  // secili olan indexleri tutuyoruz
  const selecedSeatsIndex = selecedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  saveToLocalStorge(selecedSeatsIndex);
}

function saveToLocalStorge(selecedSeatsIndex) {
  localStorage.setItem("selecedSeatsIndex", JSON.stringify(selecedSeatsIndex)); // secili koltuklarin indexi
  localStorage.setItem("selectedMovieIndex", option.selectedIndex); // movie indexi
}

function getFromLocalStorage() {
  const selectedSeatLocalStorage = JSON.parse(
    localStorage.getItem("selecedSeatsIndex")
  );

  if (
    selectedSeatLocalStorage !== null &&
    selectedSeatLocalStorage.length > 0
  ) {
    seats.forEach(function (seat, index) {
      if (selectedSeatLocalStorage.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieLocalStorege = JSON.parse(
    localStorage.getItem("selectedMovieIndex")
  );
  if (selectedMovieLocalStorege !== null) {
    option.selectedIndex = selectedMovieLocalStorege; //option.selectedIndex etiketine ait ozellik
  }
}

//? burada reserve butonuna basilinca secili olan koltular reseve edilir.
reservedBtn.addEventListener("click", function () {
  selectedSeats = container.querySelectorAll(".seat.selected");
  selectedSeats.forEach(function (seat) {
    seat.classList.remove("selected");
    seat.classList.add("reserved");
  });
  reserved = document.querySelectorAll(".seat.reserved");

  let reserevUnReserve = document.querySelectorAll(".reserved.unReserved");
  reserevUnReserve.forEach((item) => {
    item.classList.remove("unReserved");
  });

  let reservedArr = [];
  let allSeatArr = [];
  allSeats.forEach(function (res) {
    allSeatArr.push(res);
    if (res.classList.contains("reserved")) {
      reservedArr.push(res);
    }
  });

  let reservedIndex = reservedArr.map(function (reserve) {
    return allSeatArr.indexOf(reserve);
  });

  setLocalStorageReseveIndex(reservedIndex);

  culculateTicet();
});

function setLocalStorageReseveIndex(reservedIndex) {
  localStorage.setItem("reservedIndex", JSON.stringify(reservedIndex));
}

function getLocalStorageReseveIndex() {
  let reservedIndex = JSON.parse(localStorage.getItem("reservedIndex"));

  if (reservedIndex != null && reservedIndex.length > 0) {
    allSeats.forEach(function (item, index) {
      if (reservedIndex.indexOf(index) > -1) {
        item.classList.add("reserved");
      }
    });
  }
}

unReservedBtn.addEventListener("click", function () {
  reserved = document.querySelectorAll(".seat.reserved");
  reserved.forEach((item) => {
    item.classList.add("unReserved");
  });
});
