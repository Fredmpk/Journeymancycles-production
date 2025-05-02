// middleware.ts for Next.js 15
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Add debugging to see if middleware runs
  console.log("🔐 MIDDLEWARE RUNNING - Next.js 15");

  // Basic Auth implementation
  const basicAuth = request.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(authValue, "base64").toString().split(":");

    // Log for debugging
    console.log(`📝 Auth attempt: ${user}`);

    // Hardcode credentials temporarily for testing
    // Once this works, switch back to env variables
    if (user === "journeymen" && pwd === "cycles") {
      console.log("✅ Auth successful");
      return NextResponse.next();
    }
  }

  // Auth failed, return 401
  console.log("❌ Auth failed, sending 401");
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

// Simpler matcher pattern for Next.js 15
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/* (direct image files)
     * - public/* (public assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images|public).*)",
  ],
};
