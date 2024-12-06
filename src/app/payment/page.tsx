"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

interface CartItem {
  product_name: string;
  price: number;
  quantity: number;
  product_id: number;
}

const PaymentPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setEmail(Cookies.get("email") || "");
  }, []);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response: any = await axios.get(
          "http://localhost:8000/get_cart",
          {
            withCredentials: true,
          },
        );

        if (response.status === 200) {
          const { cart } = response.data;
          setCartItems(cart);
          const total = cart.reduce(
            (acc: number, item: CartItem) => acc + item.price * item.quantity,
            0,
          );
          setTotalPrice(total);
        } else {
          alert(response.data.message); // Если корзина пуста или произошла ошибка
        }
      } catch (error) {
        console.error("Ошибка при загрузке корзины", error);
        alert("Произошла ошибка при загрузке корзины.");
      }
    };

    getCart();
  }, []);

  const handlePayment = async () => {
    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Номер карты должен быть 16 цифр.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/checkout",
        {
          email: email,
          cartItems: cartItems,
          cardNumber: cardNumber,
        },
        { withCredentials: true },
      );

      if (response.status === 200) {
        alert("Оплата прошла успешно!");
      } else {
        alert("Ошибка при оформлении заказа");
      }
    } catch (error) {
      console.error("Ошибка при оплате:", error);
      alert("Произошла ошибка при оплате.");
    }
  };

  return (
    <div className="bg-gray-900 -mt-4 -mb-5 text-white min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Товары в корзине:</h2>
          {cartItems.length === 0 ? (
            <p className="text-xl text-gray-400">Ваша корзина пуста</p>
          ) : (
            <ul className="space-y-4">
              {cartItems ? (
                cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex p-3 hover:bg-gray-700 duration-300 rounded justify-between items-center"
                  >
                    <div>
                      <p className="text-lg">{item.product_name}</p>
                      <p className="text-sm text-gray-400">
                        {item.quantity} шт. по {item.price} $
                      </p>
                    </div>
                    <span className="font-semibold">
                      {item.price * item.quantity} $
                    </span>

                    <Link
                      className="text-white bg-indigo-500 p-2 rounded hover:animate-pulse"
                      href={`/product/${item.product_id}`}
                    >
                      Посмотреть
                    </Link>
                  </li>
                ))
              ) : (
                <p className="text-xl text-gray-400">Нет товаров в корзине</p>
              )}
            </ul>
          )}
          <div className="flex justify-between items-center mt-4">
            <span className="text-2xl font-semibold">Итого:</span>
            <span className="text-2xl font-bold">{totalPrice} $</span>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="cardNumber"
            className="block text-lg font-semibold mb-2"
          >
            Номер карты:
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={16}
            className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите номер карты"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full mt-6 py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-200"
        >
          Оплатить
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
