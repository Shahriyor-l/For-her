require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
});

const hello = [
    "Привет ❤️",
    "Хееей 🌸",
    "Я ждал твоего сообщения 🥺"
];

const howAreYou = [
    "Теперь хорошо ❤️",
    "Скучал по тебе 🥺",
    "Всё отлично ✨"
];

const love = [
    "Очень люблю тебя ❤️",
    "Ты лучшая 🌸",
    "Безумно ❤️"
];

const sad = [
    "Не грусти 🥺",
    "Я рядом ❤️",
    "Обнимаю тебя 🌸"
];

const randomAnswers = [
    "Расскажи ещё ❤️",
    "Мне нравится с тобой общаться ✨",
    "Ты милая 🥺"
];

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(
        msg.chat.id,
        "Привет ❤️ Я всегда рядом ✨"
    );

});

bot.on("message", (msg) => {

    if (!msg.text) return;

    const text = msg.text.toLowerCase();

    // ignore /start duplicate
    if (text === "/start") return;

    // привет
    if (
        text.includes("привет") ||
        text.includes("хай") ||
        text.includes("ку")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(hello)
        );
    }

    // как дела
    if (
        text.includes("как ты") ||
        text.includes("как дела")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(howAreYou)
        );
    }

    // люблю
    if (
        text.includes("люблю") ||
        text.includes("любишь")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(love)
        );
    }

    // грусть
    if (
        text.includes("грустно") ||
        text.includes("плохо")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            random(sad)
        );
    }

    // спокойной ночи
    if (
        text.includes("спокойной")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Сладких снов ❤️"
        );
    }

    // доброе утро
    if (
        text.includes("доброе утро")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Доброе утро ☀️"
        );
    }

    // спасибо
    if (
        text.includes("спасибо")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Всегда пожалуйста ❤️"
        );
    }

    // скучаю
    if (
        text.includes("скучаю")
    ) {

        return bot.sendMessage(
            msg.chat.id,
            "Я тоже скучаю ❤️"
        );
    }

    // смайлики
    if (text.includes("❤️")) {

        return bot.sendMessage(
            msg.chat.id,
            "❤️❤️❤️"
        );
    }

    // случайный ответ
    bot.sendMessage(
        msg.chat.id,
        random(randomAnswers)
    );

});

console.log("Bot started ❤️");