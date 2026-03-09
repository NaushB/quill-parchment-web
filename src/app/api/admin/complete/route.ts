import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
export async function POST(req: NextRequest) {
  const { client_name, project_type, word_count } = await req.json();
  const sql = neon(process.env.DATABASE_URL!);
  await sql`CREATE TABLE IF NOT EXISTS completed_jobs (id SERIAL PRIMARY KEY, client_name TEXT, project_type TEXT, word_count INTEGER, completed_at TIMESTAMP DEFAULT NOW())`;
  await sql`INSERT INTO completed_jobs (client_name, project_type, word_count) VALUES (${client_name}, ${project_type}, ${word_count || null})`;
  return NextResponse.json({ success: true });
}
