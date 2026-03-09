import Link from "next/link";
export default function Samples() {
  return (
    <div style={{maxWidth:"900px",margin:"0 auto",padding:"80px 24px"}}>
      <p style={{color:"#c9973a",fontFamily:"monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"16px"}}>Work Samples</p>
      <h1 style={{fontFamily:"Georgia,serif",fontSize:"52px",fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:"16px"}}>See the Difference</h1>
      <div style={{width:"60px",height:"2px",background:"#c9973a",marginBottom:"24px"}}></div>
      <p style={{color:"#8a7f6e",fontSize:"17px",lineHeight:1.8,marginBottom:"48px"}}>Real annotated transcript samples. Download and open in Adobe Acrobat Reader to see Khurram's red text and yellow highlight annotations.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"20px",marginBottom:"48px"}}>
        {[1,2,3,4,5,6].map(n=>(
          <div key={n} style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{color:"#e8e4dc",fontFamily:"Georgia,serif",fontSize:"16px",marginBottom:"6px"}}>Proofreading Sample {n}</div>
              <div style={{color:"#8a7f6e",fontSize:"13px",fontFamily:"monospace"}}>PDF · Annotated Transcript</div>
            </div>
            <a href={`/Proofreading-Sample-${n}.pdf`} download style={{background:"#c9973a",color:"#0f0e0b",padding:"10px 18px",borderRadius:"4px",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px",fontWeight:700,textDecoration:"none",whiteSpace:"nowrap"}}>Download</a>
          </div>
        ))}
      </div>
      <div style={{background:"#1a1813",border:"1px solid #2d2820",borderRadius:"8px",padding:"24px",marginBottom:"48px"}}>
        <p style={{color:"#8a7f6e",fontSize:"14px"}}>⚠️ <strong style={{color:"#e8e4dc"}}>Viewing tip:</strong> Open downloaded PDFs in Adobe Acrobat Reader (free, latest version) to see all annotations clearly. Some browsers may not display PDF annotations.</p>
      </div>
      <Link href="/contact" style={{background:"#c9973a",color:"#0f0e0b",padding:"16px 32px",borderRadius:"6px",fontFamily:"monospace",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,textDecoration:"none"}}>Request a Quote</Link>
    </div>
  );
}
