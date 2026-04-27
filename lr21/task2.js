function startGame() {
  let playAgain = true;

  while (playAgain) {
    // 1. Генеруємо число від 0 до 50
    const secretNumber = Math.floor(Math.random() * 51);
    let attempts = 0;
    let guessed = false;

    alert("Я загадав число від 0 до 50. Спробуй вгадати!");

    while (!guessed) {
      let input = prompt("Введіть ваше число:");

      // Якщо натиснули "Скасувати"
      if (input === null) return;

      let userNumber = parseInt(input);
      attempts++;

      // Отримуємо поточну дату для логування в консоль
      const now = new Date();
      const timestamp = now.toLocaleString("uk-UA");

      if (userNumber === secretNumber) {
        alert(`За ${attempts} спроб ви вгадали число ${secretNumber}`);
        console.log(
          `${timestamp} Спроба ${attempts}: число ${userNumber} - ВІРНО!`,
        );
        guessed = true;
      } else {
        // Визначаємо підказку через модуль різниці
        let diff = Math.abs(secretNumber - userNumber);
        let hint = "";

        if (diff > 20) hint = "холодно";
        else if (diff > 10) hint = "тепло";
        else hint = "гаряче";

        alert(`${hint.toUpperCase()}! Спробуйте ще раз.`);
        console.log(
          `${timestamp} Спроба ${attempts}: число ${userNumber} - не вірно`,
        );
      }
    }

    playAgain = confirm("Бажаєте зіграти ще раз?");
  }
}
