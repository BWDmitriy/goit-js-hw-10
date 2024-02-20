const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

let userSelectedDate;
let startingDate;
let timerInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() > Date.now()) {
      document.querySelector('button[data-start]').removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
      startingDate = new Date();
      window.clearInterval(setTimer);
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};
const element = document.getElementById('datetime-picker');
flatpickr(element, options);

const startButton = document.querySelector('button[data-start]');

startButton.addEventListener('click', setTimer);
startButton.addEventListener('click', () => {
  startButton.setAttribute('disabled', '');
  document
    .getElementsByClassName('flatpickr-input flatpickr-mobile')[0]
    .setAttribute('disabled', '');
  timerInterval = setInterval(setTimer, 1000);
});

function setTimer() {
  if (userSelectedDate.getTime() > startingDate.getTime()) {
    userSelectedDate = new Date(userSelectedDate.getTime() - 1000);
    const timeObj = convertMs(
      userSelectedDate.getTime() - startingDate.getTime()
    );
    spanDays.innerHTML = addLeadingZero(timeObj.days);
    spanHours.innerHTML = addLeadingZero(timeObj.hours);
    spanMinutes.innerHTML = addLeadingZero(timeObj.minutes);
    spanSeconds.innerHTML = addLeadingZero(timeObj.seconds);
  } else {
    window.clearInterval(timerInterval);
    spanDays.innerHTML = '00';
    spanHours.innerHTML = '00';
    spanMinutes.innerHTML = '00';
    spanSeconds.innerHTML = '00';
  }
}
function addLeadingZero(value) {
  if (value < 10) {
    let str = value.toString();
    return str.padStart(2, '0');
  } else {
    return value;
  }
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
