"use client";
import React, { useState } from "react";
import { searchStore } from "@/store/Store";

function Filter() {
  // @ts-ignore
  const [priceRange, setPriceRange] = useState<[number, number]>(
    searchStore.filters.priceRange,
  );

  const applyFilters = () => {
    searchStore.setFilters({
      priceRange,
    });
  };

  return (
    <div className="w-72 block xl:block lg:hidden">
      <div className="p-4 rounded-xl bg-neutral-800 text-white w-full sticky top-28">
        <h2 className="text-lg font-bold mb-4">Фильтры</h2>

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
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            />
            <input
              type="number"
              min="0"
              max="10000"
              className="w-1/2 p-2 bg-neutral-700 rounded-lg text-sm"
              placeholder="До"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Сортировка</label>
          <select
            className="w-full p-2 bg-neutral-700 rounded-lg text-sm"
            value={searchStore.filterRender}
            onChange={(e) => searchStore.setFilterRender(e.target.value)}
          >
            <option value="reverse">В обратном порядке</option>
            <option value="cost_up">По цене (возрастание)</option>
            <option value="cost_down">По цене (убывание)</option>
            <option value="rating">По рейтингу</option>
            <option value="default">Дефолт</option>
          </select>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium mt-4"
          onClick={applyFilters}
        >
          Применить фильтры
        </button>
      </div>
    </div>
  );
}

export default Filter;
