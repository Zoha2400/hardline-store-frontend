import React from 'react';

function Profile() {
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
                        example@example.com
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Телефон:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        (123) 456-7890
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Адрес:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        123 Main St, City, State, ZIP
                    </span>
                </p>
                <p className="flex items-center">
                    <span className="w-32 text-gray-500">Обновлено:</span>
                    <span className="text-lg font-semibold text-gray-200">
                        2022-01-01
                    </span>
                </p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    Редактировать
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                    Удалить
                </button>
            </div>
        </div>
    );
}

export default Profile;
