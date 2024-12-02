// app/repairs/page.tsx
"use client";

import React from "react";

export default function Repairs() {
    return (
        <main className="min-h-screen -mb-5 -mt-4 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center p-6">
            <header className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">Ремонт компьютеров</h1>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                    Мы предоставляем профессиональные услуги по ремонту компьютеров, ноутбуков и другой техники.
                    Быстро, качественно и по доступным ценам. Доверьтесь экспертам!
                </p>
            </header>

            <section className="w-full max-w-6xl mb-12">
                <h2 className="text-3xl font-bold mb-6">Наши услуги</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Диагностика</h3>
                        <p className="text-gray-300">
                            Проведение полной диагностики компьютера или ноутбука для выявления неисправностей.
                            Бесплатно при дальнейшем ремонте!
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Ремонт техники</h3>
                        <p className="text-gray-300">
                            Замена комплектующих, устранение сбоев в системе, настройка программного обеспечения.
                            Только оригинальные запчасти!
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Чистка и профилактика</h3>
                        <p className="text-gray-300">
                            Полная чистка от пыли, замена термопасты, профилактика перегрева.
                            Помогаем продлить срок службы вашего устройства.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full max-w-6xl bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Почему выбирают нас?</h2>
                <ul className="text-gray-300 space-y-4 text-lg">
                    <li>💻 <strong>Опыт:</strong> Более 10 лет работы с компьютерной техникой.</li>
                    <li>⚙️ <strong>Качество:</strong> Используем только проверенные детали и инструменты.</li>
                    <li>⏱ <strong>Скорость:</strong> Большинство ремонтов выполняется в течение 1-2 дней.</li>
                    <li>💰 <strong>Честные цены:</strong> Вы оплачиваете только за выполненные работы.</li>
                </ul>
            </section>

            <section className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Оставить заявку</h2>
                <form action="#" method="post" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-400 mb-1">Ваше имя</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Иван Иванов"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-400 mb-1">Ваш телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="+7 (999) 123-45-67"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-400 mb-1">Описание проблемы</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Опишите проблему с вашим устройством..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
                    >
                        Отправить заявку
                    </button>
                </form>
            </section>

            <footer className="mt-12 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Наша компания. Все права защищены.</p>
            </footer>
        </main>
    );
}
