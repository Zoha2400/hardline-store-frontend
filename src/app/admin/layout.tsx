import React from "react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-4 -mb-5 min-h-screen bg-neutral-900 text-white flex">
      <aside className="w-1/4 bg-neutral-800 p-6 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold mb-6">Админ-панель</h1>
        <nav className="flex flex-col space-y-3">
          <Link
            href="/admin"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-green-600 transition"
          >
            Добавить продукт
          </Link>
          <Link
            href="/admin/messages"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-green-600 transition"
          >
            Сообщения
          </Link>
          <Link
            href="/admin/users"
            className="py-2 px-4 bg-neutral-700 rounded-lg hover:bg-green-600 transition"
          >
            Пользователи
          </Link>
        </nav>
      </aside>
      <main className="w-3/4 p-6 bg-neutral-900">{children}</main>
    </div>
  );
}
