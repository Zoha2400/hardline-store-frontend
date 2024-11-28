import React from 'react';
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from 'next/link'


function Header() {
    return (
        <header className="fixed top-0 z-20 left-0 bg-neutral-700 w-full h-24 border-b-1 border-b-white text-white">
            <section className="h-8 bg-neutral-900 flex justify-between items-center p-2 text-xs">
                <p className="text-gray-300">
                    Mon-Thu: <span className="text-white">9:00 AM - 5:30 PM</span>
                </p>
                <p>
                    Visit our showroom at TUIT Uzbekistan <a href='#' className="underline font-bold">Contact Us</a>
                </p>

                <div className="flex items-center justify-center gap-3">
                    Call Us: (998) 91 777 88 66
                    <p className="flex justify-center gap-1">
                        <Icon icon="line-md:facebook" width='20'/>
                        <Icon icon="line-md:instagram" width='20'   />
                    </p>
                </div>
            </section>

            <section className="flex h-16 justify-between items-center px-4">
                <Link href="/">
                    <div className="">
                        <Image alt="main_icon" src="/logo.png" width={50} height={50}/>
                    </div>
                </Link>


                <nav className="flex justify-between items-center gap-5 text-sm">
                    <Link href='/' className="text-gray-300 hover:text-white">All Products</Link>
                    <Link href='/laptops' className="text-gray-300 hover:text-white">Laptops</Link>
                    <Link href='/pc' className="text-gray-300 hover:text-white">PC</Link>
                    <Link href='/repairs' className="text-gray-300 hover:text-white">Repairs</Link>
                    <Link href='/about' className="text-gray-300 hover:text-white">About Us</Link>
                    <Link href='/contacts' className="text-gray-300 hover:text-white">Contacts</Link>
                </nav>

                <div className="flex items-center gap-2">
                    <Icon icon="material-symbols:search-rounded" width="22"/>
                    <Icon icon="material-symbols:shopping-cart" width="22"/>
                    <div className="profile w-10 h-10 rounded-full overflow-hidden flex justify-center items-center text-black bg-gray-300">
                        <Icon icon="material-symbols:person" className="-mb-4" width="100"/>
                    </div>
                </div>
            </section>


        </header>
    );
}

export default Header;