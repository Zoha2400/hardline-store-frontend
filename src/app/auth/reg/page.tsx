"use client";

import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormData {
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface FormErrors {
    nickname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

function Page() {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.nickname) newErrors.nickname = "Введите никнейм.";
        if (!formData.email) {
            newErrors.email = "Введите email.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Некорректный формат email.";
        }
        if (!formData.password) newErrors.password = "Введите пароль.";
        if (formData.password.length < 8)
            newErrors.password = "Пароль должен быть не менее 8 символов.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Пароли не совпадают.";
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            try {
                const response = await axios.post('http://localhost:8000/reg', {
                    username: formData.nickname,
                    email: formData.email,
                    password: formData.password,
                });
                console.log(response.data);

                router.push('/auth/login');
            } catch (error: any) {
                console.error(error.response?.data || error.message);
            }

            console.log("Данные формы:", formData);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
            <Link href='/' className="absolute top-2 left-2 text-white font-mono text-sm bg-black p-3 rounded-lg hover:shadow-xl duration-300 ">
                На главную
            </Link>

            <form
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transition-all duration-500"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">
                    Регистрация
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="nickname"
                        className="block text-gray-700 font-medium mb-2 text-lg"
                    >
                        Nickname
                    </label>
                    <input
                        type="text"
                        id="nickname"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        className={`w-full text-black p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.nickname ? "border-red-500" : ""
                        }`}
                        placeholder="Введите никнейм"
                    />
                    {errors.nickname && (
                        <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2 text-lg"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full text-black p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Введите email"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2 text-lg"
                    >
                        Пароль
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full text-black p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.password ? "border-red-500" : ""
                        }`}
                        placeholder="Введите пароль"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-gray-700 font-medium mb-2 text-lg"
                    >
                        Повторите пароль
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full text-black p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                            errors.confirmPassword ? "border-red-500" : ""
                        }`}
                        placeholder="Повторите пароль"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                >
                    Зарегистрироваться
                </button>

                <Link href="/auth/login" className="block mt-6 text-sm text-center text-gray-600 hover:text-gray-800">
                    Уже есть аккаунт? Войти
                </Link>
            </form>
        </div>
    );
}

export default Page;
