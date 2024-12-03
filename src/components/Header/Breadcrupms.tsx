'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname(); // Получаем текущий путь
    const segments = pathname.split("/").filter(Boolean); // Разбиваем на части

    return (
        <nav className="text-sm text-gray-200">
            {segments.length === 0 ? (
                <span>Home</span>
            ) : (
                <div className="flex space-x-2">
                    <Link href="/" className="text-blue-500 hover:underline">
                        Home
                    </Link>
                    {segments.map((segment, index) => {
                        const fullPath = `/${segments.slice(0, index + 1).join("/")}`;

                        // @ts-ignore
                        return (
                            <div key={index} className="flex items-center space-x-1">
                                <span>/</span>
                                <Link href={fullPath} className="text-blue-500 hover:underline">
                                    {decodeURIComponent(segment)}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
