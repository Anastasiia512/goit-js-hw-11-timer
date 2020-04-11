const daysValue = document.querySelector('[data-value="days"]');
const hoursValue = document.querySelector('[data-value="hours"]');
const minValue = document.querySelector('[data-value="mins"]');
const secValue = document.querySelector('[data-value="secs"]');
const button = document.querySelector("button");

function pad(value) {
  return String(value).padStart(2, "0");
}

const updateTimer = function (days, hours, mins, secs) {
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minValue.textContent = mins;
  secValue.textContent = secs;
};

let isActive = false;
const counter = function () {
  if (isActive) {
    return;
  }
  isActive = true;
  const startTime = new Date(2020, 08, 14);
  const interval = setInterval(() => {
    const currentDate = Date.now();
    let time = startTime - currentDate;
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
      3,
      "0"
    );
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    if ((time = 0)) {
      clearInterval(interval);
    }
    updateTimer(`${days}`, `${hours}`, `${mins}`, `${secs}`);
  }, 1000);
};

button.addEventListener("click", counter);
