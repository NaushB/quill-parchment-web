import Link from "next/link";
export default function Services() {
  return (
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Services</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>Transcript Proofreading for Court Reporters</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"32px"}}></div>
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"60px"}}>Khurram provides one core service done exceptionally well — professional proofreading of court reporter transcripts, delivered via PDF annotation.</p>
      {[
        {title:"Standard Proofreading",turnaround:"3–5 business days",rate:"$0.50/page",desc:"Full proofreading pass on your transcript. Grammar, punctuation, capitalization, consistency, and style guide compliance — all reviewed and annotated directly on your PDF.",includes:["Grammar and spelling review","Punctuation per your style guide","Capitalization consistency","Q&A formatting review","Red text + yellow highlight annotations","Returned via email"]},
        {title:"Expedited 2-Day",turnaround:"2 business days",rate:"$0.75/page",desc:"Same thorough proofreading, delivered in 2 business days for tighter deadlines.",includes:["Everything in Standard","Priority turnaround","Email confirmation of receipt"]},
        {title:"Expedited 1-Day",turnaround:"1 business day",rate:"$1.00/page",desc:"Rush proofreading for urgent transcripts. Same quality, fastest turnaround.",includes:["Everything in Standard","Same-business-day turnaround","Direct communication throughout"]},
      ].map(s=>(
        <div key={s.title} style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"36px",marginBottom:"24px"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"16px",marginBottom:"16px"}}>
            <div>
              <h2 style={{fontFamily:"Georgia,serif",fontSize:"26px",color:"#e8e4dc",marginBottom:"8px"}}>{s.title}</h2>
              <span style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px"}}>{s.turnaround}</span>
            </div>
            <div style={{fontFamily:"Georgia,serif",fontSize:"28px",color:"#c9973a",fontWeight:900}}>{s.rate}</div>
          </div>
          <p style={{color:"#8a7f6e",fontSize:"15px",lineHeight:1.7,marginBottom:"20px"}}>{s.desc}</p>
          <ul style={{listStyle:"none",padding:0}}>
            {s.includes.map(i=><li key={i} style={{color:"#8a7f6e",fontSize:"14px",padding:"6px 0",borderBottom:"1px solid #2d2820"}}>✓ {i}</li>)}
          </ul>
        </div>
      ))}
      <div style={{background:"#1a1813",border:"1px solid #c9973a",borderRadius:"8px",padding:"24px",marginBottom:"48px"}}>
        <p style={{color:"#e8e4dc",fontSize:"15px"}}><strong style={{color:"#c9973a"}}>Complexity Surcharge:</strong> +$0.10/page applies to transcripts with complex formatting, multiple exhibits, or highly technical terminology. Discussed before work begins.</p>
      </div>
      <div style={{display:"flex",gap:"16px",flexWrap:"wrap"}}>
        <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Get a Quote</Link>
        <Link href="/rates" style={{border:"1px solid #2d2820",color:"#e8e4dc",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>See Full Rates</Link>
      </div>
    </div>
  );
}
