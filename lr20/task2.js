// Базовий клас для всіх елементів мережі
class GridElement {
  constructor(name) {
    this.name = name;
  }
}

// Станції (Виробляють енергію)
class PowerStation extends GridElement {
  constructor(name, power) {
    super(name);
    this.power = power; // Потужність у МВт
  }
  getOutput() {
    return this.power;
  }
}

// Сонячні панелі
class SolarPanel extends GridElement {
  constructor(name, dayPower) {
    super(name);
    this.dayPower = dayPower;
  }
  getOutput(isDay) {
    return isDay ? this.dayPower : 0;
  }
}

// Будинки (Споживають енергію)
class House extends GridElement {
  constructor(name, apartments) {
    super(name);
    this.apartments = apartments;
  }
  getConsumption(isDay) {
    // 4 кВт = 0.004 МВт вдень, 1 кВт = 0.001 МВт вночі
    const rate = isDay ? 0.004 : 0.001;
    return this.apartments * rate;
  }
}

// ЛЕП (Лінії електропередач)
class TransmissionLine extends GridElement {
  constructor(name, capacity, price) {
    super(name);
    this.capacity = capacity;
    this.price = price;
  }
}

// Функція розрахунку балансу
function calculatePowerGrid(elements, isDay) {
  let totalGeneration = 0;
  let totalConsumption = 0;
  let line = null;

  elements.forEach((el) => {
    if (el instanceof PowerStation) totalGeneration += el.getOutput();
    if (el instanceof SolarPanel) totalGeneration += el.getOutput(isDay);
    if (el instanceof House) totalConsumption += el.getConsumption(isDay);
    if (el instanceof TransmissionLine) line = el;
  });

  let balance = totalGeneration - totalConsumption;
  let money = Math.abs(balance) * line.price;

  console.log(`--- РЕЗУЛЬТАТИ (${isDay ? "ДЕНЬ" : "НІЧ"}) ---`);
  console.log(`Загальна генерація: ${totalGeneration.toFixed(2)} МВт`);
  console.log(`Загальне споживання: ${totalConsumption.toFixed(2)} МВт`);

  if (balance >= 0) {
    console.log(
      `Надлишок: ${balance.toFixed(2)} МВт. Можна продати за ${money.toFixed(2)} грн.`,
    );
  } else {
    console.log(
      `Дефіцит: ${Math.abs(balance).toFixed(2)} МВт. Треба купити на ${money.toFixed(2)} грн.`,
    );
  }
  console.log("---------------------------");
}

// Створюємо список об'єктів (Дані з умови)
const cityGrid = [
  new PowerStation("ТЕЦ-1", 80),
  new SolarPanel("Сонячне поле 1", 4),
  new House("Багатоповерхівка А", 300),
  new House("ЖК Полтава", 400),
  new TransmissionLine("Магістраль-Київ", 200, 3.5),
];

// Викликаємо розрахунок
calculatePowerGrid(cityGrid, true); // День
calculatePowerGrid(cityGrid, false); // Ніч
