// 1. Створення елементів через JS
const body = document.body;
const container = document.createElement("div");
const display = document.createElement("div");
const buttonsGrid = document.createElement("div");

// Налаштування дисплею
display.innerText = "0";

// Масив кнопок калькулятора
const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

// 2. Додавання стилів через JS
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.margin = "0";
body.style.backgroundColor = "#f0f0f0";
body.style.fontFamily = "Arial, sans-serif";

container.style.backgroundColor = "#000";
container.style.padding = "20px";
container.style.borderRadius = "20px";
container.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";

display.style.color = "#fff";
display.style.fontSize = "48px";
display.style.textAlign = "right";
display.style.marginBottom = "20px";
display.style.padding = "10px";

buttonsGrid.style.display = "grid";
buttonsGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
buttonsGrid.style.gap = "10px";

// Функція для адаптивності
function setResponsive() {
  const width = window.innerWidth;
  if (width < 480) {
    // Телефон
    container.style.width = "250px";
    display.style.fontSize = "30px";
  } else if (width < 1024) {
    // Планшет
    container.style.width = "350px";
    display.style.fontSize = "48px";
  } else {
    // Ноутбук
    container.style.width = "450px";
    display.style.fontSize = "60px";
  }
}

window.onresize = setResponsive;
setResponsive();

// Створення кнопок
buttons.forEach((text) => {
  const btn = document.createElement("button");
  btn.innerText = text;

  // Стилі кнопок
  btn.style.border = "none";
  btn.style.borderRadius = "50%";
  btn.style.fontSize = "20px";
  btn.style.cursor = "pointer";
  btn.style.height = "60px";
  btn.style.width = "60px";

  if (["/", "*", "-", "+", "="].includes(text)) {
    btn.style.backgroundColor = "#ff9500";
    btn.style.color = "white";
  } else if (["AC", "+/-", "%"].includes(text)) {
    btn.style.backgroundColor = "#a5a5a5";
    btn.style.color = "black";
  } else {
    btn.style.backgroundColor = "#333";
    btn.style.color = "white";
  }

  if (text === "0") {
    btn.style.gridColumn = "span 2";
    btn.style.borderRadius = "30px";
    btn.style.width = "auto";
  }

  // Логіка (проста реалізація)
  btn.onclick = () => {
    if (text === "AC") display.innerText = "0";
    else if (text === "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    } else {
      if (display.innerText === "0") display.innerText = text;
      else display.innerText += text;
    }
  };

  buttonsGrid.appendChild(btn);
});

// Збірка конструктора
container.appendChild(display);
container.appendChild(buttonsGrid);
body.appendChild(container);
