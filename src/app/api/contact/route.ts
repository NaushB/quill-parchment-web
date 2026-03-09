import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendKey}` },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "kjbutt@quillandparchment.ca",
          subject: `New inquiry from ${name} — ${service}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Message:</strong> ${message}</p>`,
        }),
      });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
