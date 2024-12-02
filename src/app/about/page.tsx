// app/about-us/page.tsx
"use client";

import React from "react";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center -mt-5 -mb-4 p-6">
            <header className="mb-12">
                <h1 className="text-5xl font-extrabold text-center tracking-tight mb-4">О нас</h1>
                <p className="text-lg text-gray-400 text-center max-w-3xl">
                    Мы – команда профессионалов, вдохновлённых идеями и стремящихся создавать уникальные цифровые решения.
                    Наша миссия – помогать компаниям и людям добиваться своих целей, используя передовые технологии
                    и креативные подходы.
                </p>
            </header>

            <section className="w-full flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Наши ценности</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Иновации</h3>
                        <p className="text-gray-300">
                            Мы используем современные технологии и ищем нестандартные решения, чтобы наши проекты были на шаг впереди.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Качество</h3>
                        <p className="text-gray-300">
                            Каждый наш проект проходит строгий контроль качества. Мы гарантируем, что результат превзойдёт ваши ожидания.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Партнёрство</h3>
                        <p className="text-gray-300">
                            Мы строим долгосрочные отношения с нашими клиентами, основанные на доверии и взаимном уважении.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Наша миссия</h2>
                <p className="text-gray-300 text-center max-w-4xl mx-auto">
                    Мы верим, что технологии могут изменить мир к лучшему. Наша цель – предоставить доступные и эффективные инструменты,
                    которые помогают компаниям и людям достигать новых высот в своих начинаниях.
                </p>
            </section>

            <section className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6">Почему выбирают нас?</h2>
                <ul className="text-gray-300 space-y-4 max-w-4xl">
                    <li>🌟 <strong>Опыт:</strong> Более 10 лет в сфере разработки.</li>
                    <li>⚡ <strong>Гибкость:</strong> Индивидуальный подход к каждому клиенту.</li>
                    <li>🔒 <strong>Надёжность:</strong> Полная прозрачность на всех этапах работы.</li>
                </ul>
            </section>

        </main>
    );
}
