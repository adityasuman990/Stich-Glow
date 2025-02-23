// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware();

// export const config = {
//   matcher: ["/dashboard/:path*"], // Protect dashboard route
// };
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)"], // Allow sign-in and sign-up
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
