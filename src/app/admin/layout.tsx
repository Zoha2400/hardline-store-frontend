"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [role, setRole] = useState<string | null>(null); // State for user role
  const router = useRouter();

  useEffect(() => {
    const emailCookie = Cookies.get("email") || "";

    async function fetchUserRole() {
      try {
        const response: any = await axios.get("http://localhost:8000/isAdmin", {
          params: { email: emailCookie || "notEmail" },
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setRole(response.data.role);
          console.log(response.data.role);

          if (response.data.role !== "admin") {
            router.push("/redirect/home");
          }
        } else {
          setRole(null);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        setRole(null);
      }
    }

    fetchUserRole();

    console.log(role);
  }, []);

  return (
    <div className="-mt-4 -mb-5 min-h-screen bg-neutral-900 text-white flex">
      <aside className="w-1/4 bg-neutral-800 p-6 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-6">Админ-панель</h1>
        <nav className="flex flex-col space-y-3">
          <Link
            href="/admin"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-indigo-600 transition"
          >
            Добавить продукт
          </Link>
          <Link
            href="/admin/messages"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-indigo-600 transition"
          >
            Сообщения
          </Link>
          <Link
            href="/admin/users"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-indigo-600 transition"
          >
            Пользователи
          </Link>
          <Link
            href="/admin/products"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-indigo-600 transition"
          >
            Продукты
          </Link>
        </nav>
      </aside>
      <main className="w-3/4 p-6 bg-neutral-900">
        {role === "admin" ? (
          children
        ) : (
          <div>
            Доступ ограничен. Пожалуйста, войдите в аккаунт администратора.
          </div>
        )}
      </main>
    </div>
  );
}
