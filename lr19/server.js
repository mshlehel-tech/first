const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Дозволяємо серверу розуміти JSON-дані, які ми будемо надсилати через AJAX
app.use(express.json());

// Роздаємо статичні файли (наш JS)
app.use("/js", express.static(path.join(__dirname, "js")));

// Головна сторінка
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ендпоінт для AJAX запиту (тут відбувається магія)
app.post("/calculate", (req, res) => {
  const number = req.body.number; // Отримуємо число від клієнта

  if (isNaN(number)) {
    return res.status(400).json({ error: "Це не число!" });
  }

  const square = number * number; // Рахуємо квадрат

  // Відправляємо відповідь назад браузеру у форматі JSON
  res.json({ result: square });
});

app.listen(PORT, () => {
  console.log(`Сервер AJAX запущено: http://localhost:${PORT}`);
});
