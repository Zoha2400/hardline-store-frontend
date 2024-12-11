"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  user_id: number;
  address: string;
  phone: string;
  name: string;
  email: string;
  created_at: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>(
          "http://localhost:8000/users",
          {
            withCredentials: true,
          },
        );
        setUsers(response.data);
      } catch (error) {
        setStatus(`Произошла ошибка при загрузке пользователей: ${error}`);
        console.error("Error:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen -mb-5 -mt-4 bg-transparent text-white flex flex-col items-center p-6">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          Пользователи
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Список всех зарегистрированных пользователей.
        </p>
      </header>

      <section className="w-full max-w-6xl mb-12">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-neutral-300">
            <thead className="text-xs text-neutral-400 bg-neutral-800">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Электронная почта
                </th>
                <th scope="col" className="py-3 px-6">
                  Роль
                </th>
                <th scope="col" className="py-3 px-6">
                  Адрес
                </th>
                <th scope="col" className="py-3 px-6">
                  Телефон
                </th>
                <th scope="col" className="py-3 px-6">
                  Дата регистрации
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                if (user.role != "admin") {
                  return (
                    <tr
                      key={user.user_id}
                      className="bg-neutral-700 border-b border-gray-700"
                    >
                      <td className="py-4 px-6">{user.user_id}</td>
                      <td className="py-4 px-6">{user.email}</td>
                      <td className="py-4 px-6">{user.role}</td>
                      <td className="py-4 px-6">
                        {user.address || "не указано"}
                      </td>
                      <td className="py-4 px-6">
                        {user.phone || "не указано"}
                      </td>

                      <td className="py-4 px-6">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
