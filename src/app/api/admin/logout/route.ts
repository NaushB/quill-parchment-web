import { NextResponse } from "next/server";
export async function GET() {
  const res = NextResponse.redirect(new URL("/admin/login", "https://quillandparchment.ca"));
  res.cookies.set("admin_auth", "", { maxAge: 0, path: "/" });
  return res;
}
