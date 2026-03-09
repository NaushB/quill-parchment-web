import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const url = new URL(req.url);
  const res = NextResponse.redirect(new URL("/admin/login", url.origin));
  res.cookies.set("admin_auth", "", { maxAge: 0, path: "/" });
  return res;
}
