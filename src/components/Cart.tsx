"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axiosInstance from "@/axiosConfig";
import axios from "axios";
import Cookies from "js-cookie";

interface CartItem {
  cart_id: number;
  cart_uuid: string;
  category: string;
  img: string;
  price: string;
  product_description: string;
  product_name: string;
  product_uuid: string;
  quantity: number;
  rate: number;
  product_id: number;
}

function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const email: string | undefined = Cookies.get("email") || undefined;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response: any = await axiosInstance.get("get_cart");
        setCart(response.data.cart);
        console.log(response.data.cart);
      } catch (error) {
        console.error("Ошибка при получении данных корзины:", error);
      }
    };

    fetchCart();
  }, []);

  const handleRemoveItem = async (
    productUUID: string,
    email: string | undefined,
  ) => {
    if (!email) {
      console.error("Email отсутствует. Удаление невозможно.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/removeCart",
        { email: email, productId: productUUID },
        { withCredentials: true },
      );

      if (response.status === 200) {
        setCart(cart.filter((item) => item.product_uuid !== productUUID));
      } else {
        console.error("Ошибка при удалении товара:", response.data);
      }
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
    }
  };

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );

  return (
    <div className="w-full max-h-screen min-h-auto max-w-5xl mx-auto p-8  shadow-xl overflow-auto rounded-2xl text-gray-200">
      <div className="bg-neutral-900 p-4 rounded-2xl">
        <h1 className="text-3xl font-extrabold mb-6 text-teal-400">Корзина</h1>
        <div className="flex flex-col gap-6">
          {cart.length === 0 ? (
            <p className="text-center font-thin text-xl text-neutral-500">
              Корзина пуста
            </p>
          ) : (
            cart.map((card, key) => (
              <div
                key={key}
                className="flex items-center gap-6 bg-neutral-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={card.img}
                  alt={card.product_name}
                  className="w-32 h-32 object-cover rounded-lg border-2 border-gray-700"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-100">
                    {card?.product_name}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2">
                    {card?.product_description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-yellow-400 text-lg font-bold">
                      {card?.rate}★
                    </span>
                    <span className="text-gray-500 text-sm">
                      ID: {card.product_uuid}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <p className="text-lg font-bold text-gray-100">
                    ${(parseFloat(card.price) * card.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">
                    Количество: {card.quantity}
                  </p>
                  <div className="flex gap-3">
                    <Link href={`/product/${card.product_id}`}>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
                        Просмотр
                      </button>
                    </Link>
                    <button
                      onClick={() => handleRemoveItem(card.product_uuid, email)}
                      className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <p className="text-2xl font-semibold text-gray-100">
            Итого: ${total.toFixed(2)}
          </p>
          {cart.length === 0 ? (
            <Link
              href="/"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Добавьте продукты в корзину...
            </Link>
          ) : (
            <Link
              href="/payment"
              className="px-8 py-3 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Перейти к оплате
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
