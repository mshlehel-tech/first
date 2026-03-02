// ==========================================
// ЗАВДАННЯ 1: Прості числа від 0 до 100 (while)
// ==========================================
console.log("--- Завдання 1: Прості числа ---");
let num = 2;
while (num <= 100) {
  let isPrime = true;
  let divisor = 2;
  while (divisor <= Math.sqrt(num)) {
    if (num % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }
  if (isPrime) {
    console.log(num);
  }
  num++;
}

// ==========================================
// ЗАВДАННЯ 2: Парні/непарні від 0 до 10 (do...while)
// ==========================================
console.log("\n--- Завдання 2: Класифікація чисел ---");
let k = 0;
do {
  if (k === 0) {
    console.log(k + " - це нуль");
  } else if (k % 2 === 0) {
    console.log(k + " - парне число");
  } else {
    console.log(k + " - непарне число");
  }
  k++;
} while (k <= 10);

// ==========================================
// ЗАВДАННЯ 3: Ділення 10000 (Цикл)
// ==========================================
console.log("\n--- Завдання 3: Ітераційне ділення ---");
let numb = 10000;
let counter = 0;
let result = numb;

while (result >= 50) {
  result = result / 2;
  counter++;
}
console.log("Кінцеве число (result): " + result);
console.log("Кількість ітерацій (counter): " + counter);

// ==========================================
// ЗАВДАННЯ 4: Пори року (prompt/alert)
// ==========================================
let monthInput = prompt("Завдання 4: Введіть номер місяця від 1 до 12:");
let month = parseInt(monthInput);
let season = "";
let monthName = "";

if (month === 12 || month === 1 || month === 2) {
  season = "зима";
  if (month === 12) monthName = "Грудень";
  else if (month === 1) monthName = "Січень";
  else monthName = "Лютий";
} else if (month >= 3 && month <= 5) {
  season = "весна";
  if (month === 3) monthName = "Березень";
  else if (month === 4) monthName = "Квітень";
  else monthName = "Травень";
} else if (month >= 6 && month <= 8) {
  season = "літо";
  if (month === 6) monthName = "Червень";
  else if (month === 7) monthName = "Липень";
  else monthName = "Серпень";
} else if (month >= 9 && month <= 11) {
  season = "осінь";
  if (month === 9) monthName = "Вересень";
  else if (month === 10) monthName = "Жовтень";
  else monthName = "Листопад";
} else {
  season = "невідома";
  monthName = "некоректне число";
}

alert("Місяць: " + monthName + "\nПора року: " + season);

// ==========================================
// ЗАВДАННЯ 5: Цельсій у Фаренгейт
// ==========================================
let tc = prompt("Завдання 5: Введіть температуру в градусах Цельсія (°C):");
let tf = (9 / 5) * parseFloat(tc) + 32;
alert(tc + "°C відповідає " + tf.toFixed(2) + "°F за Фаренгейтом");

// ==========================================
// ЗАВДАННЯ 6: День тижня
// ==========================================
let dayNumber = prompt("Завдання 6: Введіть число від 1 до 7:");
let dayName = "";

switch (parseInt(dayNumber)) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  case 4:
    dayName = "Четвер";
    break;
  case 5:
    dayName = "П'ятниця";
    break;
  case 6:
    dayName = "Субота";
    break;
  case 7:
    dayName = "Неділя";
    break;
  default:
    dayName = "Помилка (введено некоректне число)";
}

document.write("<h3>Результат завдання №6:</h3>");
document.write("<p>Обраний день тижня: <strong>" + dayName + "</strong></p>");
