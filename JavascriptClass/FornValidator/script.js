const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    success(email);
  } else if (email.value === "") {
    error(email, " alan bos gecilemez!");
  } else {
    error(email, "  formatini kontrol edin!!!");
  }
};

function error(input, text) {
  let msg = input.nextElementSibling.firstElementChild;
  msg.innerHTML = input.placeholder + text;
  input.classList.add("is-invalid");
}

function success(input) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  input.nextElementSibling.firstElementChild.innerHTML = "";
}

function checkLenght(input, minLen, maxLen) {
  if (input.value.length > maxLen) {
    error(input, " " + maxLen + " ten uzun karakter giremezsin!!");
  } else if (input.value.length < minLen) {
    error(input, " " + minLen + " ten az karakter giremezsin!!");
  } else {
    success(input);
  }
}

function checkPassword(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    error(pass1, " Password eslesmiyor!!!");
    error(pass2, " Password eslesmiyor!!!");
  } else if (pass1.value == "" && pass2.value == "") {
    checkInput([pass1, pass2]);
  } else {
    success(pass1);
    success(pass2);
  }
}

function checkInput(inputs) {
  for (let input of inputs) {
    if (input.value === "") {
      error(input, " alan bos gecilemez!");
    } else {
      success(input);
    }
  }
}

function checkPhoneNum(num) {
  const re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
  if (!re.test(num.value)) {
    error(num, " formatina uygun olmali!!");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput([userName, email, phone, password1, password2]);
  validateEmail(email);
  checkLenght(userName, 7, 10);
  checkPhoneNum(phone);
  checkLenght(password1, 5, 8);
  checkLenght(password2, 5, 8);
  checkPassword(password1, password2);
});
