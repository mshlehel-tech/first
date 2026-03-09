// --- Завдання 1.1: Картинки ---
document.querySelectorAll(".task-img").forEach((img) => {
  img.onclick = function () {
    console.log("Ширина картинки: " + this.getAttribute("width"));
  };
});

// --- Завдання 1.2: Посилання (href -> title) ---
const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseover", function handleMouse() {
    this.title = this.href;
    // Завдання вимагає показати removeEventListener,
    // наприклад, видалимо обробник після першого наведення:
    // this.removeEventListener('mouseover', handleMouse);
  });
});

// --- Завдання 1.3: Input -> id="demo" ---
const inputs = document.querySelectorAll(".val-input");
const demo = document.getElementById("demo");
inputs.forEach((input) => {
  input.addEventListener("click", function () {
    demo.innerText = this.value;
  });
});

// --- Завдання 1.4: Перший клік - console, другий - alert ---
const oneTimeInputs = document.querySelectorAll(".one-time-input");
oneTimeInputs.forEach((input) => {
  let hasClicked = false;
  input.onclick = function () {
    if (!hasClicked) {
      console.log("Перший клік:", this.value);
      hasClicked = true;
    } else {
      alert("Повторний клік: " + this.value);
    }
  };
});

// --- Завдання 1.5: Квадрат числа ---
const numberPs = document.querySelectorAll(".number-p");
numberPs.forEach((p) => {
  p.onclick = function () {
    let num = parseInt(this.innerText);
    this.innerText = num * num;
  };
});

// --- Завдання 2: Чергування кольору (Red <-> Green) ---
const boxes = document.querySelectorAll(".color-box");

function paintRed() {
  this.style.backgroundColor = "red";
  this.removeEventListener("click", paintRed);
  this.addEventListener("click", paintGreen);
}

function paintGreen() {
  this.style.backgroundColor = "green";
  this.removeEventListener("click", paintGreen);
  this.addEventListener("click", paintRed);
}

boxes.forEach((box) => {
  box.addEventListener("click", paintRed);
});
