export default function RatesPage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Pricing</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Clear, Transparent Rates</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'48px'}}>Rates effective November 1, 2025. A standard page is 25 lines, with each line of 8–10 words.</p>

        <div style={{background:'#1a1813',border:'1px solid #c9973a',borderRadius:'8px',padding:'40px',marginBottom:'32px'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'26px',marginBottom:'8px'}}>Transcript Proofreading</h2>
          <p style={{color:'#8a7f6e',fontSize:'14px',marginBottom:'32px'}}>Rate per page · Standard page = 25 lines × 8–10 words</p>
          <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
            {[
              {turnaround:'Standard — 3–5 business days',rate:'$0.50',highlight:false},
              {turnaround:'Expedited — 2 business days',rate:'$0.75',highlight:false},
              {turnaround:'Expedited — 1 business day',rate:'$1.00',highlight:false},
              {turnaround:'Complexity surcharge (if 50%+ of pages exceed 2 min each)',rate:'+$0.10/page',highlight:true},
            ].map(({turnaround,rate,highlight})=>(
              <div key={turnaround} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'18px 0',borderBottom:'1px solid #2d2820',opacity:highlight?0.7:1}}>
                <span style={{color: highlight ? '#8a7f6e' : '#e8e4dc',fontSize:'15px',fontStyle:highlight?'italic':'normal'}}>{turnaround}</span>
                <span style={{color:'#c9973a',fontFamily:'monospace',fontSize:'20px',fontWeight:700,minWidth:'100px',textAlign:'right'}}>{rate}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:'rgba(201,151,58,0.06)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'8px',padding:'24px',marginBottom:'32px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'12px'}}>How It Works</p>
          <ul style={{color:'#e8e4dc',fontSize:'14px',lineHeight:2,margin:0,paddingLeft:'20px'}}>
            <li>Send your transcript as a PDF file</li>
            <li>Khurram annotates directly on the PDF using PDF Annotator</li>
            <li>Red text and yellow highlighting mark all corrections</li>
            <li>Annotated pages returned via email</li>
            <li>Requires Adobe Acrobat Reader to view annotations</li>
          </ul>
        </div>

        <div style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px',marginBottom:'48px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'12px'}}>Other Services</p>
          <p style={{color:'#8a7f6e',fontSize:'14px',lineHeight:1.7}}>Rates for legal documents, academic papers, social sector research, and other content are quoted on a per-project basis. Contact us with your requirements for a free quote.</p>
        </div>

        <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
          <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Get a Free Quote</a>
          <a href="/samples" style={{display:'inline-block',border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>View Samples</a>
        </div>
      </div>
    </div>
  );
}
