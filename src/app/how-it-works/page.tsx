import Link from "next/link";
export default function HowItWorks() {
  return (
    <div style={{maxWidth:"720px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Process</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>How to Work With Khurram</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"48px"}}></div>
      <div style={{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"48px"}}>
        {[["01","Reach Out","Contact Khurram via email or the contact form. Describe your transcript — type, approximate page count, and your deadline."],["02","Confirm the Schedule","Khurram confirms availability and turnaround. You'll get a clear quote before any work begins."],["03","Send Your File","Email your transcript as a PDF. Khurram also works in WordPerfect if that's your preferred format."],["04","Complete the Preference Sheet","First-time client? Fill out the preference sheet so Khurram matches your exact style guide from the very first job."],["05","Receive Your Annotated PDF","Khurram marks corrections directly on the PDF — red text for changes, yellow highlighting for flagged areas. Returned via email on schedule."],["06","Open in Adobe Acrobat Reader","Download the free Adobe Acrobat Reader (latest version) to view all annotations clearly. Most browsers won't show PDF annotations."]].map(([n,t,d])=>(
          <div key={n} style={{display:"flex",gap:"24px",background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px"}}>
            <div style={{color:"#c9973a",fontFamily:"Georgia,serif",fontSize:"28px",fontWeight:900,minWidth:"48px"}}>{n}</div>
            <div>
              <h3 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",fontSize:"18px",marginBottom:"8px"}}>{t}</h3>
              <p style={{color:"#8a7f6e",fontSize:"14px",lineHeight:1.7,margin:0}}>{d}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Get Started</Link>
        <Link href="/preferences" style={{border:"1px solid #2d2820",color:"#e8e4dc",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Preference Sheet</Link>
      </div>
    </div>
  );
}
