'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashboard = new URL('/pages/dashboard', request.url);
    const urlAlter = new URL('/pages/dashboard/alter', request.url);
    const urlRegister = new URL('/pages/dashboard/register', request.url);
    const isTokenValidated = validateToken(token);

    
    if (!isTokenValidated || !token) { //verifica se o token não é valido ou não existe)
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) { //verifica se o token não é valido ou não existe)
        if (request.nextUrl.pathname === '/pages/dashboard/alter') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (!isTokenValidated || !token) { //verifica se o token não é valido ou não existe)
        if (request.nextUrl.pathname === '/pages/dashboard/register') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated || token) { //verifica se o token é válido)
        if (request.nextUrl.pathname === '/') {//e ta na page de login, vai pra dashbord
            return NextResponse.redirect(urlDashboard);
        }
    }

    if (isTokenValidated || token) { //verifica se o token é válido)
        if (request.nextUrl.pathname === '/pages/dashboard/alter') {//e ta na page de login, vai pra dashbord
            return NextResponse.redirect(urlAlter);
        }
    }

    if (isTokenValidated || token) { //verifica se o token é válido)
        if (request.nextUrl.pathname === '/pages/dashboard/register') {//e ta na page de login, vai pra dashbord
            return NextResponse.redirect(urlRegister);
        }
    }
}

    NextResponse.next();
;
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/alter', '/pages/dashboard/register']
};

