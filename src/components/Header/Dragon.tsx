import React from 'react';
import Image from "next/image";

function Dragon() {
    return (
        <div className="w-full rounded-2xl overflow-hidden my-2 mt-28">
            <Image className="w-full h-auto" alt="new on our website" src="/drag.svg" width="300" height="100"></Image>
        </div>
    );
}

export default Dragon;