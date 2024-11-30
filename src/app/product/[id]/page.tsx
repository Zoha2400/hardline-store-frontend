"use client"

import { useParams } from 'next/navigation';
import Image from "next/image";
import Breadcrumbs from "@/components/Header/Breadcrupms";
import {Icon} from "@iconify/react";
import React, {useEffect, useState} from "react";
import axios from "axios";

const fakeData = {
        img: '/example.svg',
        rate: 4.5,
        title: 'MSI X344',
        price: 1.499,
        description: 'Intel Core i9-11900KF, 16GB DDR4, 512GB SSD, NVIDIA GeForce RTX 3060 Ti, 165W, 100% UEFI, 144Hz, 1080p, 1024, 1024',
        shortInfo: "This is the game laptop for your life. This is the game laptop for your life. This is the game laptop for your life. This is the game laptop for your life. This is the game laptop for your life.",
        id: '184329',
        url: '/product/184329',
    }

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
        <div className="p-8 flex gap-5 justify-start">
            <div className="w-1/3">
                <Image src={card.img} alt={card.title}
                       width={400} height={300} className="rounded-2xl w-full"/>
            </div>

            <div className="w-2/3 flex items-end h-fit relative  rounded-2xl">
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