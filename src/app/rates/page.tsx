import Link from "next/link";
export default function Rates() {
  return (
    <div style={{maxWidth:"800px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Pricing</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>Clear, Transparent Rates</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"32px"}}></div>
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"48px"}}>Per-page pricing effective November 1, 2025. A standard page is 25 lines × 8–10 words.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",marginBottom:"48px"}}>
        {[
          {label:"Standard",days:"3–5 business days",rate:"$0.50",sub:"per page",note:""},
          {label:"Expedited",days:"2 business days",rate:"$0.75",sub:"per page",note:"Most Popular",highlight:true},
          {label:"Rush",days:"1 business day",rate:"$1.00",sub:"per page",note:""},
        ].map(t=>(
          <div key={t.label} style={{background:t.highlight?"#2a1f0e":"#1a1813",border:`1px solid ${t.highlight?"#c9973a":"#2d2820"}`,borderRadius:"8px",padding:"28px",textAlign:"center",position:"relative"}}>
            {t.note&&<div style={{position:"absolute",top:"-12px",left:"50%",transform:"translateX(-50%)",background:"#c9973a",color:"#0f0e0b",fontFamily:"monospace",fontSize:"11px",letterSpacing:"2px",padding:"4px 12px",borderRadius:"20px",fontWeight:700}}>{t.note}</div>}
            <div style={{fontFamily:"monospace",fontSize:"12px",letterSpacing:"2px",color:"#c9973a",marginBottom:"8px"}}>{t.label.toUpperCase()}</div>
            <div style={{fontFamily:"Georgia,serif",fontSize:"42px",fontWeight:900,color:"#e8e4dc"}}>{t.rate}</div>
            <div style={{color:"#8a7f6e",fontSize:"13px",marginBottom:"12px"}}>{t.sub}</div>
            <div style={{color:"#8a7f6e",fontSize:"13px",fontFamily:"monospace"}}>{t.days}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"28px",marginBottom:"32px"}}>
        <h3 style={{fontFamily:"Georgia,serif",color:"#e8e4dc",marginBottom:"16px"}}>Additional Notes</h3>
        {[["Complexity Surcharge","+$0.10/page for technical, multi-exhibit, or complex transcripts. Confirmed before work begins."],["Standard Page","25 lines × 8–10 words per line."],["Payment","Invoiced upon delivery. E-transfer accepted."],["Minimum","No minimum page count."]].map(([t,d])=>(
          <div key={t} style={{display:"flex",gap:"16px",padding:"12px 0",borderBottom:"1px solid #2d2820"}}>
            <div style={{color:"#c9973a",fontFamily:"monospace",fontSize:"13px",minWidth:"160px"}}>{t}</div>
            <div style={{color:"#8a7f6e",fontSize:"14px"}}>{d}</div>
          </div>
        ))}
      </div>
      <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Request a Quote</Link>
    </div>
  );
}
