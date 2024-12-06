"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/axiosConfig";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

interface ProfileData {
  email: string;
  phone: string;
  address: string;
  updated_at: string;
}

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await axiosInstance.get("profile");
        setProfileData(response.data);
      } catch (error: any) {
        if (error.response) {
          // Ошибка с ответом от сервера
          console.error("Ошибка при загрузке профиля:", error.response.data);
        } else if (error.request) {
          // Ошибка с запросом
          console.error("Ошибка при отправке запроса:", error.request);
        } else {
          // Другие ошибки
          console.error("Ошибка:", error.message);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 rounded-xl shadow-2xl border border-gray-700">
      <h1 className="text-3xl font-extrabold mb-6 text-teal-400 tracking-wide">
        Профиль
      </h1>
      <p className="text-gray-400 mb-4">Добро пожаловать в ваш профиль!</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-32 text-gray-500">Email:</span>
          <span className="text-lg flex font-semibold text-gray-200">
            {profileData?.email ? (
              profileData?.email
            ) : (
              <p className="w-28 rounded h-5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer"></p>
            )}
          </span>
        </div>
        <span className="flex items-center">
          <p className="w-32 text-gray-500">Телефон:</p>
          <p className="text-lg font-semibold text-gray-200">
            {profileData?.phone ? profileData?.phone : "не указано"}
          </p>
        </span>
        <span className="flex items-center">
          <p className="w-32 text-gray-500">Адрес:</p>
          <p className="text-lg font-semibold text-gray-200">
            {profileData?.address ? profileData?.address : "не указано"}
          </p>
        </span>
        <div className="flex items-center">
          <span className="w-32 text-gray-500">Обновлено:</span>
          <span className="text-lg flex font-semibold text-gray-200">
            {profileData?.updated_at ? (
              format(new Date(profileData.updated_at), "MM-dd-yyyy")
            ) : (
              <p className="w-28 rounded h-5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer"></p>
            )}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 mt-6">
        <Link href="/profile/change">
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
            Редактировать
          </button>
        </Link>
        <button
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
          onClick={async () => {
            try {
              const response = await axiosInstance.delete("logout");

              if (response.status === 200) {
                console.log("Выход успешен:", response.data);
                router.push("/");
              }
            } catch (error: any) {
              console.error("Ошибка при выходе:", error.message);
              alert(
                "Произошла ошибка при выходе. Пожалуйста, попробуйте снова.",
              );
            }
          }}
        >
          Выйти
        </button>

        {/*<button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">*/}
        {/*  Удалить*/}
        {/*</button>*/}

        <Link
          href="/orders"
          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
        >
          Заказы
        </Link>
      </div>
    </div>
  );
}

export default Profile;
