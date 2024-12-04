"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@/axiosConfig";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface ProfileData {
  phone: string;
  address: string;
  updated_at: string;
}

function EditProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileData>({
    phone: "",
    address: "",
    updated_at: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await axiosInstance.get("profile");
        setProfile(response.data);
      } catch (err) {
        console.error(err);
        setError("Не удалось загрузить профиль.");
      }
    }

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response: any = await axiosInstance.put("profile", {
        phone: profile.phone,
        address: profile.address,
      });
      setProfile(response.data);
      router.push("/profile");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl mx-auto p-8 bg-neutral-800 text-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-teal-400">
          Редактировать профиль
        </h1>
        <form className="space-y-6">
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
              value={profile.phone || ""}
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
              value={profile.address || ""}
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
              onClick={() => router.back()}
              type="button"
              className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition"
            >
              Назад
            </button>
            <button
              type="button"
              onClick={handleSave}
              className={`px-6 py-2 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600"} text-black font-semibold rounded-lg transition`}
              disabled={loading}
            >
              {loading ? "Сохранение..." : "Сохранить"}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {success && <p className="mt-4 text-green-500">Изменения сохранены!</p>}
      </div>
    </div>
  );
}

export default EditProfilePage;
