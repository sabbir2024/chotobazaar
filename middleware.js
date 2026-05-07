import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request) {
        const { pathname } = request.nextUrl;
        const token = request.nextauth.token;

        // Only admin can access admin routes
        if (pathname.startsWith('/dashboard/admin')) {
            if (token?.role !== 'admin') {
                return NextResponse.redirect(
                    new URL('/dashboard', request.url)
                );
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/dashboard/admin/:path*'
    ]
};