import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Hardline Shop",
  description: "Website for shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>

        <main className="pt-24">
          {children}
        </main>

      </body>
    </html>
  );
}
