"use client"

import { useParams } from 'next/navigation';

export default function Page() {
    const { id } = useParams();

    return (
        <div>
            <p>Current product ID: {id}</p>
        </div>
    );
}



