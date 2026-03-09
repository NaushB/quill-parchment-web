import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service, message, wordCount } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  try {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        service VARCHAR(100),
        word_count INTEGER,
        message TEXT,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
    await sql`
      INSERT INTO leads (name, email, service, word_count, message)
      VALUES (${name}, ${email}, ${service}, ${wordCount || null}, ${message})
    `;
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "onboarding@resend.dev",
          to: process.env.EMAIL_TO || "kjbutt@quillandparchment.ca",
          subject: `New inquiry from ${name} — ${service}`,
          html: `<h2>New inquiry from ${name}</h2><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Pages:</strong> ${wordCount || "Not specified"}</p><p><strong>Message:</strong><br>${message}</p>`,
        }),
      });
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "onboarding@resend.dev",
          to: email,
          subject: "Thank you for contacting Quill & Parchment",
          html: `<p>Hi ${name},</p><p>Thank you for reaching out. Khurram has received your inquiry and will reply within 24 hours.</p><p>In the meantime, feel free to review the <a href="https://quillandparchment.ca/samples">work samples</a> or download the <a href="https://quillandparchment.ca/preferences">preference sheet</a> if you're a first-time client.</p><p>Best,<br>Khurram Butt<br>Quill & Parchment<br>+1 647 986 5007</p>`,
        }),
      });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
