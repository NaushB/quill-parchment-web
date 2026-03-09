export default function SamplesPage() {
  const samples = [
    {name:'Proofreading Sample 1',file:'/Proofreading-Sample-1.pdf'},
    {name:'Proofreading Sample 2',file:'/Proofreading-Sample-2.pdf'},
    {name:'Proofreading Sample 3',file:'/Proofreading-Sample-3.pdf'},
    {name:'Proofreading Sample 4',file:'/Proofreading-Sample-4.pdf'},
    {name:'Proofreading Sample 5',file:'/Proofreading-Sample-5.pdf'},
    {name:'Proofreading Sample 6',file:'/Proofreading-Sample-6.pdf'},
  ];
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',padding:'80px 24px'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>Portfolio</p>
        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'52px',fontWeight:900,color:'#fff',lineHeight:1.1,marginBottom:'16px'}}>Proofreading Samples</h1>
        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'24px'}}></div>
        <p style={{color:'#8a7f6e',fontSize:'17px',lineHeight:1.7,marginBottom:'48px'}}>Real annotated transcripts showing Khurram's PDF annotation workflow — corrections marked in red text and yellow highlighting.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px',marginBottom:'48px'}}>
          {samples.map(({name,file})=>(
            <a key={file} href={file} target="_blank" rel="noopener noreferrer" style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px',textDecoration:'none',display:'block',transition:'border-color 0.2s'}}>
              <div style={{fontSize:'32px',marginBottom:'12px'}}>📄</div>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'16px',marginBottom:'8px'}}>{name}</h3>
              <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',margin:0}}>View PDF →</p>
            </a>
          ))}
        </div>
        <div style={{background:'rgba(201,151,58,0.06)',border:'1px solid rgba(201,151,58,0.2)',borderRadius:'8px',padding:'24px',marginBottom:'48px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'8px'}}>Note</p>
          <p style={{color:'#8a7f6e',fontSize:'14px',lineHeight:1.7,margin:0}}>You need Adobe Acrobat Reader installed to view annotations. All samples shown with client permission.</p>
        </div>
        <a href="/contact" style={{display:'inline-block',background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Start Your Project</a>
      </div>
    </div>
  );
}
