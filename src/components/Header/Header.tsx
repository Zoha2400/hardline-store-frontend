"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

function Header() {
  const [isReg, setIsReg] = useState<string | null>(null); // Стейт для значения из куки
  const pathname = usePathname();
  const isActive = pathname === "/profile";

  useEffect(() => {
    const emailCookie = Cookies.get("email") || null;
    setIsReg(emailCookie);
  }, []);

  if (isReg === undefined) {
    return null;
  }

  const href = isReg ? "/profile" : "/auth/reg";

  return (
    <header className="fixed top-0 z-20 left-0 bg-neutral-700 w-full h-24 border-b-1 border-b-white text-white">
      <section className="h-8 bg-neutral-900 flex justify-between items-center p-2 text-xs">
        <span className="text-gray-300 flex items-center gap-2">
          <b className="bg-indigo-500 p-1 rounded">Hardline Shop</b>
          Наш магазин находится по локации ТУИТ. Рабочие дни ПН-ПТ:
          <p className="text-white">9:00 - 18:00</p>
        </span>

        <div className="flex items-center justify-center gap-3">
          Call Us: (998) 91 777 88 66
          <p className="flex justify-center gap-1">
            <Icon icon="line-md:facebook" width="20" />
            <Icon icon="line-md:instagram" width="20" />
          </p>
        </div>
      </section>

      <section className="flex h-16 justify-between items-center px-4">
        <Link href="/">
          <div>
            <Image alt="main_icon" src="/logo.png" width={50} height={50} />
          </div>
        </Link>

        <nav className="flex justify-between items-center gap-5 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white">
            Products
          </Link>
          <Link href="/repairs" className="text-gray-300 hover:text-white">
            Repairs
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link href="/contacts" className="text-gray-300 hover:text-white">
            Contacts
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={href}>
            <div
              className={`profile p-2 rounded cursor-pointer overflow-hidden flex justify-center items-center ${
                isActive
                  ? "bg-blue-600 text-white" // Активный стиль
                  : "bg-gray-300 text-black hover:bg-blue-600 hover:text-white" // Обычный стиль
              }`}
            >
              Profile
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
