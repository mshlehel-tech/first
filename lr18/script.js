// --- Завдання 1: Залишок від ділення ---
const seconds = (total) => total % 60;
console.log("№1. Залишок від 125 секунд:", seconds(125));

// --- Завдання 2: Периметр багатокутника ---
const perimeter = (side, count) => side * count;
console.log("№2. Периметр (сторона 5, кутів 6):", perimeter(5, 6));

// --- Завдання 3: FizzBuzz ---
function fizzBuzz(n) {
  console.log("№3. FizzBuzz до " + n + ":");
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
}
fizzBuzz(15);

// --- Завдання 4: Середнє арифметичне ---
const calculate = (a, b, c) =>
  console.log("№4. Середнє арифметичне (10, 20, 30):", (a + b + c) / 3);
calculate(10, 20, 30);

// --- Завдання 5: Перевірка подільності (3 способи) ---
const isDivisibleIf = (n, x, y) => {
  if (n % x === 0 && n % y === 0) return true;
  else return false;
};
const isDivisibleTernary = (n, x, y) =>
  n % x === 0 && n % y === 0 ? true : false;
const isDivisibleShort = (n, x, y) => n % x === 0 && n % y === 0;

console.log("№5. Чи ділиться 12 на 3 і 4 (Short):", isDivisibleShort(12, 3, 4));

// --- Завдання 6: Аналіз масиву ---
function analyzeArray(n) {
  let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((a, b) => a + b, 0);
  let odd = arr.filter((num) => num % 2 !== 0);
  console.log("№6. Аналіз масиву:", {
    Масив: arr,
    Макс: max,
    Мін: min,
    Сума: sum,
    Середнє: sum / n,
    Непарні: odd,
  });
}
analyzeArray(10);

// --- Завдання 7: Матриця 5х5 ---
function matrixTask() {
  let matrix = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 20 - 10)),
  );
  console.log("№7. Матриця до змін:");
  console.table(matrix);

  for (let i = 0; i < 5; i++) {
    if (matrix[i][i] < 0) matrix[i][i] = 0;
    else if (matrix[i][i] > 0) matrix[i][i] = 1;
  }
  console.log("№7. Матриця після змін (головна діагональ):");
  console.table(matrix);
}
matrixTask();

// --- Завдання 8: Функції арифметичних операцій ---
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? "Помилка: ділення на нуль" : a / b);

function userCalculator() {
  alert("Завдання №8: Запуск калькулятора");
  let num1 = +prompt("Введіть перше число:");
  let num2 = +prompt("Введіть друге число:");
  let operation = prompt("Оберіть операцію: +, -, *, /");

  let result;
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = sub(num1, num2);
      break;
    case "*":
      result = mul(num1, num2);
      break;
    case "/":
      result = div(num1, num2);
      break;
    default:
      result = "Невідома операція";
  }
  alert("Результат: " + result);
  console.log("№8. Результат калькулятора:", result);
}

// --- Завдання 9: Аналіз числа ---
function analyzeNumber(num) {
  let isPositive = num >= 0 ? "Позитивне" : "Негативне";

  let isPrime = num > 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  let divisors = [2, 3, 5, 6, 9].filter((x) => num % x === 0);

  console.log(`№9. Аналіз числа ${num}:`, {
    Тип: isPositive,
    "Чи просте?": isPrime ? "Так" : "Ні",
    "Ділиться без залишку на":
      divisors.length > 0 ? divisors : "ні на що з переліку",
  });
}
analyzeNumber(18);

// --- Завдання 10: Перевернутий масив квадратів ---
function transformArray(arr) {
  // Копіюємо масив, перевертаємо і обробляємо
  return [...arr]
    .reverse()
    .map((item) => (typeof item === "number" ? item ** 2 : item));
}
let myArr = [1, "Полтава", 3, 4, "IT"];
console.log("№10. Трансформація масиву:", transformArray(myArr));

// --- Завдання 11: Видалення дублікатів ---
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const duplicates = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("№11. Без дублікатів:", removeDuplicates(duplicates));

// --- ЗАПУСК КАЛЬКУЛЯТОРА (Завдання 8) ---
// Ця функція викличе вікна prompt у браузері
userCalculator();
