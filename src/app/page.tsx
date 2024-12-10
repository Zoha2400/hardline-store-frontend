"use client";

import { useEffect } from "react";
import { observer } from "mobx-react";
import Dragon from "@/components/Header/Dragon";
import Card from "@/components/Cards/Card";
import SearchLine from "@/components/Cards/SerachLine";
import Filter from "@/components/Cards/Filter";
import axiosInstance from "@/axiosConfig";
import { searchStore } from "@/store/Store";

const Home = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await axiosInstance.get(
          `products/${searchStore.searchText || ""}`,
        );
        searchStore.setCards(response.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchStore.searchText, searchStore.filteredCards]);

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
            {searchStore.filteredCards.map((card, index) => (
              <Card data={card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
