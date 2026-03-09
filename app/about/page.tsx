export default function AboutPage() {
  return (
    <main style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'720px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>About</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'24px'}}>The Editor Behind the Words</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'40px'}}></div>
        <p style={{color:'#e8e4dc',fontSize:'18px',lineHeight:1.8,marginBottom:'24px'}}>Khurram Butt is a professional proofreader and editor based in Markham, Ontario, with over 15 years of experience helping academics, legal professionals, and nonprofit organizations communicate with precision and confidence.</p>
        <p style={{color:'#8a7f6e',fontSize:'16px',lineHeight:1.8,marginBottom:'24px'}}>Quill and Parchment specializes in proofreading, copyediting, transcript editing, legal documents, and social sector research. Every document receives the same meticulous care — whether it is a PhD dissertation, a legal brief, or a grant proposal that could fund years of critical work.</p>
        <p style={{color:'#c9973a',fontStyle:'italic',fontSize:'17px',lineHeight:1.8,marginBottom:'48px',borderLeft:'3px solid #c9973a',paddingLeft:'24px'}}>"Every document I edit represents someone's ideas, arguments, or life's work. I treat each one with the care it deserves."</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'64px'}}>
          {[
            {title:'Precision',desc:'Every word matters. Every comma has a purpose. We catch what others miss.'},
            {title:'Trust',desc:'Complete confidentiality on every project. Your work stays yours.'},
            {title:'Expertise',desc:'Specialized knowledge across legal, academic, and nonprofit writing.'},
          ].map(({title,desc})=>(
            <div key={title} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'#c9973a',fontSize:'18px',marginBottom:'12px'}}>{title}</h3>
              <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.6}}>{desc}</p>
            </div>
          ))}
        </div>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Work With Us</a>
      </div>
    </main>
  );
}
