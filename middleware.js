import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Skip API and static files
  if (url.pathname.startsWith('/api') || url.pathname.includes('.')) {
    return NextResponse.next();
  }

  const cookieName = 'ab-test-group';
  let abGroup = req.cookies.get(cookieName)?.value;

  // Randomly assign group if none
  if (!abGroup) {
    abGroup = Math.random() < 0.5 ? 'a' : 'b';
    const res = NextResponse.next();
    res.cookies.set(cookieName, abGroup, { path: '/' });
    return res;
  }

  // Rewrite route based on group
  if (url.pathname === '/') {
    url.pathname = abGroup === 'a' ? '/variant-a' : '/variant-b';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // apply only to the root route
};
