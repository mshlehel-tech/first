// =======================================================
// Підключення необхідних модулів
// =======================================================
const { src, dest, watch, parallel, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Модуль 'del' тепер використовується для асинхронного видалення
const del = require("del");

// =======================================================
// ТАСКИ (Завдання 1.3)
// =======================================================

// 1. Таск для SCSS (препроцесор, конкатенація, оптимізація CSS, перейменування)
function sass_task() {
  // Змінено шлях для пошуку ВСІХ файлів SCSS/SASS
  return src("src/scss/*.{scss,sass}")
    .pipe(sass().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist/css"));
}

// 2. Таск для JS (конкатенація, оптимізація JS/uglification)
function js_task() {
  // Обробляє всі файли JS у папці src/js
  return src("src/js/*.js")
    .pipe(concat("main.js")) // Конкатенація файлів у main.js
    .pipe(uglify()) // Оптимізація JS (стиснення)
    .pipe(rename({ suffix: ".min" })) // Перейменування
    .pipe(dest("dist/js"));
}

// 3. Таск для оптимізації зображень
function images_task() {
  return src("src/img/*")
    .pipe(imagemin()) // Оптимізація зображень
    .pipe(dest("dist/img"));
}

// 4. ТАСК ДЛЯ ВИДАЛЕННЯ (clean_task) - ВИПРАВЛЕНО
// Видаляє папку dist перед кожною збіркою, використовуючи коректний асинхронний синтаксис del.
async function clean_task() {
  // Використовуємо .deleteAsync() для коректного асинхронного видалення
  return await del.deleteAsync("dist");
}

// 5. Таск для копіювання HTML
function html_task() {
  return src("src/*.html").pipe(dest("dist"));
}

// 6. Таск для автоматичного перегляду файлів (Watcher)
function watch_task() {
  // Автоматична перезбірка при зміні SCSS
  watch("src/scss/**/*.scss", sass_task);
  // Автоматична перезбірка при зміні JS
  watch("src/js/*.js", js_task);
  // Автоматичне копіювання при зміні HTML
  watch("src/*.html", html_task);
}

// =======================================================
// Експорт тасків
// =======================================================

// Основний таск за замовчуванням (gulp) - запускає 'clean', 'parallel tasks' та 'watch'
exports.default = series(
  clean_task,
  parallel(sass_task, js_task, images_task, html_task),
  watch_task
);

// Таск для фінальної збірки без спостерігача (gulp build)
exports.build = series(
  clean_task,
  parallel(sass_task, js_task, images_task, html_task)
);
