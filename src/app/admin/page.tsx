import { neon } from "@neondatabase/serverless";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("admin_auth");
  if (auth?.value !== process.env.ADMIN_PASSWORD) {
    redirect("/admin/login");
  }
  const sql = neon(process.env.DATABASE_URL!);
  await sql`CREATE TABLE IF NOT EXISTS leads (id SERIAL PRIMARY KEY, name VARCHAR(200) NOT NULL, email VARCHAR(200) NOT NULL, service VARCHAR(100), word_count INTEGER, message TEXT, status VARCHAR(50) DEFAULT 'new', created_at TIMESTAMP DEFAULT NOW())`;
  await sql`CREATE TABLE IF NOT EXISTS completed_jobs (id SERIAL PRIMARY KEY, client_name TEXT, project_type TEXT, word_count INTEGER, completed_at TIMESTAMP DEFAULT NOW())`;
  const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
  const jobs = await sql`SELECT * FROM completed_jobs ORDER BY completed_at DESC`;
  const thisMonth = leads.filter((l: any) => new Date(l.created_at) > new Date(new Date().setDate(1)));
  return <AdminClient leads={leads} jobs={jobs} totalLeads={leads.length} monthLeads={thisMonth.length} jobsCompleted={jobs.length} />;
}
