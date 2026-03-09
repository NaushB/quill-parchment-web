export default function SamplesPage() {
  const samples = [
    {
      service:'Copyediting',
      before:'The data that was collected suggests that their is a significant correlation between the variables which was studied and demonstrates that further research into this area would be of benefit.',
      after:'The collected data reveals a significant correlation between the studied variables, suggesting that further research in this area would be beneficial.',
    },
    {
      service:'Legal Documents',
      before:'The defendant on the occasion of the incident did willfully and with malice aforethought proceed to engage in conduct which was in violation of the agreement which had been previously established between the two parties.',
      after:'The defendant willfully and maliciously violated the previously established agreement between the parties.',
    },
    {
      service:'Social Sector',
      before:'Our organization has been working in the community for many years and has done alot of work helping people that are in need of assistance with various types of support services.',
      after:'Our organization has served the community for over a decade, providing comprehensive support services to individuals in need.',
    },
    {
      service:'Academic',
      before:'In this paper I will be looking at and examining the various different ways in which climate change is having an impact on biodiversity in terms of different species of animals.',
      after:'This paper examines how climate change affects biodiversity across animal species.',
    },
  ];
  return (
    <main style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'900px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Portfolio</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>See the Difference</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'64px',maxWidth:'600px'}}>Real examples of our editing work. Same information — cleaner, sharper, more professional.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'32px',marginBottom:'64px'}}>
          {samples.map(({service,before,after},i)=>(
            <div key={i} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',overflow:'hidden'}}>
              <div style={{padding:'16px 24px',borderBottom:'1px solid #2d2820',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{background:'rgba(201,151,58,0.1)',border:'1px solid rgba(201,151,58,0.3)',borderRadius:'4px',padding:'4px 12px',color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'1px'}}>{service}</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                <div style={{padding:'24px',borderRight:'1px solid #2d2820'}}>
                  <p style={{color:'#f87171',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'12px'}}>Before</p>
                  <p style={{color:'#8a7f6e',fontSize:'14px',lineHeight:1.7}}>{before}</p>
                </div>
                <div style={{padding:'24px'}}>
                  <p style={{color:'#4ade80',fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'12px'}}>After</p>
                  <p style={{color:'#e8e4dc',fontSize:'14px',lineHeight:1.7}}>{after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{color:'#8a7f6e',fontSize:'13px',marginBottom:'32px',fontStyle:'italic'}}>All samples shown with client permission. Identifying details removed.</p>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Start Your Project</a>
      </div>
    </main>
  );
}
