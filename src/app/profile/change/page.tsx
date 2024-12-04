"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface ProfileData {
  email: string;
  phone: string;
  address: string;
  updated_at: string;
}

function EditProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileData>({
    email: "",
    phone: "",
    address: "",
    updated_at: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await axios.get("http://localhost:8000/profile", {
          withCredentials: true,
        });
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = () => {
    alert("Профиль обновлён!");
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl mx-auto p-8 bg-neutral-800 text-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">
          Редактировать профиль
        </h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile?.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-400"
            >
              Телефон
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profile?.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-400"
            >
              Адрес
            </label>
            <textarea
              id="address"
              name="address"
              value={profile?.address}
              onChange={handleChange}
              className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              rows={3}
            ></textarea>
          </div>
          <div>
            <label className=" text-sm flex items-center font-semibold text-gray-400">
              Последнее обновление:
              <span className="text-gray-300 ml-2">
                {profile.updated_at ? (
                  format(new Date(profile.updated_at), "MM-dd-yyyy hh:mm")
                ) : (
                  <div className="w-28 rounded h-5 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] animate-shimmer"></div>
                )}
              </span>
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => {
                router.back();
              }}
              type="button"
              className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition"
            >
              Назад
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-600 transition"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfilePage;
