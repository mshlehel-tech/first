document.getElementById("sendBtn").addEventListener("click", async () => {
  const number = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("result");

  if (!number) {
    resultDiv.innerText = "Будь ласка, введіть число!";
    return;
  }

  try {
    // Відправляємо AJAX запит на сервер за допомогою fetch
    const response = await fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: Number(number) }),
    });

    const data = await response.json();

    if (data.result !== undefined) {
      resultDiv.innerText = `Сервер каже: квадрат числа ${number} дорівнює ${data.result}`;
    } else {
      resultDiv.innerText = "Помилка сервера!";
    }
  } catch (error) {
    console.error("Помилка:", error);
    resultDiv.innerText = "Не вдалося з'єднатися з сервером.";
  }
});
