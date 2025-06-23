// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   // Example A/B test logic that has been disabled
//   // if (Math.random() < 0.5) {
//   //   return NextResponse.rewrite(new URL('/variant-a', request.url));
//   // }
//   // return NextResponse.rewrite(new URL('/variant-b', request.url));
// }

// Disable all middleware routes
export const config = {
  matcher: [],
};
