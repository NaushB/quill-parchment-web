export default function ServicesPage() {
  const services = [
    {title:'Proofreading',desc:'A meticulous final pass for grammar, spelling, punctuation, and consistency.',includes:['Grammar & spelling','Punctuation','Capitalization','Consistency checks'],turnaround:'24–48 hours'},
    {title:'Copyediting',desc:'Deeper editing for clarity, flow, and style while preserving your voice.',includes:['Sentence structure','Word choice','Style consistency','Flow & clarity'],turnaround:'48–72 hours'},
    {title:'Transcript Editing',desc:'Accurate, professionally formatted transcripts with clear speaker identification.',includes:['Accuracy review','Speaker labels','Timestamps','Formatting'],turnaround:'24–48 hours'},
    {title:'Legal Documents',desc:'Precise editing that respects legal intent while improving clarity.',includes:['Terminology accuracy','Formatting standards','Consistency review','Structural clarity'],turnaround:'48–72 hours'},
    {title:'Academic Papers',desc:'Research-ready editing for essays, theses, and journal submissions.',includes:['APA/MLA/Chicago style','Argument clarity','Citation awareness','Formal language'],turnaround:'3–5 business days'},
    {title:'Social Sector',desc:'Clear, persuasive editing for nonprofits, NGOs, and mission-driven organizations.',includes:['Grant proposals','Research reports','Stakeholder communications','Org content'],turnaround:'3–5 business days'},
  ];
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'900px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Services</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>What We Do</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'64px',maxWidth:'600px'}}>Expert editing across every document type. Every project gets Khurram's personal attention and 15 years of professional expertise.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'64px'}}>
          {services.map(({title,desc,includes,turnaround})=>(
            <div key={title} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'32px'}}>
              <h2 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'22px',marginBottom:'12px'}}>{title}</h2>
              <p style={{color:'#8a7f6e',fontSize:'14px',lineHeight:1.6,marginBottom:'20px'}}>{desc}</p>
              <div style={{borderTop:'1px solid #2d2820',paddingTop:'20px',marginBottom:'20px'}}>
                {includes.map(item=>(
                  <div key={item} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
                    <span style={{color:'#c9973a',fontSize:'12px'}}>✓</span>
                    <span style={{color:'#e8e4dc',fontSize:'13px'}}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{background:'rgba(201,151,58,0.08)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'4px',padding:'8px 12px',display:'inline-block'}}>
                <span style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px'}}>Turnaround: {turnaround}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Get a Free Quote</a>
      </div>
    </div>
  );
}
