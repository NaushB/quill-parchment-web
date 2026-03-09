export default function HowItWorksPage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'720px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Process</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>How to Work With Us</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'48px'}}>A simple, reliable process designed around your schedule and workflow.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'24px',marginBottom:'48px'}}>
          {[
            {step:'01',title:'Contact Khurram',desc:'Reach out via the contact form or email and describe your requirements — document type, page count, and desired turnaround time.'},
            {step:'02',title:'Confirm Schedule',desc:'Khurram will confirm he can execute the assignment within your desired schedule and provide a clear quote.'},
            {step:'03',title:'Send Your File',desc:'Send your transcript or document as a PDF file. Khurram works with PDF Annotator. If you use WordPerfect or need help converting your file, just ask.'},
            {step:'04',title:'Fill Out Preference Sheet',desc:'First time working together? Complete the preference sheet so Khurram can match your exact style guide preferences from day one.'},
            {step:'05',title:'Receive Annotated PDF',desc:'Khurram marks corrections directly on the PDF — red text and yellow highlighting for every annotation. Returned via email on schedule.'},
            {step:'06',title:'View With Adobe Reader',desc:'Open the annotated PDF with Adobe Acrobat Reader (free, latest version) to see all annotations clearly.'},
          ].map(({step,title,desc})=>(
            <div key={step} style={{display:'flex',gap:'24px',background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <div style={{color:'#c9973a',fontFamily:'monospace',fontSize:'24px',fontWeight:700,minWidth:'40px'}}>{step}</div>
              <div>
                <h3 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'18px',marginBottom:'8px'}}>{title}</h3>
                <p style={{color:'#8a7f6e',fontSize:'14px',lineHeight:1.6,margin:0}}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(201,151,58,0.06)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'8px',padding:'24px',marginBottom:'48px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Software Note</p>
          <p style={{color:'#e8e4dc',fontSize:'14px',lineHeight:1.7,margin:0}}>Khurram works primarily with PDF Annotator. He can also work in WordPerfect. If you use different software and need help converting your file to PDF, reach out — he is happy to assist.</p>
        </div>
        <div style={{display:'flex',gap:'16px',flexWrap:'wrap'}}>
          <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Get Started</a>
          <a href="/preferences" style={{display:'inline-block',border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Preference Sheet</a>
        </div>
      </div>
    </div>
  );
}
