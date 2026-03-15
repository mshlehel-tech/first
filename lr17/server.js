const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// ЦЕЙ РЯДОК МАЄ БУТИ ОБОВ'ЯЗКОВО:
app.use("/js", express.static(path.join(__dirname, "js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Сервер працює: http://localhost:${PORT}`);
});
