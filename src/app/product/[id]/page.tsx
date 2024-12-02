"use client"

import { useParams } from 'next/navigation';
import Image from "next/image";
import Breadcrumbs from "@/components/Header/Breadcrupms";
import {Icon} from "@iconify/react";
import React, {useEffect, useState} from "react";
import axios from "axios";


function Page() {
    const { id } = useParams();

    const [card, setCards] : any = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/product/${id}`);
                console.log(response.data);
                // @ts-ignore
                setCards(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="p-8 flex justify-center gap-5 justify-start ">
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

            <div className="w-4/6 flex  items-start h-fit relative  rounded-2xl">
                <div className="flex flex-col">

                    <Breadcrumbs/>

                    <div className="w-4/6 flex flex-col gap-2">

                        <h1 className="mt-5 text-4xl mb-3 font-bold text-white">{card.product_name}</h1>
                        <p className="text-xs text-white">{card.product_description}</p>
                        <p className="text font-bold text-white">{card.shortInfo}</p>
                        <div className="w-full  mt-2 rating flex text-yellow-400">
                            <Icon icon="material-symbols:kid-star"/>
                            <Icon icon="material-symbols:kid-star"/>
                            <Icon icon="material-symbols:kid-star"/>
                            <Icon icon="material-symbols:kid-star"/>
                            <Icon icon="material-symbols:kid-star-outline"/>

                            <p className="text-xs px-2 text-gray-400">{card.rate} out of 5</p>
                        </div>

                        <div className="flex mt-8 items-center gap-4">
                            <p className=" text-2xl text-green-400 font-normal">${card.price}</p>
                            <a href={card.url}
                               className=" w-fit h-fit bg-blue-500 text-white text-sm py-2 px-4 rounded-md">Buy
                                Now</a></div>

                        <p className="mt-5">Have questions? <a href={`/product/${card.id}/contact`}
                                                               className="text-blue-500 underline">Contact Us.</a></p>

                    </div>
                </div>
                <div className="w-1/4 h-96 flex flex-col gap-2">
                    <Icon
                        onClick={async () => {
                            try {
                                const response = await axios.put(
                                    'http://localhost:8000/addCart',
                                    {
                                        email: 'test@gmail.com', // Укажите email пользователя
                                        productId: 'product-uuid', // Замените на ID товара
                                        quantity: 1, // Количество
                                    },
                                    {
                                        withCredentials: true, // Включение передачи куков
                                    }
                                );

                                if (response.status === 200) {
                                    alert('Товар добавлен в корзину');
                                }
                            } catch (error: any) {
                                console.error('Ошибка при добавлении товара в корзину:', error);
                                if (error.response) {
                                    alert(`Ошибка: ${error.response.data.error}`);
                                }
                            }
                        }}
                        icon="material-symbols:add-shopping-cart"
                        className="text-4xl hover:text-blue-500 transform transition-transform duration-300 hover:scale-125"
                    />
                    <Icon
                        icon="material-symbols:sms"
                        className="text-4xl hover:text-green-500 transform transition-transform duration-300 hover:scale-125"
                    />
                    <Icon
                        icon="mdi-light:heart"
                        className="text-4xl hover:text-red-500 transform transition-transform duration-300 hover:scale-125"
                    />
                    <Icon
                        icon="mdi-light:heart-off"
                        className="text-4xl hover:text-gray-500 transform transition-transform duration-300 hover:scale-125"
                    />
                </div>


            </div>
        </div>
    );
}

export default Page;