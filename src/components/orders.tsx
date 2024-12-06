"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface Product {
  img: string;
  rate: number;
  price: string;
  cart_id: number;
  category: string;
  quantity: number;
  cart_uuid: string;
  product_id: number;
  product_name: string;
  product_uuid: string;
  product_description: string;
}

interface Order {
  order_uuid: string;
  total_price: number;
  cart_data: Product[];
}

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const email = Cookies.get("email");

    if (!email) {
      console.log("No email found in cookies");
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await axios.get<Order[]>(
          "http://localhost:8000/orders",
          {
            params: { email: email },
            withCredentials: true,
          },
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  if (!orders.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="text-center p-8 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold mb-4">Orders</h2>
          <p>No orders found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="w-full max-w-md p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Your Orders</h2>
        <ul className="space-y-4">
          {orders.map((order, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  Order ID: {order.order_uuid}
                </h3>
                <span className="text-lg font-bold text-indigo-400">
                  ${order.total_price}
                </span>
              </div>
              <div className="space-y-2">
                {order.cart_data.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.img}
                        alt={product.product_name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">
                          {product.product_name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {product.product_description}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-sm text-gray-300">
                            Category: {product.category}
                          </span>
                          <span className="text-sm font-bold text-green-400">
                            {product.quantity} x ${product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
