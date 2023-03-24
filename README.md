First!!!!

Щоб запустили термінал використовуємо комбінацію ctrl+j на Windows.

1. Встановити всі залежності (ініціалізувати проект) в терминалі команда
   `npm install`. Перевірити чи з'явилась папка node_modules
2. Що запустити розробку виконай в терміналі команду `npm start`.
3. Перейди в браузере по адресу [http://localhost:1234] і go.

Info!!!!

JS

В кожній папці наприклад js є підпапки які будуть називатись - ім'я
папки-index.js. Підключаємо нові файли js тільки в ці файли. В свою чергу
налаштовано в папці js є main.js в які підключені файли ім'я папки-index.js в
які підключені всі файли з підпапок. І файл main.js з папки js підключений до
index.js в src.

ВСЕ ЩО НЕ ВІДНОСИТЬ ДО API, COMMON, DOM додаємо в Other імпорти підключаємо в
other-index.js.

HTML

src/partials створюємо необхідні html файли та додаємо імпорти до файлу
partials-index.html. Який підключений до основного index.hml в src.

SASS

В кожній підпапці є свій ім'я-index.scss в які підключаємо всі імпорти з данної
папки. ім'я-index.scss додані до index.scss.

Додано: Body styles. Container. Resets. Components : Можемо створювати файли зі
стилями на кнопку, модалку, та інше. Layouts: Папка для стилізації html. Utils:
Створено mixin для line-height та font-size, як використовувати : @include
lh(16px, 12px, 12px); Vars: прошу звернути особливу увагу, використовуємо
функції getColor(тут колір з colors); getSize(desktop(тут назву з breakpoints))
Приклади використання:

@media screen and (min-width: getSize(tablet)) / background-color:
getColor(white-text-color); / color: getColor(primary-text-color); / transition:
color getProperty(time) getProperty(cubic);
