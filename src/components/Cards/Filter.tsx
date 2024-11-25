"use client";
import React, { useState } from "react";

function Filter() {
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [manufacturer, setManufacturer] = useState("");
    const [sortOption, setSortOption] = useState("popularity");

    const manufacturers = ["Apple", "Samsung", "MSI", "Dell", "HP"];

    return (
        <div className="w-72 h-screen">
            <div className="p-4 rounded-xl bg-neutral-800 text-white w-full sticky top-28">
                <h2 className="text-lg font-bold mb-4">Фильтры</h2>

                {/* Фильтр по цене */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Цена (USD)</label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            min="0"
                            max="10000"
                            className="w-1/2 p-2 bg-neutral-700 rounded-lg text-sm"
                            placeholder="От"
                            value={priceRange[0]}
                            onChange={(e) =>
                                setPriceRange([+e.target.value, priceRange[1]])
                            }
                        />
                        <input
                            type="number"
                            min="0"
                            max="10000"
                            className="w-1/2 p-2 bg-neutral-700 rounded-lg text-sm"
                            placeholder="До"
                            value={priceRange[1]}
                            onChange={(e) =>
                                setPriceRange([priceRange[0], +e.target.value])
                            }
                        />
                    </div>
                </div>

                {/* Фильтр по производителю */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Производитель</label>
                    <select
                        className="w-full p-2 bg-neutral-700 rounded-lg text-sm"
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                    >
                        <option value="">Все</option>
                        {manufacturers.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Сортировка */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Сортировка</label>
                    <select
                        className="w-full p-2 bg-neutral-700 rounded-lg text-sm"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="popularity">По популярности</option>
                        <option value="priceAsc">По цене (возрастание)</option>
                        <option value="priceDesc">По цене (убывание)</option>
                        <option value="rating">По рейтингу</option>
                    </select>
                </div>

                {/* Кнопка применения фильтров */}
                <button
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium mt-4"
                    onClick={() => console.log({ priceRange, manufacturer, sortOption })}
                >
                    Применить фильтры
                </button>
            </div>
        </div>
    );
}

export default Filter;
