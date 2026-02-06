secondsElapsed = 0;
let countInterval = null;
const time = document.getElementById("time");

function padStart(value) {
  //# This function ensures that the value is always two digits by padding with a leading zero if necessary.
  //# It converts the value to a string and uses padStart to add a leading zero if the string is less than two characters long.
  return String(value).padStart(2, "0");
}
function setTime() {
  //# This function calculates the minutes and seconds from the total elapsed seconds.
  //# It uses Math.floor to get the whole minutes and the modulus operator to get the remaining seconds.
  //# It then updates the inner HTML of the time element to display the formatted time.
  const minutes = Math.floor(secondsElapsed / 60);
  const second = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(second)}`;
}

function timer() {
  //# This function increments the secondsElapsed variable by 1 each time it is called.
  //# It then calls the setTime function to update the displayed time.
  //# This function is intended to be called at regular intervals (every second) to update the timer.
  //# It is typically used in conjunction with setInterval to create a countdown or stopwatch effect.
  secondsElapsed++;
  setTime();
}

function start() {
  //# This function starts the timer by checking if countInterval is already running.
  //# If it is not running, it sets up a new interval that calls the timer function every second.
  //# This function is typically called when the user clicks a "Start" button to begin the timer.
  //# It ensures that only one interval is running at a time to avoid multiple timers running simultaneously.
  if (countInterval) stop();
  countInterval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(countInterval);
}

function reset() {
  stop();
  secondsElapsed = 0;
  setTime();
}

//! My Solution

// const min = document.getElementById("min");
// const sec = document.getElementById("sec");
// let counter = 0;
// let run = true;

// function start() {
//   if (run) {
//     countInterval = setInterval(count, 1000);
//   }
//   run = false;
// }

// function stop() {
//   clearInterval(countInterval);
//   run = true;
// }

// function reset() {
//   clearInterval(countInterval);
//   counter = 0;
//   sec.innerText = "00";
//   min.innerText = "00";
//   run = true;
// }

// function count() {
//   counter++;
//   secMod = counter % 60;
//   quotient = Math.floor(counter / 60);

//   console.log(counter);
//   sec.innerText = secMod < 10 ? "0" + secMod : secMod;
//   min.innerText =
//     quotient == 0 ? "00" : quotient < 10 ? "0" + quotient : quotient;
// }
