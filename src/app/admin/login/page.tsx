"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminLogin() {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: pw }) });
    if (r.ok) { router.push("/admin"); router.refresh(); }
    else setError("Incorrect password");
  }
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f0e0b" }}>
      <div style={{ background: "#1a1813", border: "1px solid #2d2820", borderRadius: "8px", padding: "48px", width: "100%", maxWidth: "400px" }}>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "28px", color: "#fff", marginBottom: "8px" }}>Admin Login</h1>
        <p style={{ color: "#8a7f6e", fontFamily: "monospace", fontSize: "12px", marginBottom: "32px" }}>QUILL & PARCHMENT</p>
        {error && <p style={{ color: "#c87a7a", marginBottom: "16px", fontSize: "14px" }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="Password" required style={{ background: "#0f0e0b", border: "1px solid #2d2820", borderRadius: "6px", padding: "12px 16px", color: "#e8e4dc", fontSize: "15px" }} />
          <button type="submit" style={{ background: "#c9973a", color: "#0f0e0b", padding: "14px", borderRadius: "6px", fontFamily: "monospace", fontSize: "13px", letterSpacing: "2px", fontWeight: 700, border: "none", cursor: "pointer" }}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}
