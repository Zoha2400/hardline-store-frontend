"use client"

import { useParams } from 'next/navigation';

export default function ProductPage() {
    const { id } = useParams();  // Получаем параметр 'id' из URL

    return (
        <div>
            <p>Current product ID: {id}</p>
        </div>
    );
}
