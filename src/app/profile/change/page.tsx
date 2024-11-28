"use client"

import React, { useState } from 'react';

function EditProfilePage() {
    const [profile, setProfile] = useState({
        email: 'example@example.com',
        phone: '(123) 456-7890',
        address: '123 Main St, City, State, ZIP',
        updatedAt: '2022-01-01',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleSave = () => {
        alert('Профиль обновлён!');
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-3xl mx-auto p-8 bg-neutral-800 text-gray-200 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-teal-400">Редактировать профиль</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-400">
                            Телефон
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-400">
                            Адрес
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="w-full mt-1 p-3 bg-neutral-700 text-gray-200 rounded-lg border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                            rows="3"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-400">
                            Последнее обновление:
                            <span className="text-gray-300 ml-2">{profile.updatedAt}</span>
                        </label>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={() => alert('Изменения отменены!')}
                            className="px-6 py-2 bg-gray-600 text-gray-200 rounded-lg hover:bg-gray-700 transition"
                        >
                            Отменить
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
