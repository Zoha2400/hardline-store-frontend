"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

function Header() {
  const [isReg, setIsReg] = useState<string | null>(""); // State for the cookie value
  const [role, setRole] = useState<string | null>(null); // State for user role
  const pathname = usePathname();
  const isActive = pathname === "/profile";

  useEffect(() => {
    const emailCookie = Cookies.get("email") || "";
    setIsReg(emailCookie);

    async function fetchUserRole() {
      try {
        const response: any = await axios.get("http://localhost:8000/isAdmin", {
          params: { email: emailCookie || "notEmail" },
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 401) {
          setIsReg(null);
          setRole(null);
          return;
        }
        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    }

    fetchUserRole();
  }, []);

  if (isReg === undefined || role === undefined) {
    return null;
  }

  const href = isReg ? "/redirect/profile" : "/redirect/reg";
  const adminHref = role === "admin" ? "/redirect/admin" : null;
  const buttonText = isReg ? "Profile" : "Registration";

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
          {adminHref && (
            <Link href={adminHref}>
              <div className="p-2 rounded cursor-pointer overflow-hidden flex justify-center items-center bg-gray-300 text-black hover:bg-red-600 hover:text-white">
                Admin
              </div>
            </Link>
          )}
          <Link href={href}>
            <div
              className={`profile p-2 rounded cursor-pointer overflow-hidden flex justify-center items-center ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black hover:bg-blue-600 hover:text-white"
              }`}
            >
              {buttonText} {/* Use the conditional button text */}
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
