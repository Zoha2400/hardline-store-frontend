import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Middleware triggered');  // Добавим лог, чтобы увидеть, что middleware вызывается
    const rawCookie = request.cookies.get('email')?.value;

    if (!rawCookie) {
        console.log('Куков нет');
        const response = NextResponse.next();
        response.cookies.set('example-cookie', 'default-value', {
            httpOnly: true,
            secure: true,
            path: '/',
        });
        return response;
    }

    try {
        const parsedCookie = JSON.parse(rawCookie);
        console.log('Parsed cookie:', parsedCookie); // Убедитесь, что parsedCookie имеет значение
    } catch (error) {
        console.error('Ошибка парсинга куки:', error);
    }

    return NextResponse.next();
}

// Применить middleware ко всем маршрутам
export const config = {
    matcher: '/',
};
