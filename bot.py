import random
import asyncio

from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart

TOKEN = "8375189068:AAFTHv3Rr0kTwkkTV0YOyxgAe-tlA9q28LM"

bot = Bot(TOKEN)
dp = Dispatcher()

# =========================
# СООБЩЕНИЯ
# =========================

hello_answers = [
    "Привет ❤️",
    "Приветик 🌸",
    "Я ждал твоё сообщение 🥺",
    "Хееей ❤️",
]

how_are_you_answers = [
    "Теперь хорошо, потому что ты написала ❤️",
    "Немного устал, но ты подняла настроение ✨",
    "Всё хорошо 🌸 А ты как?",
    "Скучал по тебе 🥺",
]

love_answers = [
    "Я тебя очень люблю ❤️",
    "Ты самая лучшая 🌸",
    "Ты делаешь мой мир лучше ✨",
    "Очень сильно ❤️",
]

sad_answers = [
    "Не грусти 🥺",
    "Я рядом ❤️",
    "Ты справишься, я верю в тебя ✨",
    "Обнимаю тебя 🌸",
]

night_answers = [
    "Спокойной ночи ❤️",
    "Сладких снов 🌙",
    "Пусть тебе приснится что-то хорошее ✨",
]

morning_answers = [
    "Доброе утро ☀️",
    "Хорошего тебе дня ❤️",
    "Ты сегодня прекрасна 🌸",
]

thanks_answers = [
    "Всегда пожалуйста ❤️",
    "Для тебя — всегда ✨",
    "Мне приятно 🌸",
]

bye_answers = [
    "Не пропадай ❤️",
    "Буду ждать твоего сообщения 🌸",
    "Покааа ✨",
]

compliments = [
    "Ты очень милая ❤️",
    "Ты прекрасна 🌸",
    "У тебя красивая улыбка ✨",
    "Ты солнышко ☀️",
    "Ты лучшая 🥺",
]

random_answers = [
    "Расскажи ещё ❤️",
    "Мне нравится с тобой общаться 🌸",
    "Правда? ✨",
    "Интересно 🥺",
    "Я тебя внимательно слушаю ❤️",
]

# =========================
# /start
# =========================

@dp.message(CommandStart())
async def start(message: types.Message):

    await message.answer(
        "Привет ❤️\n"
        "Я всегда рядом ✨"
    )

# =========================
# ОТВЕТЫ
# =========================

@dp.message()
async def chat(message: types.Message):

    text = message.text.lower()

    # ПРИВЕТ

    if (
        "привет" in text or
        "хай" in text or
        "hello" in text or
        "ку" in text
    ):

        await message.answer(random.choice(hello_answers))
        return

    # КАК ДЕЛА

    if (
        "как дела" in text or
        "как ты" in text or
        "что делаешь" in text
    ):

        await message.answer(random.choice(how_are_you_answers))
        return

    # ЛЮБОВЬ

    if (
        "люблю" in text or
        "любишь" in text or
        "любовь" in text
    ):

        await message.answer(random.choice(love_answers))
        return

    # ГРУСТЬ

    if (
        "грустно" in text or
        "плохо" in text or
        "устала" in text or
        "устал" in text
    ):

        await message.answer(random.choice(sad_answers))
        return

    # СПОКОЙНОЙ НОЧИ

    if (
        "спокойной ночи" in text or
        "споки" in text
    ):

        await message.answer(random.choice(night_answers))
        return

    # ДОБРОЕ УТРО

    if (
        "доброе утро" in text or
        "утро" in text
    ):

        await message.answer(random.choice(morning_answers))
        return

    # СПАСИБО

    if (
        "спасибо" in text or
        "thanks" in text
    ):

        await message.answer(random.choice(thanks_answers))
        return

    # ПОКА

    if (
        "пока" in text or
        "bye" in text
    ):

        await message.answer(random.choice(bye_answers))
        return

    # КОМПЛИМЕНТЫ

    if (
        "я красивая" in text or
        "я красивая?" in text or
        "я милая?" in text
    ):

        await message.answer(random.choice(compliments))
        return

    # СМАЙЛИКИ

    if "❤️" in text:
        await message.answer("❤️❤️❤️")
        return

    if "🥺" in text:
        await message.answer("Не делай такой взгляд 🥺❤️")
        return

    if "😂" in text:
        await message.answer("Ахахах 😭❤️")
        return

    # РЕВНОСТЬ

    if (
        "ревнуешь" in text or
        "ты ревнивый" in text
    ):

        await message.answer(
            "Может чуть-чуть 😭❤️"
        )
        return

    # СКУЧАЮ

    if (
        "скучаю" in text or
        "скучал" in text
    ):

        await message.answer(
            "Я тоже очень скучаю ❤️"
        )
        return

    # ЧЕМ ЗАНЯТ

    if (
        "чем занимаешься" in text or
        "что делаешь" in text
    ):

        await message.answer(
            "Думаю о тебе ❤️"
        )
        return

    # КТО Я

    if (
        "кто я" in text or
        "кто я тебе" in text
    ):

        await message.answer(
            "Ты очень важный человек для меня ❤️"
        )
        return

    # СЛУЧАЙНЫЙ ОТВЕТ

    await message.answer(
        random.choice(random_answers)
    )

# =========================
# MAIN
# =========================

async def main():

    print("Bot started ❤️")

    await dp.start_polling(bot)

asyncio.run(main())