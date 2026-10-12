const tasks = [
[86, "Проверка свободного места на диске", `
<input id="v86" type="number" value="18" placeholder="Свободно ГБ">
<button data-action="86">Проверить</button>`],

[87, "Определение уровня пользователя", `
<input id="v87" type="number" value="350" placeholder="Баллы">
<button data-action="87">Определить уровень</button>`],

[88, "Расчёт платы за парковку", `
<input id="v88" type="number" value="5" min="0" max="24" step="0.5" placeholder="Часы">
<button data-action="88">Рассчитать</button>`],

[89, "Определение сезона", `
<input id="v89" type="number" value="10" min="1" max="12" placeholder="Месяц">
<button data-action="89">Определить</button>`],

[90, "Проверка температуры сервера", `
<input id="v90" type="number" value="65" placeholder="Температура °C">
<button data-action="90">Проверить</button>`],

[91, "Сумма чисел, кратных трём", `
<button data-action="91">Рассчитать</button>`],

[92, "Вторая по величине оценка", `
<button data-action="92">Найти оценку</button>`],

[93, "Подсчёт количества букв", `
<button data-action="93">Подсчитать буквы a</button>`],

[94, "Поиск товаров дороже 10 000 ₸", `
<button data-action="94">Найти товары</button>`],

[95, "Формирование списка квадратов", `
<button data-action="95">Показать квадраты</button>`],

[96, "Анализ оценок группы", `
<button data-action="96">Рассчитать статистику</button>`],

[97, "Удаление отрицательных чисел", `
<button data-action="97">Удалить отрицательные</button>`],

[98, "Таблица степеней двойки", `
<button data-action="98">Показать степени</button>`],

[99, "Расчёт НДС", `
<input id="price99" type="number" value="100000" placeholder="Цена">
<input id="tax99" type="number" value="12" placeholder="НДС %">
<button data-action="99">Рассчитать</button>`],

[100, "Конвертер времени", `
<input id="v100" type="number" value="3675" min="0" placeholder="Секунды">
<button data-action="100">Перевести</button>`],

[101, "Каталог мобильных телефонов", `
<button data-action="101">Показать каталог</button>`],

[102, "Статистика успеваемости", `
<button data-action="102">Рассчитать статистику</button>`],

[103, "Генератор идентификаторов", `
<button data-action="103">Создать 5 ID</button>`],

[104, "Проверка сложности пароля", `
<input id="v104" type="password" value="Hello123!" placeholder="Пароль">
<button data-action="104">Проверить</button>`],

[105, "Учёт библиотечных книг", `
<input id="id105" type="number" value="1" min="1" placeholder="ID книги">
<button data-action="borrow105">Выдать</button>
<button data-action="return105">Вернуть</button>
<button data-action="show105">Показать каталог</button>`],

[106, "Калькулятор скидок", `
<input id="price106" type="number" min="0" value="10000" placeholder="Цена ₸">
<input id="discount106" type="number" min="0" max="100" value="15" placeholder="Скидка %">
<button data-action="106">Рассчитать</button>
<button data-action="clear106">Очистить</button>`],

[107, "Цифровые часы", `
<h2 id="clock107">00:00:00</h2>
<p id="date107"></p>`],

[108, "Игра «Угадай число»", `
<p>Компьютер загадал число от 1 до 100.</p>
<input id="guess108" type="number" min="1" max="100" placeholder="Ваш ответ">
<button data-action="guess108">Проверить</button>
<button data-action="new108">Новая игра</button>`],

[109, "Электронный опрос", `
<p>Выберите лучший язык программирования:</p>
<label><input type="radio" name="language109" value="JavaScript"> JavaScript</label><br>
<label><input type="radio" name="language109" value="Python"> Python</label><br>
<label><input type="radio" name="language109" value="Java"> Java</label><br>
<label><input type="radio" name="language109" value="C++"> C++</label><br>
<button data-action="109">Голосовать</button>
<button data-action="reset109">Сбросить голоса</button>`],

[110, "Электронное расписание занятий", `
<label>День недели:
<select id="day110">
<option>Понедельник</option>
<option>Вторник</option>
<option>Среда</option>
<option>Четверг</option>
<option>Пятница</option>
<option>Суббота</option>
<option>Воскресенье</option>
</select>
</label>
<button data-action="110">Показать расписание</button>
<button data-action="sort110">Сортировать по времени</button>
<div id="schedule110"></div>`]
];

const main = document.getElementById("tasks");

tasks.forEach(([id, title, html]) => {
    const section = document.createElement("section");
    section.className = "task";
    section.id = "task" + id;

    const heading = document.createElement("h2");
    heading.textContent = `Задание ${id}. ${title}`;

    const controls = document.createElement("div");
    controls.innerHTML = html;

    const result = document.createElement("div");
    result.className = "result";
    result.id = "result" + id;

    section.append(heading, controls, result);
    main.appendChild(section);
});

