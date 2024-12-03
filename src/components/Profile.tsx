'use client'

import {useEffect, useState} from 'react';
import Link from "next/link";
import axios from "axios";
import {format} from "date-fns";


interface ProfileData {
    email: string;
    username: string;
    phone: string;
    address: string;
    updated_at: string;
}

function Profile() {

    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response: any = await axios.get('http://localhost:8000/profile',
                    {
                        withCredentials: true,
                    });
                setProfileData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    })

    // @ts-ignore
    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 rounded-xl shadow-2xl border border-gray-700">
            <h1 className="text-3xl font-extrabold mb-6 text-teal-400 tracking-wide">
                Профиль
            </h1>
            <p className="text-gray-400 mb-4">Добро пожаловать в ваш профиль!</p>
            <div className="space-y-4">
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Email:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        {profileData?.email}
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Телефон:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        {profileData?.phone ? profileData?.phone : 'не указано'}
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Адрес:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        {profileData?.address ? profileData?.address : 'не указано'}
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Обновлено:</span>
                    <span className="text-lg font-semibold text-gray-200">
                            {profileData?.updated_at
                                ? format(new Date(profileData.updated_at), 'MM-dd-yyyy')
                                : 'Дата не указана'}

                    </span>
                </p>
            </div>
            <div className="flex justify-between items-center gap-4 mt-6">
                <Link href="/profile/change">
                    <button
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                        Редактировать
                    </button>
                </Link>
                <button
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                    onClick={async () => {
                        try {
                            const response = await axios.delete('http://localhost:8000/logout' ,{withCredentials: true});

                            if (response.status === 200) {
                                console.log("Выход успешен:", response.data);
                                window.location.href = '/';
                            }
                        } catch (error) {
                            console.error('Ошибка при выходе:', error);
                            alert('Произошла ошибка при выходе. Пожалуйста, попробуйте снова.');
                        }
                    }}
                >
                    Выйти
                </button>

                <button
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default Profile;
