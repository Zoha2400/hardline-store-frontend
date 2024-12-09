"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response: any = await axios.get("http://localhost:8000/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setMessages(response.data);
    } catch (err: any) {
      console.error("Error fetching messages:", err);
      setError(
        err.response?.data?.error ||
          "Произошла ошибка при получении сообщений.",
      );
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:8000/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setMessages((prev) => prev.filter((message: any) => message.id !== id));
    } catch (err: any) {
      console.error("Error deleting message:", err);
      setError(err.response?.data?.error || "Ошибка при удалении сообщения.");
    }
  };

  const handleRowClick = (message: any) => {
    setSelectedMessage(message);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <main className="min-h-screen -mt-4 bg-gradient-to-b from-black to-gray-900 text-white p-6 flex justify-center">
      <div className="w-full overflow-auto h-fit max-h-screen p-6 rounded-lg shadow-lg">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Сообщения
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Список всех сообщений.
          </p>
        </header>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <section>
            {messages.length > 0 ? (
              <div className="overflow-auto max-h-[400px]">
                <table className="w-full text-left text-gray-300">
                  <thead className="text-xs text-gray-400 bg-gray-800">
                    <tr>
                      <th className="border-b p-3 border-gray-700 py-2">Имя</th>
                      <th className="border-b p-3  border-gray-700 py-2">
                        Email
                      </th>
                      <th className="border-b p-3  border-gray-700 py-2">
                        Тематика
                      </th>
                      <th className="border-b p-3  border-gray-700 py-2">
                        Сообщение
                      </th>
                      <th className="border-b p-3  border-gray-700 py-2">
                        Действия
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((message: any) => (
                      <tr
                        key={message.id}
                        className="cursor-pointer hover:bg-gray-700 bg-gray-900 border-b border-gray-700"
                        onClick={() => handleRowClick(message)}
                      >
                        <td className="border-b border-gray-700 p-3 truncate text-sm max-w-xs">
                          {message.name}
                        </td>
                        <td className="border-b border-gray-700 p-3 truncate text-sm max-w-xs">
                          {message.email}
                        </td>
                        {message.subject == "repairs" ? (
                          <td className="border-b border-gray-700 p-3  truncate text-sm max-w-xs">
                            <p className="bg-indigo-700 flex justify-center items-center rounded">
                              {message.subject}
                            </p>
                          </td>
                        ) : (
                          <td className="border-b border-gray-700 p-3 truncate text-sm max-w-xs">
                            <p className="bg-blue-600 flex justify-center items-center rounded ">
                              {message.subject}
                            </p>
                          </td>
                        )}
                        <td className="border-b border-gray-700 p-3 truncate text-sm max-w-xs">
                          {message.message}
                        </td>
                        <td className="border-b border-gray-700 py-3 text-sm">
                          <button
                            onClick={() => deleteMessage(message.id)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-400">
                Нет сообщений для отображения.
              </p>
            )}
          </section>
        )}

        {/* Modal */}
        {selectedMessage && (
          <div
            className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setSelectedMessage(null)}
          >
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Подробности
              </h2>
              <p className="text-gray-300 mb-2">
                <strong>Имя:</strong> {selectedMessage.name}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> {selectedMessage.email}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Тематика:</strong> {selectedMessage.subject}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Сообщение:</strong> {selectedMessage.message}
              </p>
              <button
                onClick={() => deleteMessage(selectedMessage.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Удалить
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