// 86. Свободное место
function checkSpace(n) {
    if (!Number.isFinite(n) || n < 0) return "Ошибка: неверное значение";
    if (n < 5) return "Критически мало памяти";
    if (n < 20) return "Мало свободного места";
    if (n < 100) return "Достаточно места";
    return "Много свободного места";
}

// 87. Уровень пользователя
function getLevel(n) {
    if (!Number.isFinite(n) || n < 0) return "Ошибка: неверные баллы";
    if (n < 100) return "Новичок";
    if (n < 300) return "Пользователь";
    if (n < 600) return "Продвинутый";
    return "Эксперт";
}

// 88. Парковка
function parkingCost(hours) {
    if (!Number.isFinite(hours) || hours <= 0 || hours > 24) {
        return "Введите время больше 0 и не более 24 часов";
    }
    return Math.min(300 + (Math.ceil(hours) - 1) * 200, 2000) + " ₸";
}

// 89. Сезон
function getSeason(month) {
    if (!Number.isInteger(month) || month < 1 || month > 12) {
        return "Некорректный номер месяца";
    }
    if ([12, 1, 2].includes(month)) return "Зима";
    if ([3, 4, 5].includes(month)) return "Весна";
    if ([6, 7, 8].includes(month)) return "Лето";
    return "Осень";
}

// 90. Температура
function checkTemperature(t) {
    if (!Number.isFinite(t)) return "Введите корректную температуру";
    if (t < 40) return "Нормальная температура";
    if (t < 70) return "Повышенная температура";
    return "ВНИМАНИЕ! Опасный перегрев";
}

// Данные заданий
const scores92 = [75, 92, 88, 65, 98, 83];
const prices94 = [5000, 12000, 8000, 25000, 17000, 3000];
const grades96 = [95, 78, 45, 88, 67, 92, 35, 74, 81, 50];
const numbers97 = [-4, 8, -12, 15, 0, 22, -3, 9];

const phones101 = [
    {name: "Samsung", price: 280000, stock: 5},
    {name: "Xiaomi", price: 160000, stock: 12},
    {name: "Apple", price: 520000, stock: 3},
    {name: "Honor", price: 190000, stock: 8}
];

function analyzeScores(scores) {
    const passed = scores.filter(n => n >= 50).length;
    return {
        average: scores.length
            ? scores.reduce((a, b) => a + b, 0) / scores.length
            : 0,
        passed,
        failed: scores.length - passed,
        successRate: scores.length ? passed / scores.length * 100 : 0
    };
}

let idCounter103 = 0;

function generateStudentId() {
    idCounter103++;
    return "ST-" + String(idCounter103).padStart(4, "0");
}

function checkPasswordStrength(password) {
    if (password.length < 8) return "Слабый";

    const letters = /[a-zA-Zа-яА-ЯёЁ]/.test(password);
    const digits = /[0-9]/.test(password);
    const special = /[^a-zA-Zа-яА-ЯёЁ0-9]/.test(password);

    if (letters && digits && special) return "Сложный";
    if (letters && digits) return "Хороший";
    if (letters && !digits && !special) return "Средний";
    return "Слабый";
}

const books105 = [
    {id: 1, title: "JavaScript", copies: 5},
    {id: 2, title: "Python", copies: 3},
    {id: 3, title: "HTML", copies: 7},
    {id: 4, title: "SQL", copies: 2}
];

function findBook(id) {
    return books105.find(book => book.id === id);
}

function borrowBook(id) {
    const book = findBook(id);
    if (!book) return "Книга не найдена";
    if (book.copies <= 0) return "Книг нет в наличии";
    book.copies--;
    return "Выдана книга: " + book.title;
}

function returnBook(id) {
    const book = findBook(id);
    if (!book) return "Книга не найдена";
    book.copies++;
    return "Возвращена книга: " + book.title;
}

// 110. Расписание
const schedule110 = [
    {day: "Понедельник", subject: "JavaScript", time: "08:30"},
    {day: "Понедельник", subject: "HTML и CSS", time: "10:10"},
    {day: "Вторник", subject: "Базы данных", time: "08:30"},
    {day: "Среда", subject: "Программирование", time: "12:00"}
];

let sortSchedule = false;

