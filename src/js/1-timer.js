const time = new Date();
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

setInterval(setTime, 1000);

function setTime() {
  spanDays.innerHTML = time.getDate();
  spanHours.innerHTML = time.getHours();
  spanMinutes.innerHTML = time.getMinutes();
  spanSeconds.innerHTML = time.getSeconds();
}

spanDays.innerHTML = time.getDate();
spanHours.innerHTML = time.getHours();
spanMinutes.innerHTML = time.getMinutes();
spanSeconds.innerHTML = time.getSeconds();


console.log("Day: ", time.getDate()); // 16
console.log("Hours: ", time.getHours()); // 14
console.log("Minutes: ", time.getMinutes()); // 25
console.log("Seconds: ", time.getSeconds()); // 0