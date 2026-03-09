import Link from "next/link";
export default function Preferences() {
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>First-Time Clients</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>Proofreading Preferences</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"24px"}}></div>
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"48px"}}>Working together for the first time? Complete this preference sheet so Khurram can tailor every job to your exact style from day one — no back and forth needed.</p>
      <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"32px",marginBottom:"32px"}}>
        <h2 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",fontSize:"22px",marginBottom:"24px"}}>What the Preference Sheet Covers</h2>
        {[["Style Guide","Which reference guide you follow — Morson's, BGGP, or Gregg."],["Punctuation Rules","Oxford comma, objection formatting, colon vs comma conventions."],["Capitalization","Paragraph, page, subsection, Social Security, AM/PM preferences."],["Number Style","Spelled out vs numeral conventions for your jurisdiction."],["Hyphenation","Before-noun rules, ethnicity hyphenation, compound modifiers."],["Special Formatting","Exhibit handling, Bates numbers, quotation conventions."]].map(([t,d])=>(
          <div key={t} style={{display:"flex",gap:"16px",padding:"14px 0",borderBottom:"1px solid #2d2820"}}>
            <div style={{color:"#c9973a",fontFamily:"monospace",fontSize:"13px",minWidth:"160px"}}>{t}</div>
            <div style={{color:"#8a7f6e",fontSize:"14px"}}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <a href="/PROOFREADING-PREFERNCES.docx" download style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Download Preference Sheet</a>
        <Link href="/contact" style={{border:"1px solid #2d2820",color:"#e8e4dc",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Contact Khurram</Link>
      </div>
    </div>
  );
}
