import React from "react";

const cards = [
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
    {
        img: "/example.svg",
        rate: 4.5,
        title: "MSI X344",
        price: 1.499,
        description:
            "Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p",
        id: "184329",
        url: "/product/184329",
    },
];

function Cart() {
    return (
        <div className="w-3/5 h-auto overflow-auto p-6 bg-neutral-900 shadow-lg rounded-lg text-gray-200">
            <h1 className="text-2xl font-bold mb-4">Корзина</h1>
            <div className="flex flex-col gap-4">
                {cards.map((card, key) => (
                    <div
                        key={key}
                        className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-gray-100">{card.title}</h2>
                            <p className="text-sm text-gray-400">{card.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-yellow-400 font-bold">{card.rate}★</span>
                                <span className="text-gray-500">({card.id})</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-lg font-bold text-gray-100">
                                ${card.price}
                            </p>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
                <p className="text-xl font-semibold text-gray-100">Итого: $7,495.00</p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Перейти к оплате
                </button>
            </div>
        </div>
    );
}

export default Cart;
