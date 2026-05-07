import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        const { pathname } = request.nextUrl;
        const token = request.nextauth.token;

        // Admin routes only accessible by admin
        if (pathname.startsWith('/dashboard/admin')) {
            if (token?.role !== 'admin') {
                // Redirect non-admin users to user dashboard
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
        }

        // User dashboard - if admin tries to access, redirect to admin dashboard
        if (pathname === '/dashboard') {
            if (token?.role === 'admin') {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token // User must be logged in
        },
    }
);

// Specify which routes this middleware should run on
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/dashboard/admin/:path*'
    ]
};