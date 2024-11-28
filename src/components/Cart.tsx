import Link from "next/link";

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
        <div className="w-full h-auto max-w-5xl mx-auto p-8 bg-neutral-900 shadow-xl overflow-auto rounded-2xl text-gray-200">
            <h1 className="text-3xl font-extrabold mb-6 text-teal-400">Корзина</h1>
            <div className="flex flex-col gap-6">
                {cards.map((card, key) => (
                    <div
                        key={key}
                        className="flex items-center gap-6 bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={card.img}
                            alt={card.title}
                            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-700"
                        />

                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-100">{card.title}</h2>
                            <p className="text-sm text-gray-400 mt-2">{card.description}</p>
                            <div className="flex items-center gap-3 mt-3">
                                <span className="text-yellow-400 text-lg font-bold">{card.rate}★</span>
                                <span className="text-gray-500 text-sm">ID: {card.id}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3">
                            <p className="text-lg font-bold text-gray-100">${card.price}</p>
                            <div className="flex gap-3">
                                {/* Кнопка "Просмотр" */}
                                <Link href={card.url}>
                                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                                        Просмотр
                                    </button>
                                </Link>
                                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
                <p className="text-2xl font-semibold text-gray-100">Итого: $7,495.00</p>
                <button className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition">
                    Перейти к оплате
                </button>
            </div>
        </div>
    );
}

export default Cart;
