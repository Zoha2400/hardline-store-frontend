"use client";

import { useState } from "react";
import axios from "axios";

const AddProductPage = () => {
  const [form, setForm] = useState({
    product_name: "",
    product_description: "",
    price: "",
    type: "",
    quantity: "",
    discount: "",
    img: "",
    mark: "",
    category: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        form,
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        setSuccess(true);
        setForm({
          product_name: "",
          product_description: "",
          price: "",
          type: "",
          quantity: "",
          discount: "",
          img: "",
          mark: "",
          category: "",
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Что-то пошло не так");
    }
  };

  return (
    <div className="-mt-4 -mb-5 min-h-screen bg-neutral-900 text-neutral-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mt-5 w-full max-w-3xl bg-neutral-800 rounded-3xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-neutral-100">
          Добавить продукт
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField
              name="product_name"
              value={form.product_name}
              onChange={handleChange}
              label="Название продукта"
              placeholder="Введите название продукта"
            />
            <InputField
              name="price"
              value={form.price}
              onChange={handleChange}
              label="Цена"
              placeholder="Введите цену"
              type="number"
            />
            <InputField
              name="type"
              value={form.type}
              onChange={handleChange}
              label="Тип"
              placeholder="Введите тип продукта"
            />
            <InputField
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              label="Количество"
              placeholder="Введите количество"
              type="number"
            />
            <InputField
              name="discount"
              value={form.discount}
              onChange={handleChange}
              label="Скидка"
              placeholder="Введите скидку"
              type="number"
            />
            <InputField
              name="img"
              value={form.img}
              onChange={handleChange}
              label="URL изображения"
              placeholder="Введите ссылку на изображение"
            />
            <InputField
              name="mark"
              value={form.mark}
              onChange={handleChange}
              label="Марка"
              placeholder="Введите марку"
            />
            <InputField
              name="category"
              value={form.category}
              onChange={handleChange}
              label="Категория"
              placeholder="Введите категорию"
            />
          </div>
          <TextAreaField
            name="product_description"
            value={form.product_description}
            onChange={handleChange}
            label="Описание продукта"
            placeholder="Введите описание продукта"
          />
          <button
            type="submit"
            className="w-full py-4 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-semibold rounded-xl shadow-lg transition-all duration-200"
          >
            Добавить продукт
          </button>
        </form>
        {error && (
          <p className="mt-4 text-red-500 text-center text-lg">{error}</p>
        )}
        {success && (
          <p className="mt-4 text-green-500 text-center text-lg">
            Продукт успешно добавлен!
          </p>
        )}
      </div>
    </div>
  );
};

const InputField = ({
  name,
  value,
  onChange,
  label,
  type = "text",
}: {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div className="relative group">
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="peer w-full px-4 py-4 bg-neutral-800 text-neutral-50 placeholder-transparent rounded-lg border-2 border-neutral-700 shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all"
      placeholder={label} // Placeholder text used for showing label when input is empty
    />
    <label
      htmlFor={name}
      className={`absolute left-4 top-4 text-neutral-400 text-base transition-all duration-200 ease-in-out ${
        value ? "top-[-10px] text-neutral-100" : "top-4 text-neutral-400"
      }`}
    >
      {label}
    </label>
  </div>
);

const TextAreaField = ({
  name,
  value,
  onChange,
  label,
}: {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  label: string;
  placeholder: string;
}) => (
  <div className="relative group">
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="peer w-full px-4 py-4 bg-neutral-800 text-neutral-50 placeholder-transparent rounded-lg border-2 border-neutral-700 shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all resize-none h-32"
      placeholder={label} // Placeholder text used for showing label when textarea is empty
    />
    <label
      htmlFor={name}
      className={`absolute left-4 top-4 text-neutral-400 text-base transition-all duration-200 ease-in-out ${
        value ? "top-[-10px] text-neutral-100" : "top-4 text-neutral-400"
      }`}
    >
      {label}
    </label>
  </div>
);

export default AddProductPage;
