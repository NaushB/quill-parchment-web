export default function AboutPage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'720px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>About</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Khurram Butt</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'40px'}}></div>
        <img src="/khurram.jpg" alt="Khurram Butt" style={{width:'280px',borderRadius:'8px',border:'1px solid #2d2820',marginBottom:'40px',display:'block'}}/>
        <p style={{color:'#e8e4dc',fontSize:'18px',lineHeight:1.8,marginBottom:'24px'}}>I am a lifelong word enthusiast and professional proofreader. I believe every sentence deserves to be clear, confident, and perfectly punctuated.</p>
        <p style={{color:'#8a7f6e',fontSize:'16px',lineHeight:1.8,marginBottom:'24px'}}>Before launching Quill and Parchment, I spent more than fifteen years in project finance, refining complex legal and business documents. That experience taught me the value of precision and consistency.</p>
        <p style={{color:'#8a7f6e',fontSize:'16px',lineHeight:1.8,marginBottom:'40px'}}>Today, I help court reporters, writers, researchers, and small businesses produce polished, professional writing that reflects their best work.</p>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Work With Khurram</a>
      </div>
    </div>
  );
}
