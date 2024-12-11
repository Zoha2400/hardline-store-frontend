"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Product {
  product_id: number;
  product_name: string;
  product_description: string;
  price: number;
  img: string;
}

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:8000/admin/products",
        {
          withCredentials: true,
        },
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to load products. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Продукты</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Название</th>
            <th className="border px-4 py-2">Описание</th>
            <th className="border px-4 py-2">Цена</th>
            <th className="border px-4 py-2">Фото</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.product_id}
              className="hover:bg-gray-800 cursor-pointer"
              onClick={() =>
                router.push(`/admin/product/${product.product_id}`)
              }
            >
              <td className="border px-4 py-2">{product.product_id}</td>
              <td className="border px-4 py-2">{product.product_name}</td>
              <td className="border px-4 py-2">
                {product.product_description}
              </td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">
                <img
                  src={product.img}
                  alt={product.product_name}
                  className="h-16 w-16 object-cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsPage;
