import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { useLocalStorage } from './app/ui/local/localstorage';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
 const token = request.cookies.get('token')?.value;
 // const token1 = useLocalStorage();

 // const url = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup'
 // if (url) {
 //  if (token) {
 //   return NextResponse.redirect(new URL('/', request.url))
 //  }
 // } else {
 //  if (!token) {
 //   return NextResponse.redirect(new URL('/', request.url))

 //  }
 // }
 console.log(token);
}

// See "Matching Paths" below to learn more
export const config = {
 matcher: ['/about/:path*', '/dashboard/:path*', '/login'],
}