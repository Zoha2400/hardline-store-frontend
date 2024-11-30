'use client'

import {useEffect} from 'react'
import {useRouter} from "next/navigation";
import Cart from "@/components/Cart";
import Profile from "@/components/Profile";
import Cookies from "js-cookie";

export default function Home() {
    const token = Cookies.get("token");
    const router = useRouter()

    useEffect(() => {
        if(!token){
            router.push("/auth/reg")
        }
    }, [])

    return (
        <div className="w-full h-screen px-2 gap-4 flex justify-center">
            <div>
                <Profile/>
            </div>
            <Cart/>
        </div>
    );
}
