"use client";

import { useEffect, useState } from "react";
import { autorun } from "mobx";
import Dragon from "@/components/Header/Dragon";
import Card from "@/components/Cards/Card";
import SearchLine from "@/components/Cards/SerachLine";
import Filter from "@/components/Cards/Filter";
import axiosInstance from "@/axiosConfig";
import { searchStore } from "@/store/Store";

export default function Home() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const disposer = autorun(async () => {
      try {
        const response: any = await axiosInstance.get(
          `products/${searchStore.searchText || ""}`,
        );
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return () => disposer();
  }, []);

  return (
    <div className="container flex justify-center">
      <div className="w-11/12">
        <Dragon />

        <SearchLine />

        <div className="items my-3 h-fit flex flex-col md:flex-row gap-4 justify-between">
          <div className="w-full flex justify-center md:w-1/4 lg:w-1/5">
            <Filter />
          </div>

          <div className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center w-full">
            {cards.map((i: any, key) => {
              return <Card data={i} key={key} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
