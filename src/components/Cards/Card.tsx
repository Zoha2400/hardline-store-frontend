import React from 'react';
import Image from 'next/image'
import { Icon } from '@iconify/react';


function Card() {
    return (
        <div className="w-64 h-100 bg-neutral-800 flex flex-col rounded-2xl overflow-hidden justify-center items-center">
            <Image alt="example product" src="/example.svg" className="w-full" width={40} height={80}/>

            <div className="w-full rating flex p-2 text-yellow-400">
                <Icon icon="material-symbols:kid-star" />
                <Icon icon="material-symbols:kid-star" />
                <Icon icon="material-symbols:kid-star" />
                <Icon icon="material-symbols:kid-star" />
                <Icon icon="material-symbols:kid-star-outline" />

                <p className="text-xs px-2 text-gray-400">
                    4.5 out of 5
                </p>
            </div>

            <div className="p-2 flex flex-col gap-3">
                <p className="text-sm font-bold p-2gi">
                    EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
                </p>
                <p className="text-xl">
                    $1,199.99
                </p>
            </div>
        </div>
    );
}

export default Card;