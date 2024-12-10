"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/components/Header/Breadcrupms";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/axiosConfig";
import Comments from "@/components/Comments";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

function Page() {
  const { id }: { id: string } = useParams();

  const [card, setCards]: any = useState([]);
  const [email, setEmail]: any = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const cookiesEmail = Cookies.get("email");
    setEmail(cookiesEmail);
    const fetchData = async () => {
      try {
        const response: any = await axiosInstance.get(`product/${id}`);
        setCards(response.data);
        setRating(response.data.rate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleRating = async (rate: number) => {
    try {
      const response = await axiosInstance.post(
        "/rateProduct",
        {
          productId: card.product_uuid,
          rating: rate,
          email: email,
        },
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setRating(rate);
        toast.success("Рейтинг обновлен!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error: any) {
      console.error("Error submitting rating:", error);
      if (error.response) {
        toast.error(`Ошибка: ${error.response.data.error}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div>
      <div className="p-8 flex justify-center gap-5 justify-start">
        <div className="w-1/6">
          {card?.img && (
            <Image
              src={card?.img}
              alt={card?.title || "Product Image"}
              width={400}
              height={300}
              className="rounded-2xl w-full"
            />
          )}
        </div>

        <div className="w-4/6 flex items-start h-fit relative rounded-2xl">
          <div className="flex flex-col">
            <Breadcrumbs />

            <div className="w-4/6 flex flex-col gap-2">
              <h1 className="mt-5 text-4xl mb-3 font-bold text-white">
                {card.product_name}
              </h1>
              <p className="text text-white">{card.product_description}</p>
              <p className="text font-bold text-white">{card.shortInfo}</p>
              <div className="w-full mt-2 rating flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    icon={
                      i <= rating
                        ? "material-symbols:kid-star"
                        : "material-symbols:kid-star-outline"
                    }
                    onClick={() => handleRating(i)}
                    className="cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                ))}
                <p className="text-xs px-2 text-gray-400">{rating} из 5</p>
              </div>

              <div className="flex mt-8 items-center gap-4">
                <p className="text-2xl text-green-400 font-normal">
                  ${card.price}
                </p>
                <p
                  onClick={async () => {
                    try {
                      const response = await axiosInstance.put(
                        "addCart",
                        {
                          email: email,
                          productId: card.product_uuid,
                          quantity: 1,
                        },
                        {
                          withCredentials: true,
                        },
                      );

                      if (response.status === 200) {
                        toast.success("Товар добавлен в корзину!", {
                          position: "top-right",
                          autoClose: 3000,
                        });
                      }
                    } catch (error: any) {
                      console.error(
                        "Ошибка при добавлении товара в корзину:",
                        error,
                      );
                      if (error.response) {
                        toast.error(`Ошибка: ${error.response.data.error}`, {
                          position: "top-right",
                          autoClose: 3000,
                        });
                      }
                    }
                  }}
                  className="flex items-center gap-3 w-fit h-fit bg-blue-500 text-white cursor-pointer hover:bg-indigo-500 duration-300 text-sm py-2 px-4 rounded-md"
                >
                  Купить Сейчас{" "}
                  <Icon icon="material-symbols:add-shopping-cart" />
                </p>
              </div>

              <p className="mt-5">
                Have questions?{" "}
                <a href={`/contacts`} className="text-blue-500 underline">
                  Contact Us.
                </a>
              </p>
            </div>
          </div>
          <div className="w-1/4 h-96 flex flex-col gap-2">
            <a href="#comments">
              <Icon
                icon="material-symbols:sms"
                className="text-4xl hover:text-green-500 transform transition-transform duration-300 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Comments id={id} />
    </div>
  );
}

export default Page;