function showSchedule() {
    const day = document.getElementById("day110").value;
    let lessons = schedule110.filter(item => item.day === day);

    if (sortSchedule) {
        lessons.sort((a, b) => a.time.localeCompare(b.time));
    }

    const container = document.getElementById("schedule110");
    container.replaceChildren();

    if (lessons.length === 0) {
        container.textContent = "На выбранный день занятий нет";
        return;
    }

    const table = document.createElement("table");
    table.innerHTML = "<tr><th>Время</th><th>Предмет</th></tr>";

    lessons.forEach(item => {
        const tr = document.createElement("tr");
        const time = document.createElement("td");
        const subject = document.createElement("td");

        time.textContent = item.time;
        subject.textContent = item.subject;

        tr.append(time, subject);
        table.appendChild(tr);
    });

    container.appendChild(table);
}

// Все кнопки
document.addEventListener("click", function(event) {
    const action = event.target.dataset.action;
    if (!action) return;

    const value = id => document.getElementById("v" + id)?.value;
    const output = id => document.getElementById("result" + id);
    const show = (id, text) => output(id).textContent = text;

    switch (action) {
        case "86":
            show(86, checkSpace(Number(value(86))));
            break;

        case "87":
            show(87, getLevel(Number(value(87))));
            break;

        case "88":
            show(88, parkingCost(Number(value(88))));
            break;

        case "89":
            show(89, getSeason(Number(value(89))));
            break;

        case "90":
            show(90, checkTemperature(Number(value(90))));
            break;

        case "91": {
            let sum = 0, count = 0;
            for (let i = 1; i <= 60; i++) {
                if (i % 3 === 0) {
                    sum += i;
                    count++;
                }
            }
            show(91, `Сумма: ${sum}\nКоличество: ${count}`);
            break;
        }

        case "92": {
            const sorted = [...scores92].sort((a, b) => b - a);
            const unique = [...new Set(sorted)];
            show(92, `Оценки: ${sorted.join(", ")}\n` +
                `Вторая оценка: ${sorted[1]}\n` +
                `Вторая уникальная оценка: ${unique[1]}`);
            break;
        }

        case "93": {
            const text = "javascript programming";
            let count = 0;
            for (const char of text) {
                if (char === "a") count++;
            }
            show(93, `Строка: ${text}\nКоличество букв a: ${count}`);
            break;
        }

        case "94": {
            const expensive = prices94.filter(n => n > 10000);
            show(94, `Товары: ${expensive.join(", ")} ₸\n` +
                `Количество: ${expensive.length}\n` +
                `Общая стоимость: ${expensive.reduce((a, b) => a + b, 0)} ₸`);
            break;
        }

        case "95":
            show(95, Array.from({length: 15}, (_, i) => (i + 1) ** 2).join(", "));
            break;

        case "96": {
            const stats = analyzeScores(grades96);
            show(96, `Средний балл: ${stats.average.toFixed(2)}\n` +
                `Оценок от 90: ${grades96.filter(n => n >= 90).length}\n` +
                `Ниже 50: ${grades96.filter(n => n < 50).length}\n` +
                `Максимум: ${Math.max(...grades96)}\n` +
                `Минимум: ${Math.min(...grades96)}`);
            break;
        }

        case "97": {
            const filtered = numbers97.filter(n => n >= 0);
            show(97, `Исходный массив: ${numbers97.join(", ")}\n` +
                `Новый массив: ${filtered.join(", ")}\n` +
                `Исключено: ${numbers97.length - filtered.length}`);
            break;
        }

        case "98":
            show(98, Array.from({length: 11}, (_, i) =>
                `2^${i} = ${2 ** i}`).join("\n"));
            break;

        case "99": {
            const p = document.getElementById("price99").value;
            const t = document.getElementById("tax99").value;
            const price = Number(p), rate = Number(t);

            if (p.trim() === "" || t.trim() === "" ||
                !Number.isFinite(price) || !Number.isFinite(rate) ||
                price < 0 || rate < 0) {
                show(99, "Введите корректные цену и ставку налога.");
                break;
            }

            const tax = price * rate / 100;
            show(99, `НДС: ${tax.toFixed(2)} ₸\n` +
                `Цена с НДС: ${(price + tax).toFixed(2)} ₸`);
            break;
        }

        case "100": {
            const raw = value(100);
            const seconds = Number(raw);

            if (raw.trim() === "" || !Number.isInteger(seconds) || seconds < 0) {
                show(100, "Введите целое неотрицательное число секунд.");
                break;
            }

            show(100, `${Math.floor(seconds / 3600)} ч ` +
                `${Math.floor((seconds % 3600) / 60)} мин ${seconds % 60} сек`);
            break;
        }

        case "101": {
            const totalStock = phones101.reduce((s, p) => s + p.stock, 0);
            const totalValue = phones101.reduce((s, p) => s + p.price * p.stock, 0);
            const mostExpensive = phones101.reduce((a, b) =>
                a.price > b.price ? a : b);
            const cheaper = phones101.filter(p => p.price < 200000);

            show(101,
                phones101.map(p => `${p.name}: ${p.price} ₸, склад: ${p.stock}`).join("\n") +
                `\nСамый дорогой: ${mostExpensive.name}` +
                `\nДешевле 200000 ₸: ${cheaper.map(p => p.name).join(", ")}` +
                `\nВсего телефонов: ${totalStock}` +
                `\nСтоимость склада: ${totalValue} ₸`);
            break;
        }

        case "102": {
            const stats = analyzeScores([95, 78, 45, 88, 35, 60]);
            show(102, `Средний балл: ${stats.average.toFixed(2)}\n` +
                `Сдали: ${stats.passed}\nНе сдали: ${stats.failed}\n` +
                `Успеваемость: ${stats.successRate.toFixed(2)}%`);
            break;
        }

        case "103":
            show(103, Array.from({length: 5}, () => generateStudentId()).join("\n"));
            break;

        case "104":
            show(104, checkPasswordStrength(value(104)));
            break;

        case "borrow105":
            show(105, borrowBook(Number(document.getElementById("id105").value)));
            break;

        case "return105":
            show(105, returnBook(Number(document.getElementById("id105").value)));
            break;

        case "show105":
            show(105, books105.map(b =>
                `${b.id}. ${b.title}: ${b.copies} шт.`).join("\n"));
            break;

        case "106": {
            const pInput = document.getElementById("price106");
            const dInput = document.getElementById("discount106");
            const p = Number(pInput.value), d = Number(dInput.value);

            if (pInput.value.trim() === "" || dInput.value.trim() === "" ||
                !Number.isFinite(p) || !Number.isFinite(d) ||
                p < 0 || d < 0 || d > 100) {
                show(106, "Введите корректную цену и скидку от 0 до 100%.");
                break;
            }

            show(106, `Скидка: ${(p * d / 100).toFixed(2)} ₸\n` +
                `Итоговая цена: ${(p * (1 - d / 100)).toFixed(2)} ₸`);
            break;
        }

        case "clear106":
            document.getElementById("price106").value = "";
            document.getElementById("discount106").value = "";
            show(106, "");
            break;

        case "guess108": {
            const input = document.getElementById("guess108");
            const n = Number(input.value);

            if (input.value.trim() === "" || !Number.isInteger(n) || n < 1 || n > 100) {
                show(108, "Введите целое число от 1 до 100.");
                break;
            }
            if (window.finished108) {
                show(108, "Игра окончена. Нажмите «Новая игра».");
                break;
            }

            window.attempts108++;
            if (n < window.secret108) show(108, "Больше!");
            else if (n > window.secret108) show(108, "Меньше!");
            else {
                show(108, `Правильно! Попыток: ${window.attempts108}`);
                window.finished108 = true;
            }
            break;
        }

        case "new108":
            window.secret108 = Math.floor(Math.random() * 100) + 1;
            window.attempts108 = 0;
            window.finished108 = false;
            document.getElementById("guess108").value = "";
            show(108, "Началась новая игра!");
            break;

        case "109": {
            const selected = document.querySelector('input[name="language109"]:checked');
            if (!selected) {
                show(109, "Выберите язык программирования.");
                break;
            }

            let votes;
            try {
                votes = JSON.parse(localStorage.getItem("votes109")) || {};
            } catch {
                votes = {};
            }

            ["JavaScript", "Python", "Java", "C++"].forEach(k => {
                if (!Number.isSafeInteger(votes[k]) || votes[k] < 0) votes[k] = 0;
            });

            votes[selected.value]++;
            localStorage.setItem("votes109", JSON.stringify(votes));

            const max = Math.max(...Object.values(votes));
            show(109, Object.entries(votes).map(([name, count]) =>
                `${name}: ${count} голосов${count === max ? " — лидер" : ""}`
            ).join("\n"));
            break;
        }

        case "reset109":
            localStorage.setItem("votes109",
                JSON.stringify({JavaScript: 0, Python: 0, Java: 0, "C++": 0}));
            show(109, "Голоса сброшены.");
            break;

        case "110":
            showSchedule();
            break;

        case "sort110":
            sortSchedule = true;
            showSchedule();
            break;
    }
});

// Запуск часов
function updateClock107() {
    const now = new Date();
    const pad = n => String(n).padStart(2, "0");

    document.getElementById("clock107").textContent =
        `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    document.getElementById("date107").textContent =
        now.toLocaleDateString("ru-RU");
}
updateClock107();
setInterval(updateClock107, 1000);

// Начальное состояние игры
window.secret108 = Math.floor(Math.random() * 100) + 1;
window.attempts108 = 0;
window.finished108 = false;