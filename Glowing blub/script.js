const bulb = document.getElementById("bulb");
const toggle = document.getElementById("toggle");
const status = document.getElementById("status");

const turnOnBtn = document.getElementById("turnOn");
const turnOffBtn = document.getElementById("turnOff");
const blinkBtn = document.getElementById("blink");

let isOn = false;
let blinkInterval = null;

function turnOn() {
  clearBlink();
  bulb.classList.add("on");
  status.textContent = "Bulb is ON";
  status.classList.add("on");
  toggle.checked = true;
  isOn = true;
}

function turnOff() {
  clearBlink();
  bulb.classList.remove("on");
  status.textContent = "Bulb is OFF";
  status.classList.remove("on");
  toggle.checked = false;
  isOn = false;
}

function toggleBulb() {
  isOn ? turnOff() : turnOn();
}

function clearBlink() {
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
    blinkBtn.innerHTML = '<i class="fas fa-star"></i> Blink Mode';
  }
}

function toggleBlink() {
  if (blinkInterval) {
    clearBlink();
    isOn ? turnOn() : turnOff();
  } else {
    blinkInterval = setInterval(() => {
      bulb.classList.toggle("on");
    }, 500);

    blinkBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Blinking';
    status.textContent = "Bulb is BLINKING";
    status.classList.add("on");
    toggle.checked = true;
  }
}

/* Event Listeners */
toggle.addEventListener("change", toggleBulb);
turnOnBtn.addEventListener("click", turnOn);
turnOffBtn.addEventListener("click", turnOff);
blinkBtn.addEventListener("click", toggleBlink);
bulb.addEventListener("click", toggleBulb);

/* Keyboard Shortcuts */
document.addEventListener("keydown", (e) => {
  if (e.key === " ") toggleBulb();
  if (e.key.toLowerCase() === "b") toggleBlink();
  if (e.key.toLowerCase() === "o") turnOn();
  if (e.key.toLowerCase() === "f") turnOff();
});

/* Initial state */
turnOff();
