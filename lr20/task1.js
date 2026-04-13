// Дані для перекладу в одному об'єкті
const weekData = {
  ua: [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

let language;

// 1. Питаємо мову, поки не введуть правильно
while (true) {
  let input = prompt("Виберіть мову 'ua' або 'en'?");
  if (input) {
    language = input.toLowerCase(); // Робимо літери маленькими (eN -> en)
    if (language === "ua" || language === "en") break;
  }
  alert("Помилка! Неправильний ввід даних. Спробуйте ще раз.");
}

// 2. Визначаємо текст питання залежно від мови
let question =
  language === "ua"
    ? "Введіть номер дня неділі від 1 до 7?"
    : "Enter the day number of the week (from 1 to 7)?";

let dayNumber;

// 3. Питаємо номер дня, поки не введуть 1-7
while (true) {
  let input = prompt(question);
  dayNumber = parseInt(input);
  if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 7) break;

  let errorMsg =
    language === "ua"
      ? "Помилка! Введіть число від 1 до 7."
      : "Error! Enter a number from 1 to 7.";
  alert(errorMsg);
}

// 4. Виводимо результат
alert(weekData[language][dayNumber - 1]);
