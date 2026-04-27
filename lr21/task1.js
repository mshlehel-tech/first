function showCurrentTime() {
  const now = new Date();

  // Форматуємо час (години, хвилини, секунди) з додаванням нуля попереду
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Масиви для назв днів та місяців
  const days = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const dayName = days[now.getDay()];
  const dayOfMonth = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  // Формуємо фінальний рядок
  const result = `${hours}:${minutes}:${seconds}, ${dayName}, ${dayOfMonth} ${monthName} ${year} року`;

  console.log("Поточний час:");
  console.log(result);
}

// Викликаємо функцію відразу при завантаженні
showCurrentTime();
