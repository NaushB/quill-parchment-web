import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "80px 24px", background: "radial-gradient(ellipse at center, #1a1510 0%, #0f0e0b 70%)" }}>
        <p style={{ color: "#c9973a", fontFamily: "monospace", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "24px" }}>Professional Transcript Proofreading</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "16px", maxWidth: "900px" }}>
          Rule-Based.<br />Reporter-Focused.<br />Reliable.
        </h1>
        <div style={{ width: "60px", height: "2px", background: "#c9973a", margin: "24px auto" }}></div>
        <p style={{ color: "#8a7f6e", fontSize: "18px", lineHeight: 1.7, maxWidth: "600px", marginBottom: "40px" }}>
          Expert transcript proofreading for court reporters across Canada. Meticulous annotations, dependable turnaround, and deep familiarity with Morson's, BGGP, and Gregg.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/contact" style={{ background: "#c9973a", color: "#0f0e0b", padding: "16px 36px", borderRadius: "6px", fontFamily: "monospace", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>Get a Free Quote</Link>
          <Link href="/samples" style={{ border: "1px solid #2d2820", color: "#e8e4dc", padding: "16px 36px", borderRadius: "6px", fontFamily: "monospace", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>View Samples</Link>
        </div>
      </section>

      <section style={{ padding: "60px 32px", borderTop: "1px solid #2d2820", borderBottom: "1px solid #2d2820" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "40px", textAlign: "center" }}>
          {[["$0.50","Standard Rate /page"],["48hr","Expedited Turnaround"],["25 Lines","Standard Page"],["15+","Years Experience"]].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontSize: "36px", fontWeight: 900, color: "#c9973a", fontFamily: "Georgia, serif" }}>{n}</div>
              <div style={{ color: "#8a7f6e", fontSize: "13px", marginTop: "8px", fontFamily: "monospace" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "80px 32px", maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#c9973a", fontFamily: "monospace", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>What I Do</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 900, marginBottom: "48px" }}>Specialized for Court Reporters</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          {[
            ["Transcript Proofreading","Meticulous review of court transcripts. Grammar, punctuation, consistency — all marked directly on your PDF."],
            ["PDF Annotation Workflow","Corrections delivered in red text with yellow highlighting via PDF Annotator. Compatible with Adobe Acrobat Reader."],
            ["Style Guide Expertise","Deep familiarity with Morson's, BGGP, and Gregg Reference Manual. Your preferred style, applied consistently."],
            ["WordPerfect Support","Comfortable working in both PDF and WordPerfect formats — whichever your workflow requires."],
            ["Rush Turnaround","Standard 3–5 days. Expedited 1–2 days available. Reliable delivery every time."],
            ["First-Time Preference Sheet","New clients complete a preference sheet so every job matches your exact style from day one."],
          ].map(([title, desc]) => (
            <div key={title} style={{ background: "#1a1813", border: "1px solid #2d2820", borderRadius: "8px", padding: "28px" }}>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "#e8e4dc", marginBottom: "12px" }}>{title}</h3>
              <p style={{ color: "#8a7f6e", fontSize: "14px", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#1a1510", padding: "80px 32px", textAlign: "center" }}>
        <p style={{ color: "#c9973a", fontFamily: "monospace", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>Simple Process</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 900, marginBottom: "48px" }}>How It Works</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", maxWidth: "900px", margin: "0 auto 40px" }}>
          {[["01","Send Your Transcript","Email your PDF or WordPerfect file to Khurram with your deadline."],["02","Expert Review","Khurram proofreads using PDF Annotator — red text and yellow highlighting."],["03","Receive & Review","Annotated PDF returned by email. Open in Adobe Acrobat Reader to see all corrections."]].map(([n,t,d]) => (
            <div key={n} style={{ flex: "1", minWidth: "200px", maxWidth: "260px" }}>
              <div style={{ fontSize: "48px", fontWeight: 900, color: "#c9973a", fontFamily: "Georgia, serif" }}>{n}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", marginBottom: "12px" }}>{t}</h3>
              <p style={{ color: "#8a7f6e", fontSize: "14px", lineHeight: 1.7 }}>{d}</p>
            </div>
          ))}
        </div>
        <Link href="/how-it-works" style={{ border: "1px solid #2d2820", color: "#e8e4dc", padding: "14px 28px", borderRadius: "6px", fontFamily: "monospace", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none" }}>Full Process Details</Link>
      </section>

      <section style={{ background: "#c9973a", padding: "60px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 900, color: "#0f0e0b", marginBottom: "12px" }}>Ready to Work Together?</h2>
        <p style={{ color: "#5a3e1b", fontSize: "16px", marginBottom: "32px" }}>Send your first transcript and get a free quote within 24 hours.</p>
        <Link href="/contact" style={{ background: "#0f0e0b", color: "#c9973a", padding: "16px 36px", borderRadius: "6px", fontFamily: "monospace", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>Contact Khurram</Link>
      </section>
    </div>
  );
}
