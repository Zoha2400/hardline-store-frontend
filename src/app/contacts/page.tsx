"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "contact",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: any = await axios.post(
        "http://localhost:8000/messages",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      setStatus("Сообщение успешно отправлено!");
      toast.success(
        "Ваше сообщение было отправлено. Ждите ответа на указанную вами почту.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
    } catch (error: any) {
      setStatus("Произошла ошибка при отправке сообщения.");
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <main className="min-h-screen -mb-5 -mt-4 bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
        <header className="mb-12">
          <h1 className="text-5xl font-extrabold text-center tracking-tight mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-400 text-center max-w-3xl">
            Мы всегда на связи и готовы ответить на ваши вопросы. Свяжитесь с
            нами любым удобным способом!
          </p>
        </header>

        <section className="w-full flex flex-col md:flex-row justify-center items-start gap-8 max-w-6xl mb-12">
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Контактная информация</h2>
            <ul className="text-gray-300 space-y-4">
              <li>
                📍 <strong>Адрес:</strong> Ташкен, Юнусабад д. 123
              </li>
              <li>
                📞 <strong>Телефон:</strong>{" "}
                <a
                  href="tel: +998917778866"
                  className="text-blue-400 hover:underline"
                >
                  +998 91 777 88 66
                </a>
              </li>
              <li>
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-blue-400 hover:underline"
                >
                  info@example.com
                </a>
              </li>
              <li>
                💼 <strong>Рабочие часы:</strong> Пн-Пт: 9:00 - 18:00
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Напишите нам</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Ваш email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ivan@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ваше сообщение..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
              >
                Отправить
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Наша компания. Все права защищены.
          </p>
        </footer>
      </main>
      <ToastContainer />
    </>
  );
}
