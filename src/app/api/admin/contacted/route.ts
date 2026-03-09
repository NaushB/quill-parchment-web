import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
export async function POST(req: NextRequest) {
  const { id } = await req.json();
  const sql = neon(process.env.DATABASE_URL!);
  await sql`UPDATE leads SET status='contacted' WHERE id=${id}`;
  return NextResponse.json({ success: true });
}
