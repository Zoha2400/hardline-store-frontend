import React from 'react';
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from 'next/link';


function Card({data}: any) {
    return (
        <Link href={data.url}>
            <div
                className="w-64 h-100 bg-neutral-800 flex flex-col rounded-2xl overflow-hidden justify-center items-center hover:bg-neutral-700 cursor-pointer duration-200 group">
                <div className="overflow-hidden w-full">
                    <Image
                        alt="example product"
                        src={data.img}
                        className="w-full transform group-hover:scale-110 transition-transform duration-300"
                        width={40}
                        height={80}
                    />
                </div>

                <div className="w-full rating flex px-3 py-2 text-yellow-400">
                    <Icon icon="material-symbols:kid-star"/>
                    <Icon icon="material-symbols:kid-star"/>
                    <Icon icon="material-symbols:kid-star"/>
                    <Icon icon="material-symbols:kid-star"/>
                    <Icon icon="material-symbols:kid-star-outline"/>

                    <p className="text-xs px-2 text-gray-400">{data.rate} out of 5</p>
                </div>

                <div className="p-3 flex flex-col gap-3">
                    <p className="text-sm font-bold p-2gi">
                        {data.title}
                    </p>
                    <p>
                        {data.description}
                    </p>
                    <p className="text-xl text-gray-200 font-bold">${data.price}</p>
                </div>
            </div>
        </Link>
    );
}


export default Card;