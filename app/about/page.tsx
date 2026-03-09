export default function AboutPage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'720px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>About</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Khurram Butt</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'40px'}}></div>
        <p style={{color:'#e8e4dc',fontSize:'18px',lineHeight:1.8,marginBottom:'24px'}}>I'm a lifelong word enthusiast and professional proofreader. I believe every sentence deserves to be clear, confident, and perfectly punctuated.</p>
        <p style={{color:'#8a7f6e',fontSize:'16px',lineHeight:1.8,marginBottom:'24px'}}>Before launching Quill & Parchment, I spent more than fifteen years in project finance, refining complex legal and business documents. That experience taught me the value of precision and consistency — skills I now apply to every transcript, research paper, and business document I proofread.</p>
        <p style={{color:'#8a7f6e',fontSize:'16px',lineHeight:1.8,marginBottom:'40px'}}>Today, I help court reporters, writers, researchers, and small businesses produce polished, professional writing that reflects their best work. Whether it's transcript proofreading, academic editing, or business proofreading, my focus is always on clarity, correctness, and tone.</p>

        <div style={{background:'rgba(201,151,58,0.06)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'8px',padding:'24px',marginBottom:'40px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'16px'}}>Reference Guides Used</p>
          <ul style={{color:'#e8e4dc',fontSize:'14px',lineHeight:2,margin:0,paddingLeft:'20px'}}>
            <li>The Gregg Reference Manual</li>
            <li>Morson's English Guide for Court Reporters</li>
            <li>Court Reporting: Bad Grammar/Good Punctuation</li>
          </ul>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'64px'}}>
          {[
            {title:'15+ Years',desc:'Professional experience in legal and business document refinement.'},
            {title:'Precision',desc:'Every annotation is deliberate. Every correction is explained.'},
            {title:'Confidential',desc:'Your transcripts and documents are handled with complete discretion.'},
          ].map(({title,desc})=>(
            <div key={title} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'#c9973a',fontSize:'18px',marginBottom:'12px'}}>{title}</h3>
              <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.6,margin:0}}>{desc}</p>
            </div>
          ))}
        </div>

        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Work With Khurram</a>
      </div>
    </div>
  );
}
