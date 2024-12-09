import React from "react";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react";
import { searchStore } from "@/store/Store";

function SearchLine() {
  const handleSearchToggle = () => {
    searchStore.setActive();
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className="bg-indigo-500 px-3 overflow-hidden hover:bg-indigo-600 duration-300 cursor-pointer font-black text-sm rounded-3xl w-fit flex gap-1 items-center justify-center"
        onClick={handleSearchToggle}
      >
        <input
          type="text"
          onChange={(e: any) => {
            searchStore.setText(e.target.value);
          }}
          className="text-white placeholder:text-white bg-transparent p-2 w-full h-full border-none outline-none"
          placeholder="Поиск..."
        />
        <Icon
          icon="material-symbols-light:search-rounded"
          className="font-black text-3xl"
        />
      </div>
    </div>
  );
}

export default observer(SearchLine);
