"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Cookies from "js-cookie";

const pagesWithoutLayout = [
  "auth",
  "auth/reg",
  "auth/login",
  "auth/forgot",
  "auth/reset",
  "profile/change",
  "redirect",
];

const pagesWithRegistration = [
  "admin",
  "admin/users",
  "admin/roles",
  "admin/permissions",
  "admin/logs",
  "admin/settings",
  "profile",
  "profile/change",
  "orders",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const email = Cookies.get("email");

  useEffect(() => {
    if (
      pagesWithRegistration.some((page) => pathname.includes(page)) &&
      !email
    ) {
      router.replace("/auth/reg");
    }
  }, [pathname, email, router]);

  const shouldUseLayout = !pagesWithoutLayout.some((page) =>
    pathname.includes(page),
  );

  return (
    <html lang="en">
      <body className="antialiased">
        {shouldUseLayout ? (
          <>
            <Header />
            <main className="mt-28">{children}</main>
            <Footer />
          </>
        ) : (
          <main>{children}</main>
        )}
      </body>
    </html>
  );
}
