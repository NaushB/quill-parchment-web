"use client";
import { useState } from "react";

export default function AdminClient({ leads, jobs, totalLeads, monthLeads, jobsCompleted }: any) {
  const [status, setStatus] = useState<Record<number, string>>({});
  const [jobForm, setJobForm] = useState({ client_name: "", project_type: "", word_count: "" });
  const [jobMsg, setJobMsg] = useState("");

  async function markContacted(id: number) {
    setStatus(s => ({ ...s, [id]: "loading" }));
    await fetch("/api/admin/contacted", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    setStatus(s => ({ ...s, [id]: "done" }));
  }

  async function submitJob(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/admin/complete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(jobForm) });
    setJobMsg("Job saved!");
    setJobForm({ client_name: "", project_type: "", word_count: "" });
    setTimeout(() => setJobMsg(""), 3000);
  }

  const inp = { width: "100%", background: "#0f0e0b", border: "1px solid #2d2820", borderRadius: "6px", padding: "10px 14px", color: "#e8e4dc", fontSize: "14px", fontFamily: "Georgia,serif" };
  const card = { background: "#1a1813", border: "1px solid #2d2820", borderRadius: "8px", padding: "24px", marginBottom: "24px" };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "36px", color: "#fff" }}>Admin Dashboard</h1>
        <a href="/api/admin/logout" style={{ color: "#8a7f6e", fontFamily: "monospace", fontSize: "13px" }}>Log Out</a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginBottom: "32px" }}>
        {[["Leads This Month", monthLeads], ["Total Leads", totalLeads], ["Jobs Completed", jobsCompleted]].map(([l, v]) => (
          <div key={l as string} style={{ background: "#1a1813", border: "1px solid #2d2820", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontFamily: "Georgia,serif", fontSize: "48px", fontWeight: 900, color: "#c9973a" }}>{v}</div>
            <div style={{ color: "#8a7f6e", fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px", marginTop: "8px" }}>{l as string}</div>
          </div>
        ))}
      </div>

      <div style={card}>
        <h2 style={{ fontFamily: "Georgia,serif", color: "#e8e4dc", fontSize: "22px", marginBottom: "20px" }}>New Leads</h2>
        {leads.length === 0 ? <p style={{ color: "#8a7f6e" }}>No leads yet.</p> : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #2d2820" }}>
                  {["Name", "Email", "Service", "Pages", "Date", "Status", "Action"].map(h => (
                    <th key={h} style={{ color: "#c9973a", fontFamily: "monospace", fontSize: "11px", letterSpacing: "2px", padding: "8px 12px", textAlign: "left" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l: any) => (
                  <tr key={l.id} style={{ borderBottom: "1px solid #2d2820" }}>
                    <td style={{ padding: "12px", color: "#e8e4dc" }}>{l.name}</td>
                    <td style={{ padding: "12px" }}><a href={`mailto:${l.email}`} style={{ color: "#c9973a", textDecoration: "none" }}>{l.email}</a></td>
                    <td style={{ padding: "12px", color: "#8a7f6e" }}>{l.service}</td>
                    <td style={{ padding: "12px", color: "#8a7f6e" }}>{l.word_count || "—"}</td>
                    <td style={{ padding: "12px", color: "#8a7f6e", fontFamily: "monospace", fontSize: "12px" }}>{new Date(l.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: "12px" }}>
                      <span style={{ background: l.status === "contacted" ? "#1a2e1a" : "#2a1f0e", color: l.status === "contacted" ? "#4a6741" : "#c9973a", padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontFamily: "monospace" }}>{status[l.id] === "done" ? "contacted" : l.status}</span>
                    </td>
                    <td style={{ padding: "12px" }}>
                      {l.status !== "contacted" && status[l.id] !== "done" && (
                        <button onClick={() => markContacted(l.id)} style={{ background: "transparent", border: "1px solid #2d2820", color: "#e8e4dc", padding: "6px 12px", borderRadius: "4px", fontFamily: "monospace", fontSize: "11px", cursor: "pointer" }}>
                          {status[l.id] === "loading" ? "..." : "Mark Contacted"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <div style={card}>
          <h2 style={{ fontFamily: "Georgia,serif", color: "#e8e4dc", fontSize: "22px", marginBottom: "20px" }}>Mark Job Complete</h2>
          {jobMsg && <div style={{ background: "#1a2e1a", border: "1px solid #4a6741", borderRadius: "6px", padding: "12px", marginBottom: "16px", color: "#a0c89a", fontFamily: "monospace", fontSize: "13px" }}>{jobMsg}</div>}
          <form onSubmit={submitJob} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input placeholder="Client Name" required value={jobForm.client_name} onChange={e => setJobForm(f => ({ ...f, client_name: e.target.value }))} style={inp} />
            <input placeholder="Project Type (e.g. Deposition)" required value={jobForm.project_type} onChange={e => setJobForm(f => ({ ...f, project_type: e.target.value }))} style={inp} />
            <input placeholder="Page Count" type="number" value={jobForm.word_count} onChange={e => setJobForm(f => ({ ...f, word_count: e.target.value }))} style={inp} />
            <button type="submit" style={{ background: "#c9973a", color: "#0f0e0b", padding: "12px", borderRadius: "6px", fontFamily: "monospace", fontSize: "13px", letterSpacing: "2px", fontWeight: 700, border: "none", cursor: "pointer" }}>MARK COMPLETE</button>
          </form>
        </div>
        <div style={card}>
          <h2 style={{ fontFamily: "Georgia,serif", color: "#e8e4dc", fontSize: "22px", marginBottom: "20px" }}>Quick Links</h2>
          {[["View Live Site", "https://quillandparchment.ca"], ["Services Page", "/services"], ["Rates Page", "/rates"], ["Contact Page", "/contact"], ["Samples Page", "/samples"]].map(([l, h]) => (
            <a key={l} href={h} target="_blank" rel="noreferrer" style={{ display: "block", color: "#c9973a", fontFamily: "monospace", fontSize: "14px", padding: "10px 0", borderBottom: "1px solid #2d2820", textDecoration: "none" }}>{l} →</a>
          ))}
        </div>
      </div>
    </div>
  );
}
