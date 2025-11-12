// Підключаємо фреймворк Express
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Установлюємо шлях до статичних файлів (наш HTML-файл розмітки)
app.use(express.static(path.join(__dirname, "..")));

// =======================================================
// ФУНКЦІЯ ДЛЯ СТВОРЕННЯ МАРШРУТІВ (РОУТІВ)
// =======================================================

/**
 * Створює маршрут для повернення основного HTML-файлу з папки ЛР.
 * @param {number} labNumber - Номер лабораторної роботи (1, 3, 4, 5, 6, 7, 8, 9).
 * @param {string} fileName - Назва основного HTML-файлу в цій папці.
 */
function setupLabRoute(labNumber, fileName) {
  const route = `/lab${labNumber}`;
  const labFolder = `lb${labNumber}`;

  app.get(route, (req, res) => {
    // Шлях: .../server/pages/lbX/fileName
    res.sendFile(path.join(__dirname, "pages", labFolder, fileName), (err) => {
      if (err) {
        console.error(
          `Помилка завантаження файлу для ЛР${labNumber}: ${err.message}`
        );
        // Повертаємо 404, якщо файл не знайдено
        res
          .status(404)
          .send(`Файл ${fileName} для ЛР${labNumber} не знайдено.`);
      }
    });
  });
}

// =======================================================
// ОСНОВНІ РОУТИ ДЛЯ ВСІХ ЛАБОРАТОРНИХ РОБІТ
// =======================================================

// Роут для кореневої сторінки: повертає розмітку з ЛР10
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "ShlehelLab10-1.htm"));
});

// Налаштування роутів для всіх попередніх ЛР:
setupLabRoute(1, "ShlehelLab01-9.htm");
setupLabRoute(3, "ShlehelLab03-5.htm");
setupLabRoute(4, "ShlehelLab04-3.htm");
setupLabRoute(5, "ShlehelLab05-3.htm");
setupLabRoute(6, "ShlehelLab06-6.htm");
setupLabRoute(7, "ShlehelLab07-4.htm");
setupLabRoute(8, "ShlehelLab08-3.htm");
setupLabRoute(9, "ShlehelLab09-3.htm");

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(
    `Доступні роути: /lab1, /lab3, /lab4, /lab5, /lab6, /lab7, /lab8, /lab9`
  );
});
