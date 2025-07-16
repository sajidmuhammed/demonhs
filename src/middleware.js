import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const protectedRoutes = {
  '/doctor_dashboard': ['physician'],
  '/patient_dashboard': ['patient'],
  '/admin_dashboard': ['admin'],
};

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return null;
  }
}

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get('auth_token')?.value;
  const pathname = url.pathname;

  const matchedPrefix = Object.keys(protectedRoutes).find(prefix =>
    pathname.startsWith(prefix)
  );

  if (!matchedPrefix) {
    return NextResponse.next();
  }

  if (!token) {
    url.pathname = `/`;
    return NextResponse.redirect(url);
  }

  const user = await verifyToken(token);

  if (!user || !protectedRoutes[matchedPrefix].includes(user.userType)) {
    url.pathname = '/unauthorised';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/doctor_dashboard/:path*',
    '/patient_dashboard/:path*',
  ],
};
