import Link from "next/link";
export default function About() {
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>About</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>The Editor Behind the Words</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"32px"}}></div>
      <img src="/khurram.jpg" alt="Khurram Butt" style={{width:"200px",height:"200px",borderRadius:"50%",objectFit:"cover",marginBottom:"32px",border:"3px solid #c9973a"}} />
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"24px"}}>Khurram Butt is a professional proofreader and editor based in Markham, Ontario, with over 15 years of experience refining legal and business documents. He now brings that precision exclusively to court reporter transcript proofreading.</p>
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"40px"}}>Every transcript Khurram touches receives the same care — meticulous attention to punctuation, consistency, and the specific style conventions that court reporters rely on. He works directly with Morson's English Guide for Court Reporters, Bad Grammar/Good Punctuation, and the Gregg Reference Manual.</p>
      <blockquote style={{borderLeft:"3px solid #c9973a",paddingLeft:"24px",marginBottom:"40px"}}>
        <p style={{fontFamily:"Georgia,serif",fontSize:"20px",color:"#e8e4dc",fontStyle:"italic",lineHeight:1.7}}>"Every transcript represents a reporter's professionalism and a client's permanent record. I treat each one with the care it deserves."</p>
        <footer style={{color:"#8a7f6e",fontSize:"14px",marginTop:"12px",fontFamily:"monospace"}}>— Khurram Butt, Quill & Parchment</footer>
      </blockquote>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px",marginBottom:"48px"}}>
        {[["Precision","Every word, every comma — reviewed against your preferred style guide."],["Trust","Confidential handling of all transcripts. Professional always."],["Reliability","Deadlines are commitments. Your transcript is returned on schedule, every time."]].map(([t,d])=>(
          <div key={t} style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px"}}>
            <h3 style={{fontFamily:"Georgia,serif",color:"#c9973a",marginBottom:"12px"}}>{t}</h3>
            <p style={{color:"#8a7f6e",fontSize:"14px",lineHeight:1.7}}>{d}</p>
          </div>
        ))}
      </div>
      <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Work With Khurram</Link>
    </div>
  );
}
