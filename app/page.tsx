"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{background:'#0f0e0b',minHeight:'100vh',color:'#e8e4dc'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'80px 24px'}}>

        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'24px'}}>
          Professional Proofreading & Editing · Markham, Ontario
        </p>

        <h1 style={{fontFamily:'Playfair Display,Georgia,serif',fontSize:'clamp(40px,7vw,80px)',fontWeight:900,lineHeight:1.05,marginBottom:'24px',color:'#fff'}}>
          Helping Court Reporters<br/>Deliver Polished,<br/>Precise Transcripts
        </h1>

        <div style={{width:'60px',height:'2px',background:'#c9973a',marginBottom:'32px'}}></div>

        <p style={{fontSize:'18px',color:'#8a7f6e',maxWidth:'600px',lineHeight:1.7,marginBottom:'16px'}}>
          Rule-Based. Reporter-Focused. Reliable.
        </p>
        <p style={{fontSize:'16px',color:'#8a7f6e',maxWidth:'600px',lineHeight:1.7,marginBottom:'40px'}}>
          Expert transcript proofreading with PDF annotation — corrections returned via email, clearly marked in red and yellow. Also serving legal professionals, academics, and social sector organizations.
        </p>

        <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'80px'}}>
          <Link href="/contact" style={{background:'#c9973a',color:'#0f0e0b',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            Get a Free Quote
          </Link>
          <Link href="/samples" style={{border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            See Samples
          </Link>
          <Link href="/rates" style={{border:'1px solid #2d2820',color:'#e8e4dc',padding:'16px 32px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
            View Rates
          </Link>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'16px',marginBottom:'80px'}}>
          {[
            {value:'$0.50',label:'Per page standard rate'},
            {value:'24hr',label:'Fastest turnaround'},
            {value:'15+',label:'Years experience'},
            {value:'100%',label:'PDF annotation workflow'},
          ].map(({value,label})=>(
            <div key={label} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <p style={{fontFamily:'Playfair Display,serif',fontSize:'32px',fontWeight:900,color:'#c9973a',margin:'0 0 4px'}}>{value}</p>
              <p style={{fontFamily:'monospace',fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',color:'#8a7f6e',margin:0}}>{label}</p>
            </div>
          ))}
        </div>

        <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'32px'}}>Services</p>
        <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'36px',fontWeight:900,color:'#fff',marginBottom:'32px'}}>What We Do</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginBottom:'80px'}}>
          {[
            {title:'Transcript Proofreading',desc:'Meticulous proofreading for court reporters. PDF annotation workflow — red text and yellow highlighting for every correction.'},
            {title:'Legal Documents',desc:'Precise editing that respects legal intent while improving clarity, consistency, and formatting standards.'},
            {title:'Academic Papers',desc:'Research-ready editing for theses, dissertations, and journal submissions. APA, MLA, Chicago style.'},
            {title:'Social Sector Research',desc:'Clear, persuasive editing for grant proposals, NGO reports, and stakeholder communications.'},
            {title:'Copyediting',desc:'Deeper editing for clarity, flow, and style — preserving your voice while transforming readability.'},
            {title:'Proofreading',desc:'Final-pass error detection for grammar, spelling, punctuation, and consistency across any document type.'},
          ].map(({title,desc})=>(
            <div key={title} style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'24px'}}>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'18px',marginBottom:'10px'}}>{title}</h3>
              <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.6,margin:0}}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{background:'#1a1813',border:'1px solid #2d2820',borderRadius:'8px',padding:'48px',marginBottom:'80px'}}>
          <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'16px'}}>How It Works</p>
          <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'32px',color:'#fff',marginBottom:'40px'}}>Simple, Reliable Process</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'24px'}}>
            {[
              {step:'01',title:'Send Your File',desc:'Email your transcript or document as a PDF.'},
              {step:'02',title:'Get a Quote',desc:'Receive a clear price and turnaround time.'},
              {step:'03',title:'Annotations Added',desc:'Corrections marked in red text and yellow highlighting.'},
              {step:'04',title:'Delivered by Email',desc:'Annotated PDF returned on schedule, every time.'},
            ].map(({step,title,desc})=>(
              <div key={step}>
                <p style={{color:'#c9973a',fontFamily:'monospace',fontSize:'24px',fontWeight:700,marginBottom:'8px'}}>{step}</p>
                <h3 style={{fontFamily:'Playfair Display,serif',color:'#fff',fontSize:'16px',marginBottom:'8px'}}>{title}</h3>
                <p style={{color:'#8a7f6e',fontSize:'13px',lineHeight:1.6,margin:0}}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:'linear-gradient(135deg,#1a1813,#0f0e0b)',border:'1px solid #c9973a',borderRadius:'8px',padding:'48px',textAlign:'center'}}>
          <h2 style={{fontFamily:'Playfair Display,serif',fontSize:'36px',color:'#fff',marginBottom:'16px'}}>Ready for Flawless Transcripts?</h2>
          <p style={{color:'#8a7f6e',fontSize:'16px',marginBottom:'8px'}}>Describe your requirements and Khurram will confirm he can meet your schedule.</p>
          <p style={{color:'#8a7f6e',fontSize:'14px',marginBottom:'32px'}}>Based in Markham, Ontario · Serving court reporters across Canada and the US</p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/contact" style={{background:'#c9973a',color:'#0f0e0b',padding:'18px 40px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
              Contact Khurram
            </Link>
            <a href="mailto:kjbutt@quillandparchment.ca" style={{border:'1px solid #2d2820',color:'#e8e4dc',padding:'18px 40px',borderRadius:'6px',fontFamily:'monospace',fontSize:'13px',letterSpacing:'2px',textTransform:'uppercase',fontWeight:700,textDecoration:'none',display:'inline-block'}}>
              kjbutt@quillandparchment.ca
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
