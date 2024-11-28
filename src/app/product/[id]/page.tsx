"use client"

import { useParams } from 'next/navigation';

function Page() {
    const { id } = useParams();

    return (
        <div>
            <p>Current product ID: {id}</p>
        </div>
    );
}
export default Page;