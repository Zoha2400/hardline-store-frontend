import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-neutral-900 mt-5 text-gray-300 py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Логотип и описание */}
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/">
                    <Image alt="logo" src="/logo.png" width={50} height={50} />
                    </Link>
                    <p className="w-52 mt-4 text-center md:text-left text-sm leading-relaxed">
                        <b>Hardline Shop</b> – ваш надежный магазин техники. Мы предоставляем лучшие решения для дома и офиса.
                    </p>
                </div>

                {/* Быстрые ссылки */}
                <nav className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-semibold text-lg mb-4">Навигация</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white">Главная</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">Товары</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">Услуги</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">О нас</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">Контакты</a>
                        </li>
                    </ul>
                </nav>

                {/* Контакты и соцсети */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-semibold text-lg mb-4">Свяжитесь с нами</h3>
                    <p className="text-sm">
                        <span className="font-semibold">Адрес:</span> TUIT, Узбекистан
                    </p>
                    <p className="text-sm mt-2">
                        <span className="font-semibold">Телефон:</span>{" "}
                        <a href="tel:+998917778866" className="hover:text-white">
                            (998) 91 777 88 66
                        </a>
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <a href="#" className="hover:text-white">
                            <Icon icon="line-md:facebook" width="24" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Icon icon="line-md:instagram" width="24" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Icon icon="line-md:twitter" width="24" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <Icon icon="line-md:youtube" width="24" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © 2024 Hardline Shop. Все права защищены.
            </div>
        </footer>
    );
}

export default Footer;
