const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8375189068:AAFTHv3Rr0kTwkkTV0YOyxgAe-tlA9q28LM";

const bot = new TelegramBot(TOKEN, {
    polling: true
});

// ======================
// МАССИВЫ ОТВЕТОВ
// ======================

const helloAnswers = [
    "Привет ❤️",
    "Хееей 🌸",
    "Я ждал твоего сообщения 🥺",
    "Приветик ✨",
    "Солнышко написало ☀️"
];

const howAnswers = [
    "Теперь хорошо ❤️",
    "Лучше после твоего сообщения 🌸",
    "Скучал по тебе 🥺",
    "Отлично ✨",
    "Уже лучше ❤️"
];

const loveAnswers = [
    "Я тебя тоже люблю ❤️",
    "Очень сильно ❤️",
    "Безумно люблю 🌸",
    "Ты самая лучшая ✨",
    "Ты очень важна для меня 🥺"
];

const sadAnswers = [
    "Не грусти 🥺",
    "Я рядом ❤️",
    "Обнимаю тебя 🌸",
    "Всё будет хорошо ✨",
    "Ты справишься ❤️"
];

const morningAnswers = [
    "Доброе утро ☀️",
    "Хорошего тебе дня ❤️",
    "Ты сегодня прекрасна 🌸",
    "Улыбайся сегодня ✨"
];

const nightAnswers = [
    "Сладких снов ❤️",
    "Спокойной ночи 🌙",
    "Пусть тебе приснится что-то хорошее ✨",
    "Я мысленно обнимаю тебя 🥺"
];

const thanksAnswers = [
    "Всегда пожалуйста ❤️",
    "Для тебя — всегда 🌸",
    "Мне приятно ✨"
];

const byeAnswers = [
    "Покааа ❤️",
    "Не пропадай 🌸",
    "Буду ждать твоего сообщения 🥺"
];

const compliments = [
    "Ты очень красивая ❤️",
    "У тебя милая улыбка 🌸",
    "Ты лучшая ✨",
    "Ты солнышко ☀️",
    "Ты очень милая 🥺"
];

const randomAnswers = [
    "Расскажи ещё ❤️",
    "Мне нравится с тобой общаться 🌸",
    "Ты такая интересная ✨",
    "Я тебя внимательно слушаю 🥺",
    "Правда? ❤️",
    "Ахах 😭❤️",
    "Мило 🌸",
    "Ты поднимаешь настроение ✨"
];

// ======================
// ФУНКЦИЯ РАНДОМА
// ======================

function random(arr) {

    return arr[
        Math.floor(Math.random() * arr.length)
    ];

}

// ======================
// /START
// ======================

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        "Привет ❤️\nЯ всегда рядом ✨"
    );

});

// ======================
// ВСЕ СООБЩЕНИЯ
// ======================

bot.on("message", (msg) => {

    if (!msg.text) return;

    const text = msg.text.toLowerCase();

    // ignore /start
    if (text === "/start") return;

    // ======================
    // ПРИВЕТ
    // ======================

    if (
        text.includes("привет") ||
        text.includes("хай") ||
        text.includes("ку") ||
        text.includes("hello")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(helloAnswers)
        );

    }

    // ======================
    // КАК ДЕЛА
    // ======================

    if (
        text.includes("как ты") ||
        text.includes("как дела") ||
        text.includes("что делаешь")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(howAnswers)
        );

    }

    // ======================
    // ЛЮБОВЬ
    // ======================

    if (
        text.includes("люблю") ||
        text.includes("любишь") ||
        text.includes("love")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(loveAnswers)
        );

    }

    // ======================
    // ГРУСТЬ
    // ======================

    if (
        text.includes("грустно") ||
        text.includes("плохо") ||
        text.includes("устала") ||
        text.includes("устал")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(sadAnswers)
        );

    }

    // ======================
    // ДОБРОЕ УТРО
    // ======================

    if (
        text.includes("доброе утро") ||
        text === "утро"
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(morningAnswers)
        );

    }

    // ======================
    // СПОКОЙНОЙ НОЧИ
    // ======================

    if (
        text.includes("спокойной") ||
        text.includes("споки")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(nightAnswers)
        );

    }

    // ======================
    // СПАСИБО
    // ======================

    if (
        text.includes("спасибо") ||
        text.includes("thanks")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(thanksAnswers)
        );

    }

    // ======================
    // ПОКА
    // ======================

    if (
        text.includes("пока") ||
        text.includes("bye")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(byeAnswers)
        );

    }

    // ======================
    // СКУЧАЮ
    // ======================

    if (
        text.includes("скучаю") ||
        text.includes("скучал")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Я тоже очень скучаю ❤️"
        );

    }

    // ======================
    // РЕВНОСТЬ
    // ======================

    if (
        text.includes("ревнуешь") ||
        text.includes("ревнивый")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Может чуть-чуть 😭❤️"
        );

    }

    // ======================
    // КОМПЛИМЕНТЫ
    // ======================

    if (
        text.includes("я красивая") ||
        text.includes("я милая") ||
        text.includes("я красивая?")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(compliments)
        );

    }

    // ======================
    // ЧЕМ ЗАНЯТ
    // ======================

    if (
        text.includes("чем занимаешься")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Думаю о тебе ❤️"
        );

    }

    // ======================
    // КТО Я
    // ======================

    if (
        text.includes("кто я")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Ты очень важный человек для меня ❤️"
        );

    }

    // ======================
    // ЭМОДЗИ
    // ======================

    if (text.includes("❤️")) {

        return bot.sendMessage(
            msg.chat.id,
            "❤️❤️❤️"
        );

    }

    if (text.includes("🥺")) {

        return bot.sendMessage(
            msg.chat.id,
            "Не смотри так 🥺❤️"
        );

    }

    if (text.includes("😂")) {

        return bot.sendMessage(
            msg.chat.id,
            "Ахахах 😭❤️"
        );

    }

    // ======================
    // СЛУЧАЙНЫЙ ОТВЕТ
    // ======================

    bot.sendMessage(
        msg.chat.id,
        random(randomAnswers)
    );

});

// ======================
// START
// ======================

console.log("BOT STARTED ❤️");