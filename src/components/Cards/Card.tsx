import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Card({ data }: any) {
  return (
    <Link href={`/product/${data.product_id}`}>
      <div className="w-64 h-96 bg-neutral-800 flex flex-col rounded-2xl overflow-hidden justify-center items-center hover:bg-neutral-700 cursor-pointer duration-200 group">
        <div className="overflow-hidden w-full">
          <Image
            alt="example product"
            src={`${data.img}`}
            className="w-full transform group-hover:scale-110 transition-transform duration-300"
            width={400}
            height={300}
            quality={100}
          />
        </div>

        <div className="p-3 flex flex-col gap-2">
          <p className="text-xl font-bold p-2gi">{data.product_name}</p>
          <div className="w-full rating flex text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                icon={
                  i < data.rate
                    ? "material-symbols:kid-star"
                    : "material-symbols:kid-star-outline"
                }
                className="cursor-pointer transition-transform duration-300 group-hover:scale-125"
              />
            ))}
            <p className="text-xs px-2 text-gray-400">
              {typeof data.rate === "number" ? data.rate.toFixed(1) : "0.0"} из
              5
            </p>
          </div>
          <p className="text-sm">
            {data?.product_description
              ? `${data.product_description.slice(0, 40)}...`
              : "Описание отсутствует"}
          </p>
          <p className="text-xl text-gray-200 font-bold">${data.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
